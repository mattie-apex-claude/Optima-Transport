// Cloudflare Pages Function: POST /api/enquiry
// Validates the enquiry and forwards it to the GoHighLevel inbound webhook stored in the GHL_WEBHOOK_URL secret.

const SERVICES = [
  'House Removals',
  'House Clearances',
  'Waste Removal',
  'Short Distance Haulage',
  'Long Distance Haulage',
  'Single Item Moves',
  'Other'
];

const LEAD_SOURCE = 'Website Enquiry Form';
const WEBSITE = 'optimatransport.co.uk';
const HOME_VISIT_SERVICES = ['House Removals', 'House Clearances'];
const PROPERTY_TYPES = ['House', 'Flat', 'Bungalow', 'Other'];
const BEDROOMS = ['Studio', '1', '2', '3', '4', '5', '6+'];
const MAX_BODY_BYTES = 10_000;
const WEBHOOK_TIMEOUT_MS = 10_000;

const POSTCODE = /^[A-Z]{1,2}\d[A-Z\d]?\s?\d[A-Z]{2}$/i;
const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const UUID = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

const json = (body, status = 200) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'no-store' }
  });

const clean = (value, max) => (typeof value === 'string' ? value.replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F]/g, '').trim().slice(0, max) : '');

const formatPostcode = (value) => {
  const compact = value.replace(/\s+/g, '').toUpperCase();
  return `${compact.slice(0, -3)} ${compact.slice(-3)}`;
};

const todayInLondon = () => new Intl.DateTimeFormat('en-CA', { timeZone: 'Europe/London' }).format(new Date());

const isValidFutureDate = (value) => {
  const parsed = /^\d{4}-\d{2}-\d{2}$/.test(value) ? new Date(`${value}T00:00:00Z`) : null;
  if (!parsed || Number.isNaN(parsed.getTime()) || parsed.toISOString().slice(0, 10) !== value) return 'Please choose a valid date.';
  return value < todayInLondon() ? 'Please choose today or a future date.' : '';
};

export function validate(input) {
  const errors = {};
  const name = clean(input.name, 100);
  const email = clean(input.email, 254);
  const phone = clean(input.phone, 25);
  const service = clean(input.service, 60);
  const collectionPostcode = clean(input.collectionPostcode, 10);
  const deliveryPostcode = clean(input.deliveryPostcode, 10);
  const preferredDate = clean(input.preferredDate, 10);
  const details = clean(input.details, 2000);

  if (name.length < 2) errors.name = 'Please enter your full name.';
  if (!EMAIL.test(email)) errors.email = 'Please enter a valid email address.';
  const phoneDigits = phone.replace(/\D/g, '');
  if (!/^\+?[\d\s()-]+$/.test(phone) || phoneDigits.length < 10 || phoneDigits.length > 13) {
    errors.phone = 'Please enter a valid UK phone number.';
  }
  if (!SERVICES.includes(service)) errors.service = 'Please choose the service you need.';
  if (collectionPostcode && !POSTCODE.test(collectionPostcode)) errors.collectionPostcode = 'Please enter a valid UK postcode.';
  if (deliveryPostcode && !POSTCODE.test(deliveryPostcode)) errors.deliveryPostcode = 'Please enter a valid UK postcode.';
  if (preferredDate) {
    const dateError = isValidFutureDate(preferredDate);
    if (dateError) errors.preferredDate = dateError;
  }

  // A home visit is mandatory for house removals and clearances; property details are ignored for other services.
  const homeVisitRequired = HOME_VISIT_SERVICES.includes(service);
  const propertyAddress = homeVisitRequired ? clean(input.propertyAddress, 200) : '';
  const propertyPostcode = homeVisitRequired ? clean(input.propertyPostcode, 10) : '';
  const propertyType = homeVisitRequired ? clean(input.propertyType, 20) : '';
  const bedrooms = homeVisitRequired ? clean(input.bedrooms, 10) : '';

  if (homeVisitRequired) {
    if (propertyAddress.length < 5) errors.propertyAddress = 'Please enter the property address.';
    if (!POSTCODE.test(propertyPostcode)) errors.propertyPostcode = 'Please enter a valid UK postcode.';
    if (propertyType && !PROPERTY_TYPES.includes(propertyType)) errors.propertyType = 'Please choose a property type.';
    if (bedrooms && !BEDROOMS.includes(bedrooms)) errors.bedrooms = 'Please choose the number of bedrooms.';
  }
  if (details.length < 10) errors.details = 'Please tell us a little about the job (at least 10 characters).';
  if (input.consent !== true) errors.consent = 'Please confirm you have read the Privacy Policy.';

  return {
    errors,
    values: {
      name,
      email,
      phone,
      service,
      collectionPostcode: collectionPostcode && POSTCODE.test(collectionPostcode) ? formatPostcode(collectionPostcode) : '',
      deliveryPostcode: deliveryPostcode && POSTCODE.test(deliveryPostcode) ? formatPostcode(deliveryPostcode) : '',
      preferredDate,
      details,
      homeVisitRequired,
      propertyAddress,
      propertyPostcode: homeVisitRequired && POSTCODE.test(propertyPostcode) ? formatPostcode(propertyPostcode) : '',
      propertyType,
      bedrooms
    }
  };
}

export function buildPayload(values, { sourcePage, submissionId, now = new Date() }) {
  const [firstName, ...rest] = values.name.split(/\s+/);
  const submittedAt = now.toISOString();
  const homeVisitRequired = values.homeVisitRequired === true;
  return {
    leadSource: LEAD_SOURCE,
    website: WEBSITE,
    enquiryType: homeVisitRequired ? 'Home Visit Required' : 'Standard Enquiry',
    sourcePage,
    submittedAt,
    submissionId,
    firstName,
    lastName: rest.join(' '),
    fullName: values.name,
    email: values.email,
    phone: values.phone,
    serviceRequired: values.service,
    collectionPostcode: values.collectionPostcode,
    deliveryPostcode: values.deliveryPostcode,
    preferredDate: values.preferredDate,
    additionalDetails: values.details,
    home_visit_required: homeVisitRequired,
    quotation_method: homeVisitRequired ? 'Home Visit' : '',
    propertyAddress: values.propertyAddress,
    propertyPostcode: values.propertyPostcode,
    propertyType: values.propertyType,
    bedrooms: values.bedrooms,
    privacyPolicyConsent: true,
    privacyPolicyConsentAt: submittedAt,
    tags: ['Website Enquiry', values.service, ...(homeVisitRequired ? ['Home Visit Required'] : [])]
  };
}

export async function onRequestPost({ request, env }) {
  const requestUrl = new URL(request.url);

  const origin = request.headers.get('Origin');
  if (origin) {
    let originHost = '';
    try {
      originHost = new URL(origin).host;
    } catch {
      /* invalid origin falls through to rejection */
    }
    if (originHost !== requestUrl.host) return json({ ok: false, error: 'forbidden' }, 403);
  }

  if (!(request.headers.get('Content-Type') ?? '').includes('application/json')) {
    return json({ ok: false, error: 'bad_request' }, 415);
  }

  const raw = await request.text();
  if (raw.length > MAX_BODY_BYTES) return json({ ok: false, error: 'too_large' }, 413);

  let input;
  try {
    input = JSON.parse(raw);
  } catch {
    return json({ ok: false, error: 'bad_request' }, 400);
  }
  if (!input || typeof input !== 'object') return json({ ok: false, error: 'bad_request' }, 400);

  // Honeypot: bots fill the hidden field. Reply as if it worked so they do not retry.
  if (typeof input.website_url === 'string' && input.website_url.trim() !== '') return json({ ok: true });

  const { errors, values } = validate(input);
  if (Object.keys(errors).length > 0) return json({ ok: false, error: 'validation', errors }, 422);

  const webhookUrl = env.GHL_WEBHOOK_URL;
  if (!webhookUrl || !/^https:\/\//.test(webhookUrl)) {
    console.error('GHL_WEBHOOK_URL is not configured');
    return json({ ok: false, error: 'not_configured' }, 503);
  }

  const sourcePage = (() => {
    const path = clean(input.sourcePage, 200);
    return path.startsWith('/') && !path.startsWith('//') ? new URL(path, requestUrl.origin).href : new URL('/contact/', requestUrl.origin).href;
  })();
  const submissionId = typeof input.submissionId === 'string' && UUID.test(input.submissionId) ? input.submissionId : crypto.randomUUID();

  const payload = buildPayload(values, { sourcePage, submissionId });

  try {
    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
      signal: AbortSignal.timeout(WEBHOOK_TIMEOUT_MS)
    });
    if (!response.ok) {
      console.error(`GHL webhook rejected submission ${submissionId} with status ${response.status}`);
      return json({ ok: false, error: 'delivery_failed' }, 502);
    }
  } catch (error) {
    console.error(`GHL webhook unreachable for submission ${submissionId}: ${error?.name ?? 'error'}`);
    return json({ ok: false, error: 'delivery_failed' }, 502);
  }

  return json({ ok: true, submissionId });
}

export const onRequest = () => json({ ok: false, error: 'method_not_allowed' }, 405);
