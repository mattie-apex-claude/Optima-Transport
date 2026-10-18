// Removals pages. Inline links use [text](/path/) and are rendered by the page template.
const LOAD = { src: '/images/3.jpg', width: 720, height: 960 };
const VAN = { src: '/images/van-branded.jpg', width: 1536, height: 2048 };

export const removals = [
  {
    slug: 'removals',
    level: 'parent',
    name: 'Removals',
    summary: 'House, office and long distance removals with a fixed price agreed up front.',
    quoteService: 'House Removals',
    seoTitle: 'Removals Boston Spa, Yorkshire & Nationwide | Optima Transport',
    metaDescription:
      'Removals from Boston Spa across Leeds, York, Harrogate, Wetherby and Tadcaster, plus nationwide moves. Fixed-price quotes, dedicated crew and a fully insured service.',
    h1: 'Removals in Boston Spa, Yorkshire & Nationwide',
    eyebrow: 'Removals',
    lead: 'Moving home, relocating a business or heading to the other end of the country? Optima Transport provides a careful, well-organised removals service with a fixed price agreed before moving day.',
    image: LOAD,
    imageAlt: 'Optima Transport crew member loading boxed belongings into a removals van',
    sections: [
      {
        h2: 'What our removals service involves',
        paras: [
          'Every Optima removal starts with a conversation about what needs to move, where it is going and when. From there we agree a fixed-price quotation, assign a dedicated vehicle and crew, and handle the loading, transport and unloading ourselves. Your belongings travel in your own vehicle, never shared with another customer\'s goods.',
          'Packing materials and additional help can be added when you want them, so you decide how much of the work to hand over. We would rather quote for exactly what you need than sell you extras you do not.'
        ],
        items: [
          { h3: 'Home moves', text: 'Flats, terraces and family houses moved with careful handling from the first box to the last.' },
          { h3: 'Business moves', text: 'Office and commercial relocations planned around your working week to limit downtime.' },
          { h3: 'Moves across the country', text: 'Long distance journeys scheduled and quoted as a single fixed price from door to door.' }
        ]
      },
      {
        h2: 'Which removals service do you need?',
        paras: [
          'If you are moving a household, our [house removals](/removals/house-removals/) service is built around the practicalities of home moves, from stairs and parking to completion-day timings. Businesses should look at [office and commercial removals](/removals/office-and-commercial-removals/), where planning, staging and minimal disruption matter most.',
          'Moving further afield? Our [long distance removals](/removals/long-distance-removals/) service covers journeys between Yorkshire and anywhere in the UK. If you are also emptying a property, pair your move with a [house clearance](/clearances/house-clearances/) so one team handles both.'
        ]
      }
    ],
    audience: [
      { h3: 'Homeowners and tenants', text: 'Anyone moving between flats, houses or rental properties in Yorkshire or further afield.' },
      { h3: 'Growing and relocating businesses', text: 'Offices, shops and small commercial premises that need to move without losing trading days.' },
      { h3: 'Families and downsizers', text: 'People who want a calm, unhurried move with one dependable point of contact.' }
    ],
    why: [
      { h3: 'Fixed-price quotation', text: 'You know the price before the job starts, with no hidden costs on the day.' },
      { h3: 'Your own vehicle and crew', text: 'A dedicated vehicle for your job rather than shared space with other customers.' },
      { h3: 'Careful handling', text: 'Every item treated with the care it deserves, from first box to last.' },
      { h3: 'Based in Boston Spa', text: 'Local knowledge of Yorkshire roads and properties, with the capability to travel nationwide.' }
    ],
    quoteTips: [
      'Where you are moving from and to, including postcodes',
      'The type and size of property, or the size of your business premises',
      'Your preferred moving date and any fixed completion or lease dates',
      'Any access issues such as stairs, lifts, narrow streets or parking restrictions',
      'Whether you would like packing materials or other extra help'
    ],
    local: 'Optima is based in Boston Spa and moves households and businesses throughout Leeds, York, Harrogate, Wetherby and Tadcaster every week. Because we are close to the A1(M) and the A64, collections across the region are straightforward to schedule, and the same crew approach carries over to longer journeys across the UK.',
    faqs: [
      { q: 'How much does a removal cost?', a: 'It depends on the volume of belongings, the distance, access at both ends and any extras such as packing. We give you a fixed price before the job starts, so tell us the details and we will send a clear quotation.' },
      { q: 'Do you cover areas outside Yorkshire?', a: 'Yes. Based in Boston Spa, we cover Yorkshire locally and carry out removals nationwide, quoted as a fixed price for the whole journey.' },
      { q: 'Can you move both homes and businesses?', a: 'Yes. We handle domestic moves and commercial relocations, each planned around the needs of the customer.' },
      { q: 'How far ahead should I book?', a: 'We can often help at short notice, but booking at least a few days ahead gives you the best choice of dates, particularly around month ends.' }
    ],
    related: ['clearances', 'haulage']
  },

  {
    slug: 'removals/house-removals',
    level: 'leaf',
    parent: 'removals',
    name: 'House Removals',
    summary: 'Careful home moves for flats, terraces and family houses across Yorkshire and beyond.',
    quoteService: 'House Removals',
    seoTitle: 'House Removals Yorkshire | Leeds, York & Harrogate | Optima',
    metaDescription:
      'House removals in Boston Spa, Wetherby, Tadcaster, Leeds, York and Harrogate. A dedicated van and crew, careful handling and a fixed-price quote before moving day.',
    h1: 'House Removals in Boston Spa, Leeds, York & Yorkshire',
    eyebrow: 'House Removals',
    lead: 'A home move is stressful enough without worrying about the van. Optima Transport gives you a dedicated crew, careful handling and a fixed price agreed before moving day.',
    image: LOAD,
    imageAlt: 'Optima Transport crew member carefully loading boxes and household items for a house removal',
    sections: [
      {
        h2: 'What a house removal with Optima involves',
        paras: [
          'We begin by understanding the size of your home, what is moving and the access at both addresses. You then receive a fixed-price quotation, so the figure you agree is the figure you pay. On moving day your dedicated crew arrives on time, loads your belongings with care, transports them in your own vehicle and unloads at the new address.',
          'Whether you are moving a one-bedroom flat or a large family house, the approach is the same: clear communication before, during and after the move. If you would like help with packing materials or other extras, tell us when you enquire and we will include them in your quote.'
        ],
        items: [
          { h3: 'Loading and furniture handling', text: 'Furniture, boxes and appliances loaded carefully and secured for the journey.' },
          { h3: 'Delivery and placement', text: 'Items unloaded at the new address and taken to the rooms you choose.' },
          { h3: 'Local and long journeys', text: 'The same dependable service whether you are moving across town or across the country.' }
        ]
      },
      {
        h2: 'Planning moving day around your property',
        paras: [
          'Properties across our area present different challenges. Terraced streets in Leeds and Harrogate can have limited parking, York\'s older streets can restrict vehicle access, and village homes around Boston Spa and Tadcaster may have long drives or steep steps. Mention these when you request a quote and we will plan the day around them.',
          'Moving a long way? See our [long distance removals](/removals/long-distance-removals/) page. Leaving a property empty afterwards? A [house clearance](/clearances/house-clearances/) can be arranged with the same company.'
        ]
      }
    ],
    audience: [
      { h3: 'Families moving home', text: 'Households that need furniture, boxes and awkward items moved together on one day.' },
      { h3: 'First-time buyers and renters', text: 'Flat and small-house moves where a smaller job still deserves a fixed price and a reliable crew.' },
      { h3: 'Downsizers', text: 'People moving to a smaller home who want careful handling of treasured furniture.' },
      { h3: 'Movers on a fixed completion date', text: 'Customers who need a dependable timetable so the move fits the sale and purchase.' }
    ],
    why: [
      { h3: 'Fixed price, agreed first', text: 'No hidden costs or surprise charges on moving day.' },
      { h3: 'Dedicated vehicle and crew', text: 'Your belongings travel on their own, not mixed with other customers\' goods.' },
      { h3: 'Careful, courteous handling', text: 'Your furniture and your new home treated with respect throughout.' },
      { h3: 'One contact from start to finish', text: 'Clear updates before, during and after the move so you always know what to expect.' }
    ],
    quoteTips: [
      'Collection and delivery postcodes',
      'Number of bedrooms and any outbuildings or loft contents',
      'Large or awkward items such as wardrobes, sofas or appliances',
      'Stairs, lifts, parking and any restricted access at either address',
      'Your preferred date and completion timings'
    ],
    local: 'We move households in Boston Spa, Wetherby and Tadcaster as well as the city addresses of Leeds, York and Harrogate. If you are looking for house removals near you in Yorkshire, tell us about your move by phone call or online form and we will quote accurately before you commit.',
    faqs: [
      { q: 'How do I get a house removals quote?', a: 'Use the online quote form or book a consultation call. Tell us the size of your property, where you are moving from and to, and your preferred date, and we will send a fixed price by email.' },
      { q: 'Do you work around parking and access problems?', a: 'Yes. Tell us about stairs, narrow streets or parking restrictions at either address and we will plan the move around them so there are no surprises on the day.' },
      { q: 'Can you help with packing?', a: 'Packing materials and additional services can be added to your quote if you need them. Let us know when you enquire.' },
      { q: 'Are my belongings insured while being moved?', a: 'Yes. Optima operates as a fully insured service, with goods-in-transit insurance in place from collection to delivery.' }
    ],
    related: ['removals/long-distance-removals', 'clearances/house-clearances', 'haulage/single-item-and-furniture-transport']
  },

  {
    slug: 'removals/office-and-commercial-removals',
    level: 'leaf',
    parent: 'removals',
    name: 'Office & Commercial Removals',
    summary: 'Planned office, shop and commercial relocations that keep disruption to a minimum.',
    quoteService: 'Office & Commercial Removals',
    seoTitle: 'Office & Commercial Removals Yorkshire | Optima Transport',
    metaDescription:
      'Office and commercial removals for Leeds, York, Harrogate, Wetherby and across Yorkshire. Planned relocations, a dedicated crew and a fixed price agreed in advance.',
    h1: 'Office & Commercial Removals in Yorkshire',
    eyebrow: 'Commercial Removals',
    lead: 'An office move should not mean a lost week of trading. Optima Transport plans commercial relocations around your business, with a dedicated crew and a fixed price you can budget for.',
    image: VAN,
    imageAlt: 'Optima Transport branded van used for office and commercial removals in Yorkshire',
    sections: [
      {
        h2: 'How we handle a business relocation',
        paras: [
          'Commercial moves succeed or fail on planning. We start by learning what is moving, which floors or units are involved, when your building can be accessed and what must be back up and running first. That becomes a fixed-price quotation and a schedule your team can plan around.',
          'On the day, a dedicated crew handles desks, storage, filing, equipment and furniture, working to the order you set so that departments are not left waiting. We can move over an evening or weekend where your premises allow it, subject to agreeing access in advance.'
        ],
        items: [
          { h3: 'Offices and professional practices', text: 'Furniture, filing and equipment moved between floors, buildings or towns.' },
          { h3: 'Shops, studios and showrooms', text: 'Fixtures, stock and display items moved with care and delivered ready to be set out.' },
          { h3: 'Small commercial premises', text: 'Workshops, clinics and small units relocated to a single, clearly quoted schedule.' }
        ]
      },
      {
        h2: 'Reducing downtime and avoiding surprises',
        paras: [
          'Ask us about your access arrangements early. Loading bays, shared lifts, building management rules and parking in city centres such as Leeds, York and Harrogate can all affect how long a move takes. The more we know before quoting, the more accurate the fixed price.',
          'If your old premises also need emptying, our [office clearances](/clearances/office-clearances/) and [end-of-lease clearances](/clearances/end-of-lease-clearances/) services remove what you are not taking. Moving to another region? See [long distance removals](/removals/long-distance-removals/).'
        ]
      }
    ],
    audience: [
      { h3: 'Offices and professional firms', text: 'Teams that need desks, files and equipment moved in a planned order.' },
      { h3: 'Retailers and showrooms', text: 'Businesses moving fixtures and stock to a new unit or high street.' },
      { h3: 'Growing small businesses', text: 'Companies outgrowing their premises and moving to a larger site nearby.' },
      { h3: 'Landlords and facilities managers', text: 'Property managers coordinating tenant moves who need a reliable, insured contractor.' }
    ],
    why: [
      { h3: 'Fixed-price quotation', text: 'A clear figure for your budget, with no hidden charges on the day.' },
      { h3: 'Planned around your trading', text: 'Dates and access times agreed in advance to keep disruption low.' },
      { h3: 'Dedicated vehicle and crew', text: 'Business assets handled by a crew focused on your job alone.' },
      { h3: 'Fully insured service', text: 'Peace of mind that your equipment and furniture are covered in transit.' }
    ],
    quoteTips: [
      'Current and new premises addresses and postcodes',
      'Approximate number of desks, workstations and storage units',
      'Any heavy, fragile or specialist equipment',
      'Building access rules, loading bays, lifts and permitted times',
      'Your target move date and any lease deadlines'
    ],
    local: 'We relocate businesses from Boston Spa and Wetherby into Leeds and Harrogate, between units around York, and out of Yorkshire to wherever your next premises are. If your business is within reach of the A64 or A1(M) corridor, planning a survey call and a move date is simple.',
    faqs: [
      { q: 'Can you move us outside normal working hours?', a: 'Where your premises allow it, we can agree early-morning, evening or weekend moves so your team is back working sooner. Access times need to be confirmed in advance.' },
      { q: 'Do you move specialist or fragile equipment?', a: 'Tell us what equipment is involved when you request a quote. We will assess it and let you know honestly what we can handle safely.' },
      { q: 'Can you also clear the old premises?', a: 'Yes. Our commercial clearance services remove unwanted furniture and equipment, so one company can handle the move and the clear-out.' },
      { q: 'Do you provide a fixed price for commercial moves?', a: 'Yes. Every quotation is a fixed price agreed before the job begins.' }
    ],
    related: ['clearances/office-clearances', 'clearances/end-of-lease-clearances', 'removals/long-distance-removals']
  },

  {
    slug: 'removals/long-distance-removals',
    level: 'leaf',
    parent: 'removals',
    name: 'Long Distance Removals',
    summary: 'Nationwide home and business moves quoted as one fixed price from door to door.',
    quoteService: 'Long Distance Removals',
    seoTitle: 'Long Distance Removals UK | From Yorkshire | Optima Transport',
    metaDescription:
      'Long distance removals from Yorkshire to anywhere in the UK. One fixed price door to door, a dedicated vehicle and crew, and a fully insured service.',
    h1: 'Long Distance Removals From Yorkshire Across the UK',
    eyebrow: 'Long Distance Removals',
    lead: 'Moving hundreds of miles is a different job from moving across town. Optima Transport carries your belongings the whole way in your own vehicle, for one fixed price agreed in advance.',
    image: VAN,
    imageAlt: 'Optima Transport branded van ready for a long distance removal from Yorkshire',
    sections: [
      {
        h2: 'Why long distance moves need a different approach',
        paras: [
          'A long-distance removal involves more than the drive. Loading must be organised so the load travels safely, delivery windows need agreeing with both ends, and your timetable must allow for the journey. We plan all of that when we quote, then give you a single fixed price covering collection, transport and delivery.',
          'Because your belongings are carried in your own dedicated vehicle, they are not transferred between depots or shared with other customers\' goods. That means fewer touchpoints and a more direct journey from your old home to the new one.'
        ],
        items: [
          { h3: 'Yorkshire to anywhere in the UK', text: 'Moves out of Leeds, York, Harrogate and surrounding areas to destinations across England, Scotland and Wales.' },
          { h3: 'Moves into Yorkshire', text: 'Relocating to Boston Spa, Wetherby or Tadcaster from elsewhere in the country.' },
          { h3: 'Home and business moves', text: 'Households and commercial customers both supported with a planned, scheduled service.' }
        ]
      },
      {
        h2: 'Planning a long distance move well',
        paras: [
          'Agree collection and delivery dates early, especially if you are tied to completion dates at either end. Tell us about parking, stairs and building access at both addresses, as the destination end is often the one people forget to mention.',
          'Short on space in the van? A smaller move might suit our [single item and furniture transport](/haulage/single-item-and-furniture-transport/) service, while regular goods movements are covered by [long distance haulage](/haulage/long-distance-haulage/). For a local move, see [house removals](/removals/house-removals/).'
        ]
      }
    ],
    audience: [
      { h3: 'Households relocating for work or family', text: 'People moving between regions who want a single dependable service.' },
      { h3: 'Students and young professionals', text: 'Smaller moves between cities where a full removal van is more than needed but a courier will not do.' },
      { h3: 'Businesses opening a new site', text: 'Companies moving furniture and equipment to premises elsewhere in the UK.' },
      { h3: 'People moving back to Yorkshire', text: 'Customers returning to the region who need collection from further afield.' }
    ],
    why: [
      { h3: 'One fixed price door to door', text: 'Collection, transport and delivery agreed in a single quotation.' },
      { h3: 'Dedicated vehicle', text: 'Your belongings travel together, not shared with other customers.' },
      { h3: 'Nationwide capability', text: 'Based in Boston Spa with the capability to travel across the whole of the UK.' },
      { h3: 'Fully insured service', text: 'Goods-in-transit insurance for the full length of the journey.' }
    ],
    quoteTips: [
      'Full collection and delivery postcodes',
      'Size of property or volume of items to move',
      'Preferred dates and any completion or lease constraints',
      'Access information for both addresses',
      'Any items that need particular care'
    ],
    local: 'From Boston Spa we regularly set off towards the A1(M), M1 and M62 corridors, carrying households out of Leeds, York, Harrogate, Wetherby and Tadcaster to destinations nationwide. If you are searching for long distance removal companies in Yorkshire, we can quote clearly and plan the date around you.',
    faqs: [
      { q: 'How is a long distance removal priced?', a: 'We combine the volume of your belongings, the distance, access at both ends and any extras into one fixed-price quotation, so you know the cost before you commit.' },
      { q: 'Will my belongings be shared with other customers\' goods?', a: 'No. Your belongings travel in a dedicated vehicle for your job.' },
      { q: 'Can you collect from outside Yorkshire?', a: 'Yes. We carry out removals nationwide, in both directions, as well as moves within Yorkshire.' },
      { q: 'How much notice do you need?', a: 'We can often accommodate short-notice bookings, but at least a few days ahead is best for long-distance moves so that dates at both ends can be agreed.' }
    ],
    related: ['removals/house-removals', 'haulage/long-distance-haulage', 'haulage/single-item-and-furniture-transport']
  }
];
