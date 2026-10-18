// Leave IDs empty until the accounts exist; nothing loads while they are empty.
// Before adding any ID, add a cookie consent banner (UK PECR). Tags only load once localStorage 'optima-consent' is 'granted'.
export const analytics = {
  ga4MeasurementId: '',
  metaPixelId: '',
  consentStorageKey: 'optima-consent'
};

export const analyticsEnabled = Boolean(analytics.ga4MeasurementId || analytics.metaPixelId);
