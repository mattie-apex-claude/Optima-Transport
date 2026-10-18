import { photo } from './photos.js';

// Add, remove or edit entries here to update the "Recent Moves" homepage section.
export const recentMoves = [
  {
    route: 'Leeds → London',
    service: 'House Removal',
    description: '3-bedroom property, full pack & move',
    image: photo('house-removal-van-outside-brick-home'),
    pos: '50% 45%',
    alt: 'Optima Transport removals van parked outside a brick-built home ready for a Leeds to London house removal',
    href: '/removals/house-removals/'
  },
  {
    route: 'Manchester',
    service: 'House Clearance',
    description: '2-bedroom flat, full property clearance',
    image: photo('house-clearance-blanket-wrapped-furniture-sack-truck'),
    pos: '50% 15%',
    alt: 'Optima Transport team member covering furniture with a blanket beside a sack truck during a Manchester flat clearance',
    href: '/clearances/house-clearances/'
  },
  {
    route: 'Sheffield → Birmingham',
    service: 'Long Haulage',
    description: 'Commercial goods pallet transport',
    image: photo('commercial-pallet-haulage-wrapped-insulation-load'),
    pos: '50% 55%',
    alt: 'Wrapped pallets of commercial goods stacked in an Optima Transport van for Sheffield to Birmingham haulage',
    href: '/haulage/long-distance-haulage/'
  },
  {
    route: 'York',
    service: 'Single Item Move',
    description: 'Sofa and wardrobe delivery',
    image: photo('wrapped-sofa-strapped-furniture-move'),
    pos: '50% 60%',
    alt: 'Sofa wrapped in a protective blanket and strapped securely in an Optima Transport van for a York furniture delivery',
    href: '/haulage/single-item-and-furniture-transport/'
  }
];
