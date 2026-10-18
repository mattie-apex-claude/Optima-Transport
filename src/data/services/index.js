import { removals } from './removals.js';
import { clearances } from './clearances.js';
import { haulage } from './haulage.js';
import { photo } from '../photos.js';

// One distinct photo per page; overrides the placeholder image/imageAlt in the page data files.
const pagePhotos = {
  services: ['optima-transport-van-livery-close-up', 'Optima Transport van showing the company logo and its removals, clearances and haulage services'],
  removals: ['removals-crew-member-van-rear-doors', 'Optima Transport crew member at the open rear doors of a removals van loaded with furniture'],
  'removals/house-removals': ['house-removal-crew-van-rear-doors', 'Optima Transport house removals crew member loading furniture into a van through the open rear doors'],
  'removals/office-and-commercial-removals': ['office-removals-stacked-boxes-loading', 'Optima Transport crew member carrying stacked boxes during an office and commercial removal'],
  'removals/long-distance-removals': ['long-distance-removals-van-tower-block', 'Optima Transport van parked beside a tower block ahead of a long distance removal from Yorkshire'],
  clearances: ['clearances-van-skip-yorkshire-property', 'Optima Transport clearance van parked beside a skip outside a stone property in Yorkshire'],
  'clearances/domestic-clearances': ['domestic-clearance-protecting-luggage-blankets', 'Optima Transport crew member lifting a blanket-protected item from a van during a domestic clearance'],
  'clearances/house-clearances': ['house-clearance-furniture-loaded-van', 'Optima Transport van packed with furniture and blankets after a house clearance in Yorkshire'],
  'clearances/probate-clearances': ['probate-clearance-van-period-property', 'Optima Transport van outside a period stone property ahead of a probate clearance'],
  'clearances/garage-and-outbuilding-clearances': ['garage-outbuilding-clearance-fence-panels', 'Fence panels and bags of materials loaded into an Optima Transport van during a garage and outbuilding clearance'],
  'clearances/commercial-clearances': ['commercial-clearance-van-industrial-units', 'Optima Transport van parked outside commercial storage units ready for a commercial clearance'],
  'clearances/office-clearances': ['office-clearance-confidential-waste-recycling-centre', 'Optima Transport van at a waste and recycling centre after an office clearance'],
  'clearances/retail-and-shop-clearances': ['retail-shop-clearance-van-trade-unit', 'Optima Transport van outside a trade unit used for retail and shop clearances'],
  'clearances/end-of-lease-clearances': ['end-of-lease-clearance-evening-van', 'Optima Transport van with rear doors open during an evening end-of-lease clearance'],
  'clearances/industrial-clearances': ['industrial-clearance-van-industrial-estate', 'Optima Transport van parked at an industrial estate for an industrial clearance'],
  'clearances/warehouse-clearances': ['warehouse-clearance-appliances-boxes-van', 'Appliances and boxes loaded into an Optima Transport van during a warehouse clearance'],
  'clearances/factory-clearances': ['factory-clearance-strapped-equipment-van', 'Wrapped equipment strapped securely inside an Optima Transport van during a factory clearance'],
  'clearances/industrial-unit-clearances': ['industrial-unit-clearance-metal-casks-van', 'Metal casks secured in an Optima Transport van during an industrial unit clearance'],
  haulage: ['haulage-van-long-distance-livery', 'Optima Transport van with long distance haulage lettering on the road in Yorkshire'],
  'haulage/long-distance-haulage': ['long-distance-haulage-van-loaded-cartons', 'Optima Transport van loaded floor to ceiling with cartons for long distance haulage across the UK'],
  'haulage/short-distance-haulage': ['short-distance-haulage-timber-sleepers-delivered', 'Timber sleepers delivered to a garden by Optima Transport on a short distance haulage job'],
  'haulage/single-item-and-furniture-transport': ['single-item-sofa-delivery-van', 'Sofa loaded into an Optima Transport van for single item and furniture transport']
};

const withPhoto = (page) => {
  const entry = pagePhotos[page.slug];
  if (!entry) return page;
  return { ...page, image: photo(entry[0]), imageAlt: entry[1] };
};

const hub = {
  slug: 'services',
  level: 'hub',
  name: 'Services',
  summary: 'Removals, clearances and haulage for domestic and commercial customers.',
  quoteService: 'Other',
  seoTitle: 'Removals, Clearances & Haulage Services | Boston Spa | Optima',
  metaDescription:
    'Removals, clearances and haulage from Optima Transport in Boston Spa. Serving Leeds, York, Harrogate, Wetherby, Tadcaster, Yorkshire and the UK. Fixed-price quotes.',
  h1: 'Removals, Clearances & Haulage Services',
  eyebrow: 'Our Services',
  lead: 'Optima Transport is a Boston Spa based removals, clearance and haulage company serving domestic and commercial customers across Yorkshire and nationwide. Choose a service below to see how we can help.',
  sections: [
    {
      h2: 'Three services, one dependable company',
      paras: [
        'Whether you are moving home, emptying a warehouse or sending goods across the country, the approach is the same: understand the job, agree a fixed price in advance and send a dedicated crew and vehicle to carry it out. You deal with one company from enquiry to completion.',
        'Not sure which service you need? Describe your job through the quote form or book a consultation and we will point you in the right direction.'
      ]
    }
  ],
  audience: [
    { h3: 'Homeowners and tenants', text: 'Moving home, clearing a property or transporting furniture.' },
    { h3: 'Businesses', text: 'Relocating, clearing premises or moving goods between sites.' },
    { h3: 'Property professionals', text: 'Landlords, agents and executors needing a reliable contractor.' }
  ],
  why: [
    { h3: 'Fixed-price quotations', text: 'A clear price before the job starts, with no hidden costs.' },
    { h3: 'Dedicated vehicle and crew', text: 'Your job is not shared with other customers.' },
    { h3: 'Based in Boston Spa', text: 'Local to Yorkshire with the capability to work nationwide.' },
    { h3: 'Fully insured service', text: 'Peace of mind on every job.' }
  ],
  quoteTips: [
    'The service you need and the addresses involved',
    'A rough idea of the size of the job',
    'Your preferred dates',
    'Any access issues at either end'
  ],
  local: 'Based in Boston Spa, we work across Wetherby, Tadcaster, Leeds, York and Harrogate every week, and travel nationwide for removals, haulage and larger clearance jobs.',
  faqs: [
    { q: 'What services does Optima Transport offer?', a: 'We offer removals, clearances and haulage for domestic and commercial customers, including house and office moves, house, office and warehouse clearances, and local and long distance haulage.' },
    { q: 'Where are you based?', a: 'Optima Transport Ltd is based in Boston Spa, serving Yorkshire and the rest of the UK.' },
    { q: 'How do I get a quote?', a: 'Use our online quote form or book a consultation call. We provide a fixed price before the job starts.' }
  ],
  related: []
};

const all = [hub, ...removals, ...clearances, ...haulage];

export const pages = all.map((page) => ({ ...withPhoto(page), path: `/${page.slug}/` }));

const bySlug = new Map(pages.map((page) => [page.slug, page]));

export const getPage = (slug) => bySlug.get(slug);

export const getChildren = (page) => {
  if (page.level === 'hub') return pages.filter((p) => p.level === 'parent');
  return pages.filter((p) => p.parent === page.slug);
};

// Home > Parent > Category > Page
export const getTrail = (page) => {
  const trail = [];
  let current = page;
  while (current) {
    trail.unshift(current);
    current = current.parent ? bySlug.get(current.parent) : undefined;
  }
  return trail;
};

// Maps each page's quoteService to an option in the enquiry form dropdown ('' leaves it unselected).
const formServiceMap = {
  'House Removals': 'House Removals',
  'Office & Commercial Removals': 'Other',
  'Long Distance Removals': 'House Removals',
  'Domestic Clearances': 'House Clearances',
  'Commercial Clearances': 'Other',
  'Industrial Clearances': 'Other',
  'Long Distance Haulage': 'Long Distance Haulage',
  'Short Distance Haulage': 'Short Distance Haulage',
  'Single Item & Furniture Transport': 'Single Item Moves',
  Other: ''
};

export const enquiryServices = [
  'House Removals',
  'House Clearances',
  'Waste Removal',
  'Short Distance Haulage',
  'Long Distance Haulage',
  'Single Item Moves',
  'Other'
];

export const quoteHref = (page) => {
  const service = formServiceMap[page.quoteService] ?? '';
  return service ? `/contact/?service=${encodeURIComponent(service)}` : '/contact/';
};

export const quoteServices = [
  'House Removals',
  'Office & Commercial Removals',
  'Long Distance Removals',
  'Domestic Clearances',
  'Commercial Clearances',
  'Industrial Clearances',
  'Long Distance Haulage',
  'Short Distance Haulage',
  'Single Item & Furniture Transport',
  'Other'
];

const mustGet = (slug) => {
  const page = bySlug.get(slug);
  if (!page) throw new Error(`Unknown service page: ${slug}`);
  return page;
};

const navFor = (slug) => {
  const parent = mustGet(slug);
  return { page: parent, children: getChildren(parent) };
};

export const nav = {
  removals: navFor('removals'),
  haulage: navFor('haulage'),
  clearances: {
    page: mustGet('clearances'),
    groups: getChildren(mustGet('clearances')).map((category) => ({
      page: category,
      children: getChildren(category)
    }))
  }
};
