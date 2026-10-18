// Haulage pages. Inline links use [text](/path/) and are rendered by the page template.
const LOAD = { src: '/images/3.jpg', width: 720, height: 960 };
const VAN = { src: '/images/van-branded.jpg', width: 1536, height: 2048 };

export const haulage = [
  {
    slug: 'haulage',
    level: 'parent',
    name: 'Haulage',
    summary: 'Long distance, short distance and single item transport for businesses and individuals.',
    quoteService: 'Long Distance Haulage',
    seoTitle: 'Haulage Services Yorkshire & Nationwide | Optima Transport',
    metaDescription:
      'Haulage, goods transport and furniture delivery from Boston Spa across Yorkshire and the UK. Long distance, local and single item transport at fixed prices.',
    h1: 'Haulage & Goods Transport in Yorkshire & Nationwide',
    eyebrow: 'Haulage',
    lead: 'When goods need to get from A to B reliably, Optima Transport provides dependable haulage for businesses and individuals, with a fixed price and clear communication.',
    image: VAN,
    imageAlt: 'Optima Transport branded van advertising long distance haulage, furniture moves and nationwide transport',
    sections: [
      {
        h2: 'What our haulage service involves',
        paras: [
          'Haulage is about moving goods rather than a whole household or office. You tell us what needs collecting, where it is going and by when, and we provide a fixed-price quotation. A dedicated vehicle and driver then collect and deliver, keeping you updated along the way.',
          'We work with businesses sending regular loads, with individuals moving a single bulky item, and with anyone needing a straightforward point-to-point delivery that does not suit a courier.'
        ],
        items: [
          { h3: 'Across the UK', text: 'Scheduled nationwide transport between Yorkshire and anywhere in the country.' },
          { h3: 'Local and regional', text: 'Collections and deliveries across Yorkshire and neighbouring counties.' },
          { h3: 'One-off items', text: 'Furniture and single items collected and delivered on their own.' }
        ]
      },
      {
        h2: 'Choose the right haulage option',
        paras: [
          'Moving goods across the country? See [long distance haulage](/haulage/long-distance-haulage/). Staying local to Yorkshire? [Short distance haulage](/haulage/short-distance-haulage/) is designed for local and regional jobs. Collecting one item, such as a sofa or wardrobe? Our [single item and furniture transport](/haulage/single-item-and-furniture-transport/) service handles it without paying for a full load.',
          'Moving your belongings rather than goods? You may prefer our [removals](/removals/) service, which is designed around households and businesses.'
        ]
      }
    ],
    audience: [
      { h3: 'Businesses', text: 'Companies with goods, stock or equipment that needs collecting and delivering.' },
      { h3: 'Individuals', text: 'People moving furniture or large purchases that will not fit in a car.' },
      { h3: 'Traders and sellers', text: 'Sellers and buyers arranging delivery of bulky items.' }
    ],
    why: [
      { h3: 'Fixed-price quotation', text: 'A clear price agreed before your goods are collected.' },
      { h3: 'Dedicated vehicle', text: 'Your goods are not shared with other customers\' loads.' },
      { h3: 'Nationwide capability', text: 'Local jobs and long distance journeys under one dependable service.' },
      { h3: 'Fully insured service', text: 'Goods-in-transit insurance for peace of mind.' }
    ],
    quoteTips: [
      'Collection and delivery addresses',
      'What is being moved, with approximate size and weight',
      'Preferred collection and delivery dates',
      'Loading and unloading arrangements at each end',
      'Whether the goods are palletised'
    ],
    local: 'Based in Boston Spa, we collect and deliver across Leeds, York, Harrogate, Wetherby and Tadcaster, and are well placed for the A1(M), M1 and M62 routes to the rest of the country.',
    faqs: [
      { q: 'What can you transport?', a: 'We transport commercial goods, pallets, furniture and large single items. Tell us what you need moving, with sizes and weights, and we will confirm whether it suits our service.' },
      { q: 'Do you cover the whole UK?', a: 'Yes. Nationwide haulage is one of our core services, alongside local work across Yorkshire.' },
      { q: 'How are haulage jobs priced?', a: 'We provide a fixed-price quotation based on the goods, the distance and the arrangements at each end.' },
      { q: 'Are my goods insured?', a: 'Yes. Jobs are carried out with goods-in-transit insurance from collection to delivery.' }
    ],
    related: ['haulage/long-distance-haulage', 'haulage/short-distance-haulage', 'haulage/single-item-and-furniture-transport', 'removals']
  },

  {
    slug: 'haulage/long-distance-haulage',
    level: 'leaf',
    parent: 'haulage',
    name: 'Long Distance Haulage',
    summary: 'Scheduled nationwide transport of goods, pallets and equipment between Yorkshire and the UK.',
    quoteService: 'Long Distance Haulage',
    seoTitle: 'Long Distance Haulage UK | Yorkshire Based | Optima Transport',
    metaDescription:
      'Nationwide long distance haulage from Yorkshire. Pallets, commercial goods and equipment collected and delivered across the UK at fixed prices.',
    h1: 'Long Distance Haulage From Yorkshire Across the UK',
    eyebrow: 'Long Distance Haulage',
    lead: 'Need goods collected in Yorkshire and delivered across the country, or the other way round? Optima Transport provides reliable long distance haulage at a fixed price.',
    image: VAN,
    imageAlt: 'Optima Transport branded van ready for long distance haulage across the UK',
    sections: [
      {
        h2: 'What our long distance haulage involves',
        paras: [
          'Long distance haulage is the movement of goods over a long journey, usually between regions. We agree the collection and delivery addresses, the nature of the goods and the timings, then provide a fixed-price quotation. A dedicated vehicle collects your goods and travels directly to the destination.',
          'Typical jobs include commercial goods and pallets, equipment between sites and furniture or stock moving between businesses. Tell us the size, weight and handling needs so we can confirm that the job is a good fit.'
        ],
        items: [
          { h3: 'Commercial goods and pallets', text: 'Pallets and boxed stock moved between your premises, suppliers and customers.' },
          { h3: 'Equipment and furniture', text: 'Larger items transported between sites and regions.' },
          { h3: 'Scheduled and repeat runs', text: 'Regular movements planned in advance where you need ongoing transport.' }
        ]
      },
      {
        h2: 'Planning a long distance haulage job',
        paras: [
          'Give us the collection and delivery windows early. For longer journeys, agreeing realistic times at both ends avoids delays. Make sure someone is available to receive the goods and that the delivery address is suitable for the vehicle.',
          'If you are moving a household, see [long distance removals](/removals/long-distance-removals/). For nearby deliveries, [short distance haulage](/haulage/short-distance-haulage/) may be more cost-effective, and one-off items can use [single item and furniture transport](/haulage/single-item-and-furniture-transport/).'
        ]
      }
    ],
    audience: [
      { h3: 'Manufacturers and wholesalers', text: 'Businesses sending goods to customers or other sites across the country.' },
      { h3: 'Retailers', text: 'Companies moving stock between premises or from suppliers.' },
      { h3: 'Contractors and trades', text: 'Teams moving equipment between job sites.' },
      { h3: 'Private customers', text: 'People transporting large items a long way.' }
    ],
    why: [
      { h3: 'Fixed-price quotation', text: 'One agreed price for the whole journey.' },
      { h3: 'Direct, dedicated transport', text: 'Your goods travel in a vehicle for your job, rather than sharing space.' },
      { h3: 'Reliable communication', text: 'Clear updates before, during and after the journey.' },
      { h3: 'Fully insured service', text: 'Goods-in-transit insurance throughout.' }
    ],
    quoteTips: [
      'Collection and delivery addresses and postcodes',
      'Description of the goods, including size and weight',
      'Whether the load is palletised',
      'Collection and delivery date windows',
      'Loading or unloading equipment available at each end'
    ],
    local: 'Because we are based in Boston Spa, close to the A1(M), collections from Leeds, York, Harrogate, Wetherby and Tadcaster can head straight onto the national road network. If you are searching for long distance haulage from Yorkshire, request a quote with the destination and we will confirm the price.',
    faqs: [
      { q: 'Do you offer nationwide haulage?', a: 'Yes. Nationwide haulage is one of our core services, and we regularly move goods across the country.' },
      { q: 'Can you carry pallets?', a: 'Yes, commercial goods and pallet transport are part of our haulage work. Tell us the quantity and dimensions when you request a quote.' },
      { q: 'How do you price long distance jobs?', a: 'We provide a fixed price based on the goods, the route and the arrangements at both ends.' },
      { q: 'Can I book a regular service?', a: 'Contact us with your requirements and we will discuss what regular scheduling is possible.' }
    ],
    related: ['haulage/short-distance-haulage', 'removals/long-distance-removals', 'haulage/single-item-and-furniture-transport']
  },

  {
    slug: 'haulage/short-distance-haulage',
    level: 'leaf',
    parent: 'haulage',
    name: 'Short Distance Haulage',
    summary: 'Local and regional collections and deliveries across Yorkshire for businesses and individuals.',
    quoteService: 'Short Distance Haulage',
    seoTitle: 'Short Distance Haulage Yorkshire | Local Transport | Optima',
    metaDescription:
      'Local and regional haulage across Leeds, York, Harrogate, Wetherby, Tadcaster and Yorkshire. Goods collected and delivered at fixed prices by Optima Transport.',
    h1: 'Short Distance Haulage in Leeds, York & Yorkshire',
    eyebrow: 'Short Distance Haulage',
    lead: 'For goods that only need to travel locally or regionally, Optima Transport offers dependable short distance haulage, with a fixed price and a dedicated vehicle.',
    image: LOAD,
    imageAlt: 'Optima Transport crew member loading boxed goods into a van for local haulage',
    sections: [
      {
        h2: 'What short distance haulage involves',
        paras: [
          'Short distance haulage covers local and regional deliveries, such as moving stock between your units, delivering orders to customers or collecting goods from a supplier. We agree the collection and delivery points, give you a fixed price, and complete the journey with a dedicated vehicle.',
          'It is a practical alternative to a courier when the goods are bulky, heavy or awkward, or to a full removals job when you are not moving a whole property.'
        ],
        items: [
          { h3: 'Business-to-business deliveries', text: 'Stock and equipment between premises or from suppliers.' },
          { h3: 'Trade and contractor transport', text: 'Materials and tools moved between sites.' },
          { h3: 'Regional A to B journeys', text: 'Direct journeys across Yorkshire and neighbouring counties.' }
        ]
      },
      {
        h2: 'When short distance haulage makes sense',
        paras: [
          'If your goods are travelling within Yorkshire, a local haulage job is usually quicker and simpler than a nationwide one. Tell us your pick-up and drop-off windows and any restrictions on access and we will plan the route.',
          'Going further? See [long distance haulage](/haulage/long-distance-haulage/). Moving one piece of furniture? [Single item and furniture transport](/haulage/single-item-and-furniture-transport/) is designed for that. Relocating stock out of a unit you are clearing? See [industrial unit clearances](/clearances/industrial-unit-clearances/).'
        ]
      }
    ],
    audience: [
      { h3: 'Local businesses', text: 'Firms moving goods between sites or to customers in the region.' },
      { h3: 'Traders and contractors', text: 'Teams needing materials or equipment delivered to site.' },
      { h3: 'Online sellers', text: 'Sellers delivering bulky orders that a courier will not take.' }
    ],
    why: [
      { h3: 'Local knowledge', text: 'Based in Boston Spa, we know Yorkshire\'s roads, estates and towns.' },
      { h3: 'Fixed-price quotation', text: 'You know the cost before the journey.' },
      { h3: 'Dedicated vehicle', text: 'Your goods travel on their own.' },
      { h3: 'Fully insured service', text: 'Goods-in-transit insurance throughout.' }
    ],
    quoteTips: [
      'Collection and delivery addresses',
      'Description, size and weight of the goods',
      'Pick-up and delivery windows',
      'Access at each end',
      'Whether the job is one-off or regular'
    ],
    local: 'We run local haulage between Boston Spa, Wetherby, Tadcaster, Leeds, York and Harrogate and across wider Yorkshire. Looking for local haulage near you in Yorkshire? Send the pick-up and drop-off details for a fixed price.',
    faqs: [
      { q: 'What counts as short distance?', a: 'Local and regional journeys within Yorkshire and nearby areas. Longer journeys are covered by our long distance haulage service.' },
      { q: 'Can you deliver to businesses and homes?', a: 'Yes. We deliver to trade, commercial and private addresses.' },
      { q: 'How soon can you collect?', a: 'We can often help at short notice. Tell us your timings and we will confirm what is possible.' }
    ],
    related: ['haulage/long-distance-haulage', 'haulage/single-item-and-furniture-transport', 'clearances/industrial-unit-clearances']
  },

  {
    slug: 'haulage/single-item-and-furniture-transport',
    level: 'leaf',
    parent: 'haulage',
    name: 'Single Item & Furniture Transport',
    summary: 'Sofas, wardrobes and other large items collected and delivered without paying for a full removal.',
    quoteService: 'Single Item & Furniture Transport',
    seoTitle: 'Single Item & Furniture Transport Yorkshire | Optima',
    metaDescription:
      'Single item and furniture delivery across Boston Spa, Leeds, York, Harrogate and the UK. Sofas, wardrobes and large items moved for a fixed price.',
    h1: 'Single Item & Furniture Transport in Yorkshire & UK-Wide',
    eyebrow: 'Single Item & Furniture Transport',
    lead: 'Bought a sofa, wardrobe or other large item that will not fit in your car? Optima Transport collects and delivers it carefully for a fixed price.',
    image: LOAD,
    imageAlt: 'Optima Transport crew member loading a single large item into the van for delivery',
    sections: [
      {
        h2: 'What single item transport involves',
        paras: [
          'Sometimes you only need one thing moving. We collect the item from its current address, load it with care and deliver it to where you need it. You receive a fixed-price quotation first, so you are not paying for a full removal when you only need a delivery.',
          'It suits furniture bought second-hand or online, items moving between family members, and larger pieces being sent to or from a business. Tell us the dimensions and any access difficulties, such as stairs or narrow doorways, so we can plan accordingly.'
        ],
        items: [
          { h3: 'Sofas, beds and wardrobes', text: 'Bulky household furniture collected and delivered safely.' },
          { h3: 'Appliances and large purchases', text: 'Large items bought online or from a seller moved on your behalf.' },
          { h3: 'Local and long journeys', text: 'The same service whether the item travels across town or across the country.' }
        ]
      },
      {
        h2: 'Why choose a single item service',
        paras: [
          'A single-item job is quicker to arrange and priced for what it is. If you have a small number of pieces, mention them all when you request a quote. A few items going to the same address can often be moved together.',
          'For a whole-home move, see [house removals](/removals/house-removals/). For goods and pallets, see [short distance haulage](/haulage/short-distance-haulage/) or [long distance haulage](/haulage/long-distance-haulage/). Emptying a garage as well? Our [garage and outbuilding clearances](/clearances/garage-and-outbuilding-clearances/) service can help.'
        ]
      }
    ],
    audience: [
      { h3: 'Online and second-hand buyers', text: 'People whose purchase cannot go in the car.' },
      { h3: 'Families', text: 'Households passing furniture between relatives.' },
      { h3: 'Small businesses', text: 'Shops and offices moving a single large item.' },
      { h3: 'Students and renters', text: 'People moving a few pieces between flats or cities.' }
    ],
    why: [
      { h3: 'Pay for what you move', text: 'A price scaled to the job, not a full removal.' },
      { h3: 'Careful handling', text: 'Your item treated with care from collection to delivery.' },
      { h3: 'Fixed-price quotation', text: 'No surprises on the day.' },
      { h3: 'Fully insured service', text: 'Reassurance for valuable or sentimental items.' }
    ],
    quoteTips: [
      'What the item is, with dimensions and weight if known',
      'Collection and delivery addresses',
      'Stairs, doorways, lifts and parking at both ends',
      'Preferred dates',
      'Any other items going to the same address'
    ],
    local: 'We regularly collect and deliver single items around Boston Spa, Wetherby, Tadcaster, Leeds, York and Harrogate, and send them further afield too. Searching for furniture delivery or single item transport in Yorkshire? Send the details for a fixed price.',
    faqs: [
      { q: 'Can you move just one item?', a: 'Yes. Single item jobs are a core part of our service and are priced to suit.' },
      { q: 'Can you collect from a seller and deliver to me?', a: 'Yes. Give us both addresses and we will arrange collection and delivery.' },
      { q: 'What if the item is on an upper floor?', a: 'Tell us about stairs and access when you request a quote so we can plan the handling.' },
      { q: 'Is the item insured while in transit?', a: 'Yes. Optima operates as a fully insured service, with goods-in-transit insurance during the journey.' }
    ],
    related: ['haulage/short-distance-haulage', 'removals/house-removals', 'clearances/garage-and-outbuilding-clearances']
  }
];
