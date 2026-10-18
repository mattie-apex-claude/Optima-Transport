import { site, coreAreas, widerAreas } from './site.js';

const abs = (path) => new URL(path, site.url).href;

const stripLinks = (text) => text.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1');

const areaServed = [
  ...[...coreAreas, ...widerAreas].map((name) => ({ '@type': 'Place', name })),
  { '@type': 'Country', name: 'United Kingdom' }
];

export const businessId = `${site.url}/#business`;

export const localBusinessSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': businessId,
  name: site.name,
  legalName: site.legalName,
  url: site.url,
  telephone: site.phoneIntl,
  email: site.email,
  logo: abs(site.logo),
  image: abs(site.defaultImage),
  description: site.description,
  sameAs: [site.facebook, site.instagram],
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: site.phoneIntl,
    email: site.email,
    contactType: 'customer service',
    areaServed: 'GB',
    availableLanguage: 'en-GB'
  },
  address: {
    '@type': 'PostalAddress',
    addressLocality: site.locality,
    addressRegion: site.region,
    addressCountry: site.country
  },
  areaServed
});

export const serviceSchema = (page, children = []) => ({
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: page.name,
  serviceType: page.name,
  description: page.metaDescription,
  url: abs(page.path),
  image: abs(page.image.og),
  provider: { '@type': 'LocalBusiness', '@id': businessId, name: site.name, url: site.url },
  areaServed,
  ...(children.length
    ? {
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: page.name,
          itemListElement: children.map((child) => ({
            '@type': 'Offer',
            itemOffered: { '@type': 'Service', name: child.name, url: abs(child.path) }
          }))
        }
      }
    : {})
});

export const breadcrumbSchema = (trail) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: trail.map((crumb, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: crumb.name,
    item: abs(crumb.path)
  }))
});

export const faqSchema = (faqs) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((item) => ({
    '@type': 'Question',
    name: item.q ?? item.question,
    acceptedAnswer: { '@type': 'Answer', text: stripLinks(item.a ?? item.answer) }
  }))
});
