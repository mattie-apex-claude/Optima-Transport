// Clearance pages: parent, three category pages and nine service pages.
// Inline links use [text](/path/) and are rendered by the page template.
const LOAD = { src: '/images/3.jpg', width: 720, height: 960 };
const VAN = { src: '/images/van-branded.jpg', width: 1536, height: 2048 };

const loadAlt = 'Optima Transport crew member loading boxes and items into the van during a clearance';
const vanAlt = 'Optima Transport branded van listing house clearances and office clearances among its services';

export const clearances = [
  {
    slug: 'clearances',
    level: 'parent',
    name: 'Clearances',
    summary: 'Domestic, commercial and industrial clearances handled by one reliable team.',
    quoteService: 'Domestic Clearances',
    seoTitle: 'Clearance Services Yorkshire | House, Office & Warehouse | Optima',
    metaDescription:
      'House, office, warehouse and industrial site clearances across Yorkshire and nationwide. Fixed-price quotes from Optima Transport in Boston Spa.',
    h1: 'Clearance Services in Boston Spa, Yorkshire & Nationwide',
    eyebrow: 'Clearances',
    lead: 'From a family home to a full warehouse, Optima Transport clears properties and premises quickly, carefully and for a fixed price agreed before we begin.',
    image: VAN,
    imageAlt: vanAlt,
    sections: [
      {
        h2: 'What our clearance service involves',
        paras: [
          'A clearance is more than emptying a space. It is about taking the pressure off you, whether that is a bereaved family handling a property, a business handing back a lease or an industrial site that needs to be cleared before a new tenant arrives. We assess the job, agree a fixed-price quotation, and our crew carries out the loading and removal.',
          'Tell us at the quote stage what must be kept, what is to be donated or sold and what is to go, and we will agree the approach in writing. If anything on site is hazardous or specialist, say so early so it can be assessed before the price is set.'
        ],
        items: [
          { h3: 'Domestic clearances', text: 'Houses, garages and outbuildings cleared for families, executors and landlords.' },
          { h3: 'Commercial clearances', text: 'Offices, shops and leased premises emptied to a deadline.' },
          { h3: 'Industrial clearances', text: 'Warehouses, factories and industrial units cleared at scale.' }
        ]
      },
      {
        h2: 'Choosing the clearance service you need',
        paras: [
          'Start with the type of property. Homes sit under [domestic clearances](/clearances/domestic-clearances/), which includes [house clearances](/clearances/house-clearances/) and [probate clearances](/clearances/probate-clearances/). Business premises are covered by [commercial clearances](/clearances/commercial-clearances/), including [office clearances](/clearances/office-clearances/).',
          'Larger sites belong under [industrial clearances](/clearances/industrial-clearances/), with dedicated pages for [warehouse clearances](/clearances/warehouse-clearances/), [factory clearances](/clearances/factory-clearances/) and [industrial unit clearances](/clearances/industrial-unit-clearances/).'
        ]
      }
    ],
    audience: [
      { h3: 'Homeowners, executors and landlords', text: 'People clearing a property for sale, probate or letting.' },
      { h3: 'Businesses and managers', text: 'Companies leaving offices, shops or units who need a clean, empty space returned.' },
      { h3: 'Industrial operators and agents', text: 'Site owners and property agents preparing warehouses and factories for their next use.' }
    ],
    why: [
      { h3: 'Fixed-price quotations', text: 'A clear price before work begins, with no hidden costs.' },
      { h3: 'Domestic to industrial', text: 'One company that can handle a garage clearance or a full warehouse.' },
      { h3: 'Considerate crew', text: 'Careful, courteous handling of your property, whatever its size.' },
      { h3: 'Fully insured service', text: 'Peace of mind on every job.' }
    ],
    quoteTips: [
      'The type of property or premises and its address',
      'A rough idea of how much needs to be cleared',
      'Anything to be kept, donated or treated with particular care',
      'Access details, including stairs, loading areas and parking',
      'Your preferred dates and any deadlines'
    ],
    local: 'Optima is based in Boston Spa and clears homes and businesses in Wetherby, Tadcaster, Leeds, York and Harrogate, as well as larger commercial and industrial sites across Yorkshire. We also take on clearance work further afield, so just ask about your location.',
    faqs: [
      { q: 'What areas do your clearance services cover?', a: 'We cover Yorkshire, including Boston Spa, Tadcaster, Wetherby, Leeds, York and Harrogate, and we can take on clearance work nationwide.' },
      { q: 'How do you price a clearance?', a: 'We agree a fixed price after learning about the volume, access and timescale of the job, so there are no surprises when the work is done.' },
      { q: 'Can you clear both homes and businesses?', a: 'Yes. We carry out domestic, commercial and industrial clearances.' },
      { q: 'How quickly can you start?', a: 'We can often accommodate short-notice requests, but the more notice you give the more choice you have on dates.' }
    ],
    related: ['clearances/warehouse-clearances', 'clearances/office-clearances', 'clearances/house-clearances', 'removals']
  },

  // ---------- Domestic ----------
  {
    slug: 'clearances/domestic-clearances',
    level: 'category',
    parent: 'clearances',
    name: 'Domestic Clearances',
    summary: 'House, probate, garage and outbuilding clearances for homes and private properties.',
    quoteService: 'Domestic Clearances',
    seoTitle: 'Domestic Clearances Yorkshire | Home & Property | Optima',
    metaDescription:
      'Domestic clearance services for homes, garages and outbuildings across Boston Spa, Leeds, York, Harrogate and Yorkshire. Fixed-price quotes from Optima Transport.',
    h1: 'Domestic Clearances in Boston Spa & Yorkshire',
    eyebrow: 'Domestic Clearances',
    lead: 'Clearing a home, garage or outbuilding can feel overwhelming. Optima Transport takes the job off your hands with a considerate crew and a fixed price agreed first.',
    image: LOAD,
    imageAlt: loadAlt,
    sections: [
      {
        h2: 'Domestic clearance services at a glance',
        paras: [
          'Our domestic clearance work covers any private property: full house clearances, probate-related clearances and the garages, sheds and outbuildings that tend to collect years of belongings. Each is a different job with its own timing and sensitivities, which is why each has its own dedicated service.',
          'Choose the closest match below, or request a quote and describe your situation and we will point you to the right approach.'
        ],
        items: [
          { h3: 'When the whole property is involved', text: 'See our [house clearances](/clearances/house-clearances/) service for full-property emptying.' },
          { h3: 'When a loved one has died', text: 'Our [probate clearances](/clearances/probate-clearances/) service is designed for executors and families.' },
          { h3: 'When it is a garage or outbuilding', text: 'Our [garage and outbuilding clearances](/clearances/garage-and-outbuilding-clearances/) service handles sheds, garages and storage buildings.' }
        ]
      }
    ],
    audience: [
      { h3: 'Homeowners', text: 'People preparing a home for sale or simply reclaiming their space.' },
      { h3: 'Executors and families', text: 'Those clearing a property after a bereavement.' },
      { h3: 'Landlords and agents', text: 'Property owners who need a home emptied before the next tenancy or sale.' }
    ],
    why: [
      { h3: 'Considerate approach', text: 'Careful, courteous handling of your property and belongings.' },
      { h3: 'Fixed price first', text: 'You know the cost before work begins.' },
      { h3: 'Flexible scheduling', text: 'Dates arranged around your sale, probate or letting timetable.' },
      { h3: 'Fully insured service', text: 'Reassurance on every domestic job.' }
    ],
    quoteTips: [
      'The property address and type',
      'Number of rooms, lofts, garages or outbuildings involved',
      'Items you want to keep, donate or have treated with care',
      'Access details such as stairs and parking',
      'Preferred dates and any sale or probate deadlines'
    ],
    local: 'We clear homes in Boston Spa, Wetherby and Tadcaster as well as Leeds, York and Harrogate. From village cottages to city terraces, access and timing are planned around your property.',
    faqs: [
      { q: 'What counts as a domestic clearance?', a: 'Any clearance of a private property, including a full house, individual rooms, lofts, garages and outbuildings.' },
      { q: 'Can you clear just one part of a property?', a: 'Yes. We can clear a garage, shed or loft without clearing the whole house.' },
      { q: 'Do you offer a fixed price?', a: 'Yes. Every clearance is quoted at a fixed price agreed before work starts.' }
    ],
    related: ['clearances/house-clearances', 'clearances/probate-clearances', 'clearances/garage-and-outbuilding-clearances', 'removals/house-removals']
  },

  {
    slug: 'clearances/house-clearances',
    level: 'leaf',
    parent: 'clearances/domestic-clearances',
    name: 'House Clearances',
    summary: 'Whole-property clearances for sale, rental or downsizing, completed carefully and on time.',
    quoteService: 'Domestic Clearances',
    seoTitle: 'House Clearances Yorkshire | Leeds, York & Harrogate | Optima',
    metaDescription:
      'House clearance services in Boston Spa, Wetherby, Tadcaster, Leeds, York and Harrogate. Whole-property clearances with a considerate crew and fixed-price quotes.',
    h1: 'House Clearances in Boston Spa, Leeds, York & Yorkshire',
    eyebrow: 'House Clearances',
    lead: 'Need a whole house emptied for sale, rental or a move? Optima Transport provides careful house clearances across Yorkshire, with a fixed price agreed before we start.',
    image: LOAD,
    imageAlt: 'Optima Transport crew member loading boxes and furniture during a house clearance',
    sections: [
      {
        h2: 'What a house clearance with Optima involves',
        paras: [
          'A house clearance means emptying every room, plus any loft, garage or garden storage, so the property is ready for its next chapter. We start by understanding the size of the property and how much it contains, then provide a fixed-price quotation. On the day our crew works through the property methodically, loading and removing everything agreed.',
          'You tell us what is to be kept, what family members are taking and what can go, and we agree the plan before the day. Where a property is a long way from where you live, we can work from clear instructions so you do not need to be there throughout.'
        ],
        items: [
          { h3: 'Room-by-room clearance', text: 'Furniture, appliances, boxes and contents removed from every part of the property.' },
          { h3: 'Lofts, garages and sheds', text: 'Storage areas included in the quote so nothing is left behind.' },
          { h3: 'Prepared for sale or letting', text: 'The property left empty and ready for photographs, viewings or the next tenant.' }
        ]
      },
      {
        h2: 'When a house clearance is the right choice',
        paras: [
          'A house clearance suits anyone who needs a property emptied to a deadline: home sellers, landlords between tenants, downsizers and families dividing a house\'s contents. If the clearance follows a bereavement, our dedicated [probate clearances](/clearances/probate-clearances/) service explains how we handle those sensitive situations.',
          'Moving into a new home as well? Combine the clearance with our [house removals](/removals/house-removals/) service so a single company deals with both ends of the move.'
        ]
      }
    ],
    audience: [
      { h3: 'Home sellers', text: 'People who need a property emptied before completion or viewings.' },
      { h3: 'Landlords and letting agents', text: 'Owners who need rooms cleared between tenancies.' },
      { h3: 'Downsizers', text: 'Householders moving to a smaller place who need a full clear-out.' },
      { h3: 'Family members', text: 'Relatives managing a property from a distance.' }
    ],
    why: [
      { h3: 'Fixed-price quotation', text: 'The price is agreed first, so you can budget with confidence.' },
      { h3: 'A considerate crew', text: 'Respectful, careful handling of every room and belonging.' },
      { h3: 'Agreed plan, no surprises', text: 'We confirm what stays and what goes before the day.' },
      { h3: 'Move and clear in one', text: 'Pair clearance with a house move for a single, joined-up service.' }
    ],
    quoteTips: [
      'Property address and number of bedrooms',
      'Whether lofts, garages, sheds or gardens hold items too',
      'Anything to be kept, donated or protected',
      'Access, parking and stairs',
      'Your date and any sale, completion or tenancy deadlines'
    ],
    local: 'We carry out house clearances from Boston Spa and Wetherby villages to larger homes in Harrogate, terraced houses in Leeds and period properties in York. Searching for house clearance in Leeds, York or Harrogate? Send the details and we will quote clearly for the whole job.',
    faqs: [
      { q: 'How much does a house clearance cost?', a: 'It depends on the size of the property, the volume of contents and access. After learning about your job we provide a fixed price before any work begins.' },
      { q: 'Do I need to be at the property?', a: 'Not necessarily. If you give clear instructions and arrange access, we can work without you being there throughout, which helps if you live elsewhere.' },
      { q: 'Can you clear a property quickly?', a: 'We can often accommodate short-notice clearances. Call or send your details and we will confirm what is possible.' },
      { q: 'Can I keep some items?', a: 'Of course. Tell us what is staying or being collected by family, and we will agree the plan in advance.' }
    ],
    related: ['clearances/probate-clearances', 'clearances/garage-and-outbuilding-clearances', 'removals/house-removals']
  },

  {
    slug: 'clearances/probate-clearances',
    level: 'leaf',
    parent: 'clearances/domestic-clearances',
    name: 'Probate Clearances',
    summary: 'Sensitive property clearances for executors, solicitors and families after a bereavement.',
    quoteService: 'Domestic Clearances',
    seoTitle: 'Probate Clearances Yorkshire | Executors & Families | Optima',
    metaDescription:
      'Probate and bereavement property clearances across Boston Spa, Leeds, York, Harrogate and Yorkshire. Sensitive handling, clear communication and a fixed-price quote.',
    h1: 'Probate Property Clearances in Yorkshire',
    eyebrow: 'Probate Clearances',
    lead: 'Clearing the home of someone who has died is a difficult task. Optima Transport provides a calm, respectful probate clearance service with clear communication and a fixed price agreed in advance.',
    image: LOAD,
    imageAlt: 'Optima Transport crew member carefully handling boxed belongings during a probate property clearance',
    sections: [
      {
        h2: 'How our probate clearance service works',
        paras: [
          'When you are an executor or family member, you are often managing paperwork, relatives and emotions at the same time. We keep the clearance side simple: explain what the property contains, agree what is to be kept, sold or donated, and we will provide a fixed-price quotation.',
          'On the day our crew works carefully and respectfully, treating personal belongings with consideration. We do not provide legal advice, so we work alongside your solicitor or the rest of the family to match the timings you need.'
        ],
        items: [
          { h3: 'Respectful handling', text: 'Personal items treated with care and discretion throughout the clearance.' },
          { h3: 'Works to your timetable', text: 'Dates arranged around valuations, family visits and the sale of the property.' },
          { h3: 'Clear communication', text: 'Straightforward updates so executors can keep everyone informed.' }
        ]
      },
      {
        h2: 'Preparing for a probate clearance',
        paras: [
          'Before we start, make sure the family has had the chance to take what they wish and that any items needing valuation or assessment have been identified. Let us know which rooms, lofts, garages or outbuildings need clearing, and mention anything the family wishes to retain so it can be set aside.',
          'If you are clearing a property that you must also tidy and sell, our [house clearances](/clearances/house-clearances/) page explains the standard process. If the estate includes outbuildings, see [garage and outbuilding clearances](/clearances/garage-and-outbuilding-clearances/).'
        ]
      }
    ],
    audience: [
      { h3: 'Executors', text: 'People responsible for clearing and preparing a property for sale or transfer.' },
      { h3: 'Solicitors and estate managers', text: 'Professionals who recommend a trustworthy clearance contractor to clients.' },
      { h3: 'Grieving families', text: 'Relatives who want the practical side handled with sensitivity.' }
    ],
    why: [
      { h3: 'Sensitivity first', text: 'Calm, respectful working in a difficult time.' },
      { h3: 'Fixed-price quotation', text: 'A clear figure that fits the estate\'s budget.' },
      { h3: 'Flexible timing', text: 'Dates that fit around valuations and family arrangements.' },
      { h3: 'Fully insured service', text: 'Reassurance while we are working in the property.' }
    ],
    quoteTips: [
      'Property address and approximate size',
      'Which items the family wants to keep',
      'Whether valuations or house sale dates affect timing',
      'Access arrangements, including keys and parking',
      'Any rooms, lofts or outbuildings holding contents'
    ],
    local: 'We support executors and families in Boston Spa, Wetherby, Tadcaster, Leeds, York and Harrogate, and can arrange probate clearances further afield. If you are searching for probate clearance in Yorkshire, we are happy to talk it through before you decide.',
    faqs: [
      { q: 'Do you provide legal advice on probate?', a: 'No. We provide the clearance service only. For legal guidance, speak to your solicitor.' },
      { q: 'Can the family remove items first?', a: 'Yes, and we recommend it. Tell us what is being kept and we will leave it untouched.' },
      { q: 'Can I request a quote without visiting?', a: 'In many cases yes. Send us the details and we will provide a fixed price. We can discuss anything unclear by phone.' },
      { q: 'How soon can the property be cleared?', a: 'We can often help at short notice, though dates depend on availability. Get in touch with your timings and we will advise.' }
    ],
    related: ['clearances/house-clearances', 'clearances/garage-and-outbuilding-clearances', 'clearances/domestic-clearances']
  },

  {
    slug: 'clearances/garage-and-outbuilding-clearances',
    level: 'leaf',
    parent: 'clearances/domestic-clearances',
    name: 'Garage & Outbuilding Clearances',
    summary: 'Garages, sheds, barns and storage buildings emptied quickly and efficiently.',
    quoteService: 'Domestic Clearances',
    seoTitle: 'Garage & Outbuilding Clearance Yorkshire | Optima Transport',
    metaDescription:
      'Garage, shed and outbuilding clearances across Boston Spa, Wetherby, Tadcaster, Leeds, York and Harrogate. Fixed-price quotes from Optima Transport.',
    h1: 'Garage, Shed & Outbuilding Clearances in Yorkshire',
    eyebrow: 'Garage & Outbuilding Clearances',
    lead: 'Garages and outbuildings hold years of accumulated belongings. Optima Transport empties them quickly and efficiently, giving you back usable space for a fixed price.',
    image: LOAD,
    imageAlt: 'Optima Transport crew member loading boxes and items from a garage into the van',
    sections: [
      {
        h2: 'What a garage or outbuilding clearance involves',
        paras: [
          'Garage and outbuilding clearances are a smaller, more focused job than whole-house clearance, but they often involve awkward, heavy or bulky items. Old furniture, tools, equipment and stored boxes are loaded and removed, leaving the space empty and ready for use.',
          'Because the contents of these spaces vary so widely, a quick description or a few photographs help us quote accurately. Tell us about anything unusual, heavy or potentially hazardous so it can be assessed before we price the job.'
        ],
        items: [
          { h3: 'Garages and integral garages', text: 'Cleared of furniture, stored boxes, tools and leftovers from years of use.' },
          { h3: 'Sheds, summerhouses and workshops', text: 'Garden buildings emptied so they can be reused, sold or replaced.' },
          { h3: 'Barns and farm storage', text: 'Larger outbuildings on rural properties across Yorkshire, subject to assessment.' }
        ]
      },
      {
        h2: 'Why a separate garage clearance makes sense',
        paras: [
          'If the main house is not changing hands, you may only need the outbuildings dealt with. It is quicker and more cost-effective to hire a clearance specifically scoped for that space than for a whole-house service.',
          'If the garage belongs to a larger clear-out, ask about a full [house clearance](/clearances/house-clearances/) or, following a bereavement, our [probate clearance](/clearances/probate-clearances/) service. Need one item taking elsewhere? Our [single item and furniture transport](/haulage/single-item-and-furniture-transport/) service may help.'
        ]
      }
    ],
    audience: [
      { h3: 'Homeowners', text: 'People wanting their garage back for parking, projects or conversion.' },
      { h3: 'Landlords', text: 'Property owners clearing storage left behind by a previous tenant.' },
      { h3: 'Rural property owners', text: 'Owners of barns, stables or storage buildings across Yorkshire villages.' }
    ],
    why: [
      { h3: 'Right-sized job, right-sized price', text: 'A fixed price for the space, not a whole-house quotation.' },
      { h3: 'Tackles awkward items', text: 'Heavy, bulky and awkward contents handled by our crew.' },
      { h3: 'Quick turnaround', text: 'Smaller clearances can often be arranged at short notice.' },
      { h3: 'Fully insured service', text: 'Reassurance on every job.' }
    ],
    quoteTips: [
      'The type of building and where it is',
      'Approximate size or how full it is',
      'Photos of the contents, if you can',
      'Anything heavy, hazardous or fragile',
      'Access, such as drive width and ground conditions'
    ],
    local: 'We regularly work in village properties around Boston Spa, Wetherby and Tadcaster, where garages and outbuildings are common, and in city homes across Leeds, York and Harrogate. Send us a few photos and we can usually quote for your garage clearance quickly.',
    faqs: [
      { q: 'Can you clear a garage without clearing the house?', a: 'Yes. We can clear individual areas, so you only pay for the space you need emptied.' },
      { q: 'Can you clear a very full garage?', a: 'Yes. We assess the volume and access before quoting, and agree a fixed price that covers the work.' },
      { q: 'What if I find something hazardous?', a: 'Tell us before the job so it can be assessed. We will let you know what we can and cannot take.' }
    ],
    related: ['clearances/house-clearances', 'clearances/probate-clearances', 'haulage/single-item-and-furniture-transport']
  },

  // ---------- Commercial ----------
  {
    slug: 'clearances/commercial-clearances',
    level: 'category',
    parent: 'clearances',
    name: 'Commercial Clearances',
    summary: 'Office, retail and end-of-lease clearances for businesses on a deadline.',
    quoteService: 'Commercial Clearances',
    seoTitle: 'Commercial Clearances Yorkshire | Office & Shop | Optima',
    metaDescription:
      'Commercial clearance services for offices, shops and leased premises across Leeds, York, Harrogate and Yorkshire. Fixed-price quotes from Optima Transport.',
    h1: 'Commercial Clearances in Yorkshire',
    eyebrow: 'Commercial Clearances',
    lead: 'When a business leaves premises, the space must be emptied on time. Optima Transport clears commercial properties efficiently, with a fixed price and minimal disruption.',
    image: VAN,
    imageAlt: vanAlt,
    sections: [
      {
        h2: 'Commercial clearance services for business premises',
        paras: [
          'Commercial clearances are driven by deadlines: a lease ending, a closure, a refit or a relocation. We plan the clearance around your access times, building rules and schedule, then complete it efficiently so you can hand back the premises or move on.',
          'Pick the service that best matches your premises and reason for clearing. If you are not sure, request a quote and describe the situation.'
        ],
        items: [
          { h3: 'Working offices', text: 'See [office clearances](/clearances/office-clearances/) for desks, storage and equipment.' },
          { h3: 'Shops and showrooms', text: 'See [retail and shop clearances](/clearances/retail-and-shop-clearances/) for fixtures and stock.' },
          { h3: 'Leased premises', text: 'See [end-of-lease clearances](/clearances/end-of-lease-clearances/) for handing back a clean, empty unit.' }
        ]
      }
    ],
    audience: [
      { h3: 'Business owners', text: 'Companies closing, downsizing or moving on from their premises.' },
      { h3: 'Property and facilities managers', text: 'Managers needing units emptied between tenants.' },
      { h3: 'Landlords and agents', text: 'Owners preparing commercial space for the next occupier.' }
    ],
    why: [
      { h3: 'Fixed-price quotation', text: 'A clear price for your budget.' },
      { h3: 'Planned to your deadline', text: 'Dates arranged to match lease ends and handovers.' },
      { h3: 'Minimal disruption', text: 'Work scheduled around the other occupants and building rules.' },
      { h3: 'Fully insured service', text: 'Reassurance for you and your landlord.' }
    ],
    quoteTips: [
      'Premises address and type',
      'Approximate size or number of rooms or floors',
      'Access arrangements, loading bays and lifts',
      'Items to keep, relocate or clear',
      'Handover or lease end date'
    ],
    local: 'We clear commercial premises in Leeds, York, Harrogate, Wetherby and Tadcaster, and across the wider Yorkshire region, with the capability to travel nationwide for larger jobs.',
    faqs: [
      { q: 'Can you clear a business at short notice?', a: 'We can often accommodate short-notice requests. Contact us with your deadline and we will confirm what is possible.' },
      { q: 'Can you work out of hours?', a: 'Where the premises allow, we can agree evening or weekend access in advance.' },
      { q: 'Do you offer fixed prices?', a: 'Yes. Every commercial clearance is quoted at a fixed price before work begins.' }
    ],
    related: ['clearances/office-clearances', 'clearances/retail-and-shop-clearances', 'clearances/end-of-lease-clearances', 'removals/office-and-commercial-removals']
  },

  {
    slug: 'clearances/office-clearances',
    level: 'leaf',
    parent: 'clearances/commercial-clearances',
    name: 'Office Clearances',
    summary: 'Desks, storage and equipment cleared from offices of any size, to your timetable.',
    quoteService: 'Commercial Clearances',
    seoTitle: 'Office Clearances Yorkshire | Leeds, York & Harrogate | Optima',
    metaDescription:
      'Office clearance services in Leeds, York, Harrogate, Wetherby and across Yorkshire. Desks, storage and equipment cleared quickly with fixed-price quotes.',
    h1: 'Office Clearances in Leeds, York, Harrogate & Yorkshire',
    eyebrow: 'Office Clearances',
    lead: 'Closing, downsizing or refitting an office? Optima Transport clears desks, storage and equipment efficiently, leaving your space empty for a fixed price agreed in advance.',
    image: VAN,
    imageAlt: 'Optima Transport branded van advertising office clearances and house clearances',
    sections: [
      {
        h2: 'What an office clearance involves',
        paras: [
          'Offices accumulate desks, chairs, filing cabinets, shelving and electronics, often across several floors. We plan the clearance around your building\'s access arrangements, then remove everything agreed so the space is empty for refit, sale or handback.',
          'Tell us when you request a quote what is going and what is staying. Equipment such as monitors, computers and other electrical items should be mentioned, as should confidential paperwork, so we can discuss how it should be handled before we begin.'
        ],
        items: [
          { h3: 'Furniture and fittings', text: 'Desks, chairs, partitions and shelving taken down and removed.' },
          { h3: 'Filing and storage', text: 'Cabinets, archive boxes and storage units cleared from every floor.' },
          { h3: 'Equipment and electricals', text: 'Office equipment removed once its destination has been agreed with you.' }
        ]
      },
      {
        h2: 'Office clearance versus office removals',
        paras: [
          'An office clearance empties space for good. If you are taking your furniture with you, you want [office and commercial removals](/removals/office-and-commercial-removals/) instead. Many businesses need both: some items moved to the new premises and the rest cleared.',
          'If your clearance is tied to a lease deadline, our [end-of-lease clearances](/clearances/end-of-lease-clearances/) page covers handing premises back, and larger industrial buildings are handled under [warehouse clearances](/clearances/warehouse-clearances/).'
        ]
      }
    ],
    audience: [
      { h3: 'Businesses closing or downsizing', text: 'Firms reducing their footprint who need a rapid clear-out.' },
      { h3: 'Companies refitting', text: 'Offices needing existing furniture removed before new fit-out.' },
      { h3: 'Landlords and agents', text: 'Owners clearing abandoned or vacated office space.' },
      { h3: 'Facilities managers', text: 'Teams coordinating clearances across multiple floors.' }
    ],
    why: [
      { h3: 'Fixed-price quotation', text: 'A single clear price agreed in advance.' },
      { h3: 'Works around your building', text: 'Access, lifts and loading arrangements planned with you.' },
      { h3: 'Dedicated crew', text: 'A crew focused on your clearance from start to finish.' },
      { h3: 'Fully insured service', text: 'Reassurance for you and your landlord.' }
    ],
    quoteTips: [
      'Office address and number of floors',
      'Approximate number of desks and storage units',
      'Equipment or confidential material on site',
      'Lift, loading and parking arrangements',
      'Your deadline'
    ],
    local: 'We clear offices in Leeds city centre and surrounding business parks, in York, in Harrogate and in market towns such as Wetherby and Tadcaster. If you are searching for office clearance in Leeds or Yorkshire, we can plan a date that suits your building.',
    faqs: [
      { q: 'Can you clear an office over a weekend?', a: 'Where the building allows it, we can agree weekend or evening access in advance.' },
      { q: 'What about confidential paperwork?', a: 'Tell us when you request your quote. We will discuss how it should be handled before work begins.' },
      { q: 'Do you clear multiple floors?', a: 'Yes. We plan around lifts and stairs and agree the approach in your quote.' },
      { q: 'How do I get an office clearance quote?', a: 'Use the quote form or book a consultation, describing the size of the office and your timeframe.' }
    ],
    related: ['clearances/end-of-lease-clearances', 'removals/office-and-commercial-removals', 'clearances/warehouse-clearances']
  },

  {
    slug: 'clearances/retail-and-shop-clearances',
    level: 'leaf',
    parent: 'clearances/commercial-clearances',
    name: 'Retail & Shop Clearances',
    summary: 'Shop fittings, fixtures and stock cleared when a retail unit closes or changes hands.',
    quoteService: 'Commercial Clearances',
    seoTitle: 'Retail & Shop Clearances Yorkshire | Optima Transport',
    metaDescription:
      'Retail and shop clearance services across Leeds, York, Harrogate and Yorkshire. Fixtures, fittings and stock cleared quickly. Fixed-price quotes.',
    h1: 'Retail & Shop Clearances in Yorkshire',
    eyebrow: 'Retail & Shop Clearances',
    lead: 'Closing or refitting a shop is a time-pressured job. Optima Transport clears fixtures, fittings and stock quickly, leaving the unit empty for the next occupier.',
    image: VAN,
    imageAlt: 'Optima Transport branded van used for retail and shop clearances',
    sections: [
      {
        h2: 'What a retail clearance involves',
        paras: [
          'Retail units are full of bulky fixtures: shelving, counters, display units, shop-fit furniture and back-room stock. We assess what must come out, agree how it will be removed, and complete the clearance so the unit is empty and ready to hand over.',
          'Trading hours and access matter on the high street. We plan around shop opening times, deliveries and any shopping-centre or landlord rules, and agree the arrangements in your quote.'
        ],
        items: [
          { h3: 'Fixtures and fittings', text: 'Shelving, counters and displays removed from the sales floor.' },
          { h3: 'Back-of-house contents', text: 'Stockrooms, kitchens and storage areas cleared.' },
          { h3: 'Stock and surplus', text: 'Remaining stock or goods removed once you have agreed what should happen to it.' }
        ]
      },
      {
        h2: 'Shop clearance on the high street',
        paras: [
          'High-street units in Harrogate, York and Leeds can have restricted loading, pedestrianised access or shared service yards. Tell us about this when you ask for a quote so the day is planned around it.',
          'If you are moving your business, rather than closing it, see our [office and commercial removals](/removals/office-and-commercial-removals/) service. If the unit is a leased property to hand back, [end-of-lease clearances](/clearances/end-of-lease-clearances/) may also apply.'
        ]
      }
    ],
    audience: [
      { h3: 'Independent retailers', text: 'Shop owners closing, downsizing or relocating.' },
      { h3: 'Landlords and agents', text: 'Owners preparing units for new tenants.' },
      { h3: 'Franchise and chain managers', text: 'Teams clearing a site as part of a wider programme.' }
    ],
    why: [
      { h3: 'Fixed price', text: 'A clear quote, with no surprises when the unit is empty.' },
      { h3: 'Planned around trading', text: 'Dates and access times agreed with you in advance.' },
      { h3: 'Handles bulky fixtures', text: 'A crew ready for heavy and awkward items.' },
      { h3: 'Fully insured service', text: 'Reassurance for you and the landlord.' }
    ],
    quoteTips: [
      'The shop address and floor area',
      'Fixtures, shelving or stock to be cleared',
      'Loading and access arrangements',
      'Lease end date or reopening deadline',
      'Anything to keep or move elsewhere'
    ],
    local: 'We handle shop clearances across Leeds, York and Harrogate centres as well as smaller parades in Wetherby, Tadcaster and the surrounding villages. Ask about your high street and we will plan the access with you.',
    faqs: [
      { q: 'Can you clear a shop while it is still trading?', a: 'We can plan around opening hours and agree timings with you in advance.' },
      { q: 'Do you remove shop fittings?', a: 'Yes. Fixtures and fittings can be included in the clearance once agreed in the quote.' },
      { q: 'Can you clear leftover stock?', a: 'Tell us what stock remains and what should happen to it, and we will agree the approach in your quote.' }
    ],
    related: ['clearances/end-of-lease-clearances', 'clearances/office-clearances', 'removals/office-and-commercial-removals']
  },

  {
    slug: 'clearances/end-of-lease-clearances',
    level: 'leaf',
    parent: 'clearances/commercial-clearances',
    name: 'End-of-Lease Clearances',
    summary: 'Premises emptied to your lease deadline so you can hand back keys with confidence.',
    quoteService: 'Commercial Clearances',
    seoTitle: 'End of Lease Clearances Yorkshire | Optima Transport',
    metaDescription:
      'End-of-lease clearances for offices, shops and commercial units across Yorkshire. Premises emptied to your deadline with a fixed-price quote from Optima Transport.',
    h1: 'End-of-Lease Clearances for Commercial Premises',
    eyebrow: 'End-of-Lease Clearances',
    lead: 'Lease end dates are not flexible. Optima Transport clears commercial premises to your handback deadline, so you can return the keys with confidence.',
    image: VAN,
    imageAlt: 'Optima Transport branded van ready for an end-of-lease commercial clearance',
    sections: [
      {
        h2: 'What an end-of-lease clearance involves',
        paras: [
          'Many commercial leases require the premises to be returned empty. That means furniture, fittings, equipment and whatever else the business has accumulated must be out by a fixed date. We agree the scope with you, give you a fixed price, and schedule the clearance with enough margin before your handback.',
          'We recommend checking your lease for specific requirements. If you are unsure what must be removed, tell us what the lease says or share the relevant clauses and we will clear what is agreed.'
        ],
        items: [
          { h3: 'Meeting your handback date', text: 'Clearance scheduled with margin before the lease ends.' },
          { h3: 'Furniture, fittings and equipment', text: 'Everything agreed in scope removed from the premises.' },
          { h3: 'Offices, shops and units', text: 'A service suited to any commercial premises being handed back.' }
        ]
      },
      {
        h2: 'Planning an end-of-lease clearance',
        paras: [
          'Book early. Lease deadlines often coincide with other moves, so the more notice you give the more likely you are to secure the date you want. If you are relocating, combine the clearance with [office and commercial removals](/removals/office-and-commercial-removals/) to take your equipment with you and clear the rest.',
          'Specific premises types are covered by [office clearances](/clearances/office-clearances/), [retail and shop clearances](/clearances/retail-and-shop-clearances/) and [industrial unit clearances](/clearances/industrial-unit-clearances/).'
        ]
      }
    ],
    audience: [
      { h3: 'Tenants', text: 'Businesses leaving premises at the end of a lease.' },
      { h3: 'Landlords and agents', text: 'Owners wanting premises cleared for the next occupier.' },
      { h3: 'Property managers', text: 'Teams managing multiple handbacks to tight deadlines.' }
    ],
    why: [
      { h3: 'Deadline-focused', text: 'Planned to finish before your handback date.' },
      { h3: 'Fixed-price quotation', text: 'A clear figure that fits your exit budget.' },
      { h3: 'One company for move and clear', text: 'Relocate what you need and clear the rest.' },
      { h3: 'Fully insured service', text: 'Reassurance for you and the landlord.' }
    ],
    quoteTips: [
      'Premises address and type',
      'Lease end date and any required handback condition',
      'Approximate size and contents',
      'Access arrangements and building rules',
      'What is staying and what is going'
    ],
    local: 'We handle end-of-lease clearances for premises across Leeds, York, Harrogate, Wetherby and Tadcaster, and wider Yorkshire. If you are looking for end of tenancy clearance for commercial property, send us the handback date and we will confirm what is possible.',
    faqs: [
      { q: 'Does this cover residential tenancies?', a: 'This service is for commercial premises. For homes, see our domestic clearance pages.' },
      { q: 'What if I do not know what the lease requires?', a: 'Check the lease or ask your landlord or agent. We will clear whatever is agreed in the quotation.' },
      { q: 'How early should I book?', a: 'As early as you can. Booking before the final weeks gives you the most choice of dates.' },
      { q: 'Can you also move what we are keeping?', a: 'Yes. We can combine removals and clearance in the same job.' }
    ],
    related: ['clearances/office-clearances', 'clearances/retail-and-shop-clearances', 'removals/office-and-commercial-removals']
  },

  // ---------- Industrial ----------
  {
    slug: 'clearances/industrial-clearances',
    level: 'category',
    parent: 'clearances',
    name: 'Industrial Clearances',
    summary: 'Warehouse, factory and industrial unit clearances for sites of every size.',
    quoteService: 'Industrial Clearances',
    seoTitle: 'Industrial Site Clearances Yorkshire | Warehouse & Factory',
    metaDescription:
      'Industrial site clearances across Yorkshire and nationwide, including warehouse, factory and industrial unit clearances. Fixed-price quotes from Optima Transport.',
    h1: 'Industrial Site Clearances in Yorkshire & Nationwide',
    eyebrow: 'Industrial Clearances',
    lead: 'Industrial sites need clearing quickly and safely. Optima Transport provides industrial site clearances for warehouses, factories and units, with a fixed price agreed before work begins.',
    image: VAN,
    imageAlt: vanAlt,
    sections: [
      {
        h2: 'Industrial clearance services for larger sites',
        paras: [
          'Industrial clearances are a bigger undertaking than home or office jobs. Sites tend to be large, contents heavy and bulky, and access and safety arrangements matter. We begin with a detailed conversation about the site, what is on it and the timescale, then provide a fixed-price quotation and a plan for the work.',
          'Not every industrial job suits every crew, so we are honest about what we can take on. Tell us early about anything hazardous or specialist so it can be assessed before the price is set.'
        ],
        items: [
          { h3: 'Warehouses', text: 'See [warehouse clearances](/clearances/warehouse-clearances/) for racking, pallets and stock.' },
          { h3: 'Factories and works', text: 'See [factory clearances](/clearances/factory-clearances/) for production-site clearance.' },
          { h3: 'Industrial units', text: 'See [industrial unit clearances](/clearances/industrial-unit-clearances/) for smaller units and estates.' }
        ]
      },
      {
        h2: 'Why industrial site clearance needs planning',
        paras: [
          'Access, loading areas, site rules and timings all influence the job. We ask the right questions up front so the plan is realistic and the price accurate. That is especially important when the site is tied to a lease, sale or redevelopment.',
          'If your site includes offices, see [office clearances](/clearances/office-clearances/). If you are relocating operations rather than closing them, our [office and commercial removals](/removals/office-and-commercial-removals/) service can help.'
        ]
      }
    ],
    audience: [
      { h3: 'Industrial occupiers', text: 'Businesses closing or relocating from industrial premises.' },
      { h3: 'Landlords and agents', text: 'Owners preparing industrial property for re-letting or sale.' },
      { h3: 'Administrators and receivers', text: 'Professionals needing a site cleared to a timetable.' }
    ],
    why: [
      { h3: 'Fixed-price quotation', text: 'A clear price for a major job.' },
      { h3: 'Planned for scale', text: 'Access, timing and volume discussed before work starts.' },
      { h3: 'Honest assessment', text: 'We tell you what we can take on and what we cannot.' },
      { h3: 'Fully insured service', text: 'Reassurance on larger, higher-risk sites.' }
    ],
    quoteTips: [
      'Site address and the type of premises',
      'Approximate size and how full it is',
      'Heavy, bulky or specialist items on site',
      'Access, loading and any site rules',
      'Your deadline'
    ],
    local: 'We clear industrial sites around Boston Spa and Wetherby, in and around Leeds, Tadcaster, York and Harrogate, and across Yorkshire. We are also able to travel for larger sites elsewhere in the UK.',
    faqs: [
      { q: 'What is an industrial site clearance?', a: 'The removal of unwanted equipment, stock, fixtures and contents from industrial premises such as warehouses, factories and units.' },
      { q: 'Do you clear sites outside Yorkshire?', a: 'Yes. We take on nationwide work, so ask about your location.' },
      { q: 'How is a clearance quoted?', a: 'We learn about the size, access and timescale and provide a fixed price before the job starts.' }
    ],
    related: ['clearances/warehouse-clearances', 'clearances/factory-clearances', 'clearances/industrial-unit-clearances', 'clearances/commercial-clearances']
  },

  {
    slug: 'clearances/warehouse-clearances',
    level: 'leaf',
    parent: 'clearances/industrial-clearances',
    name: 'Warehouse Clearances',
    summary: 'Racking, pallets, stock and equipment cleared from warehouses and distribution sites.',
    quoteService: 'Industrial Clearances',
    seoTitle: 'Warehouse Clearances Yorkshire & UK | Optima Transport',
    metaDescription:
      'Warehouse clearance services across Leeds, Wetherby, York, Harrogate and nationwide. Racking, pallets, stock and equipment cleared for a fixed price.',
    h1: 'Warehouse Clearances in Yorkshire & Nationwide',
    eyebrow: 'Warehouse Clearances',
    lead: 'Closing, downsizing or re-letting a warehouse? Optima Transport clears racking, pallets, stock and equipment efficiently, with a fixed price agreed before we begin.',
    image: VAN,
    imageAlt: 'Optima Transport branded van available for warehouse clearances across Yorkshire',
    sections: [
      {
        h2: 'What a warehouse clearance involves',
        paras: [
          'Warehouses tend to hold large volumes of bulky material: pallets, racking, shelving, packaging, stock and equipment left behind from a business that has moved on. The first step is understanding the site: its size, what remains, how it is accessed and what has to be finished by when. From there we provide a fixed-price quotation and agree the timing.',
          'Tell us what equipment is on site, such as loading docks and forklifts, and what the access constraints are. Where the site has hazardous or specialist contents, mention them early so they can be assessed before we set the price.'
        ],
        items: [
          { h3: 'Racking and shelving', text: 'Pallet racking, shelving and storage systems cleared from the site.' },
          { h3: 'Pallets, packaging and stock', text: 'Pallets, packaging and surplus stock removed once agreed with you.' },
          { h3: 'Equipment and fit-out', text: 'Left-behind equipment, mezzanine contents and fit-out cleared.' }
        ]
      },
      {
        h2: 'Warehouse clearance around Boston Spa, Leeds and York',
        paras: [
          'Yorkshire has a large concentration of warehouse and distribution sites, from the trading estates around Thorp Arch near Boston Spa to Leeds, York and Harrogate\'s business parks. We know the roads and logistics of the area, and we plan collections around dock hours, gate times and site rules.',
          'If your warehouse also includes an office suite, add [office clearances](/clearances/office-clearances/) to the same visit. For manufacturing sites, see [factory clearances](/clearances/factory-clearances/); for smaller estate units, see [industrial unit clearances](/clearances/industrial-unit-clearances/). Moving operations rather than closing? Our [long distance haulage](/haulage/long-distance-haulage/) service can transport goods across the country.'
        ]
      }
    ],
    audience: [
      { h3: 'Logistics and distribution firms', text: 'Operators closing or consolidating warehouse sites.' },
      { h3: 'Landlords and property agents', text: 'Owners clearing a warehouse before re-letting or sale.' },
      { h3: 'Administrators and receivers', text: 'Professionals clearing a site to a timetable.' },
      { h3: 'Manufacturers and retailers', text: 'Companies clearing surplus storage and stock.' }
    ],
    why: [
      { h3: 'Fixed-price quotation', text: 'A clear price for a large job, agreed before work begins.' },
      { h3: 'Planned around site access', text: 'Dock hours, gate times and site rules built into the plan.' },
      { h3: 'Straightforward assessment', text: 'We are upfront about what we can and cannot take on.' },
      { h3: 'Fully insured service', text: 'Reassurance on every job.' }
    ],
    quoteTips: [
      'Warehouse address and approximate floor area',
      'Racking, pallets, stock and equipment to be cleared',
      'Loading docks, forklifts and access arrangements',
      'Anything hazardous or specialist on site',
      'Lease end, handover or sale deadline'
    ],
    local: 'If you need warehouse clearance in Leeds, Wetherby, York or Harrogate, or around trading estates near Boston Spa and Tadcaster, we are on your doorstep. For larger sites we can take on warehouse clearance nationwide.',
    faqs: [
      { q: 'How is a warehouse clearance priced?', a: 'Based on the size of the site, the amount and type of material, access and timescale. We agree a fixed price before work starts.' },
      { q: 'Can you clear a full warehouse?', a: 'We assess every job individually and agree the plan with you. Tell us the size and contents and we will advise.' },
      { q: 'Do you clear racking?', a: 'Yes, racking and shelving can be included in the clearance once agreed in your quote.' },
      { q: 'Can you work around operating hours?', a: 'Where site access allows, we can agree timings that suit your operation.' }
    ],
    related: ['clearances/industrial-unit-clearances', 'clearances/factory-clearances', 'clearances/office-clearances', 'haulage/long-distance-haulage']
  },

  {
    slug: 'clearances/factory-clearances',
    level: 'leaf',
    parent: 'clearances/industrial-clearances',
    name: 'Factory Clearances',
    summary: 'Production-site and works clearances planned around safety, access and your timetable.',
    quoteService: 'Industrial Clearances',
    seoTitle: 'Factory Clearances Yorkshire | Industrial Sites | Optima',
    metaDescription:
      'Factory and works clearance services across Yorkshire and nationwide. Production-site clearances planned around safety and access, with fixed-price quotes.',
    h1: 'Factory Clearances in Yorkshire & Nationwide',
    eyebrow: 'Factory Clearances',
    lead: 'Factory clearances demand planning, safety awareness and honest assessment. Optima Transport clears production sites to a fixed price and a schedule you can rely on.',
    image: VAN,
    imageAlt: 'Optima Transport branded van used for factory and industrial site clearances',
    sections: [
      {
        h2: 'What a factory clearance involves',
        paras: [
          'A factory differs from a warehouse because of what has happened there. Production areas, workshops, plant rooms, tooling and offices all need to be looked at. We start with a detailed discussion of what is on site, which areas are involved and what condition they must be left in, then we agree a fixed-price quotation.',
          'Factories can contain items that are heavy, specialist or hazardous. We assess these before quoting, and tell you plainly where something is outside what we can safely take on, so you are not caught out on the day.'
        ],
        items: [
          { h3: 'Production areas', text: 'Benches, fittings and unwanted equipment cleared from the shop floor.' },
          { h3: 'Workshops and stores', text: 'Tooling, shelving and parts storage emptied.' },
          { h3: 'Offices and amenities', text: 'Canteens, offices and welfare areas included in the clearance.' }
        ]
      },
      {
        h2: 'Planning a factory clearance safely',
        paras: [
          'Safety on industrial sites is not negotiable. Share any site rules, induction requirements and hazards when you enquire so that the clearance plan reflects them. Keep us informed of any change in access or timetable so there are no surprises.',
          'For storage-led sites see [warehouse clearances](/clearances/warehouse-clearances/), and for smaller premises see [industrial unit clearances](/clearances/industrial-unit-clearances/). Our wider [industrial clearances](/clearances/industrial-clearances/) page gives an overview of how we approach larger sites.'
        ]
      }
    ],
    audience: [
      { h3: 'Manufacturers closing or relocating', text: 'Businesses vacating production sites.' },
      { h3: 'Site owners and agents', text: 'Owners preparing a former factory for sale, letting or redevelopment.' },
      { h3: 'Administrators', text: 'Professionals responsible for clearing a site to a timetable.' }
    ],
    why: [
      { h3: 'Planned for safety', text: 'Site rules and hazards built into the plan before we start.' },
      { h3: 'Fixed-price quotation', text: 'A clear figure for a complex job.' },
      { h3: 'Honest about limits', text: 'We say upfront what we can and cannot take on.' },
      { h3: 'Fully insured service', text: 'Reassurance on higher-risk sites.' }
    ],
    quoteTips: [
      'Site address and what was produced there',
      'Heavy plant, tooling or specialist items',
      'Anything hazardous',
      'Site rules, induction and access times',
      'Your deadline'
    ],
    local: 'We take on factory clearances around Leeds, Wetherby, Tadcaster, York and Harrogate and across the wider Yorkshire industrial area, with the capability to work nationwide.',
    faqs: [
      { q: 'Can you clear a working factory?', a: 'We plan around your operation and agree timings in advance. Share the details and we will advise.' },
      { q: 'What about heavy plant and machinery?', a: 'Tell us what is on site. We assess each item and let you know what we can take on.' },
      { q: 'Do you offer a fixed price?', a: 'Yes. We agree a fixed price before work starts.' }
    ],
    related: ['clearances/warehouse-clearances', 'clearances/industrial-unit-clearances', 'clearances/industrial-clearances']
  },

  {
    slug: 'clearances/industrial-unit-clearances',
    level: 'leaf',
    parent: 'clearances/industrial-clearances',
    name: 'Industrial Unit Clearances',
    summary: 'Trade counters, workshops and estate units cleared quickly for handback or re-letting.',
    quoteService: 'Industrial Clearances',
    seoTitle: 'Industrial Unit Clearances Yorkshire | Optima Transport',
    metaDescription:
      'Industrial unit clearances for workshops, trade units and estate premises across Yorkshire. Quick turnaround and fixed-price quotes from Optima Transport.',
    h1: 'Industrial Unit Clearances in Yorkshire',
    eyebrow: 'Industrial Unit Clearances',
    lead: 'Estate units, workshops and trade counters often need clearing quickly. Optima Transport empties industrial units to your handback date for a fixed price.',
    image: VAN,
    imageAlt: 'Optima Transport branded van used for industrial unit clearances',
    sections: [
      {
        h2: 'What an industrial unit clearance involves',
        paras: [
          'Industrial units are smaller than full warehouses or factories, but they can still hold heavy benches, stock, racking, tools and years of accumulated material. We clarify what is inside, how it is accessed and when it must be out, then give you a fixed-price quotation.',
          'Because units sit on shared estates, we plan around neighbouring occupiers, shared yards and estate rules. Let us know about restrictions on deliveries or access so the clearance runs smoothly.'
        ],
        items: [
          { h3: 'Trade and workshop units', text: 'Benches, shelving, tools and stock cleared.' },
          { h3: 'Storage and light industrial units', text: 'Racking and stored goods removed ready for the next occupier.' },
          { h3: 'Units on shared estates', text: 'Access planned around neighbouring tenants and estate rules.' }
        ]
      },
      {
        h2: 'Handing back an industrial unit',
        paras: [
          'Many units are let on terms that require them to be returned empty. Plan your clearance with plenty of time before the date and confirm what the lease expects. Our [end-of-lease clearances](/clearances/end-of-lease-clearances/) page explains how we work to a handback deadline.',
          'Larger sites belong with our [warehouse clearances](/clearances/warehouse-clearances/) or [factory clearances](/clearances/factory-clearances/) services. If you need to relocate stock to another site rather than clear it, ask about [short distance haulage](/haulage/short-distance-haulage/).'
        ]
      }
    ],
    audience: [
      { h3: 'Small and growing businesses', text: 'Tenants leaving or changing units.' },
      { h3: 'Estate managers and landlords', text: 'Owners clearing units between lets.' },
      { h3: 'Trades and workshops', text: 'Operators closing down or consolidating premises.' }
    ],
    why: [
      { h3: 'Quick turnaround', text: 'Smaller units can often be arranged at short notice.' },
      { h3: 'Fixed-price quotation', text: 'A clear price agreed first.' },
      { h3: 'Planned around the estate', text: 'Access, shared yards and neighbouring occupiers considered.' },
      { h3: 'Fully insured service', text: 'Reassurance on every job.' }
    ],
    quoteTips: [
      'Unit address and approximate size',
      'Contents such as benches, racking or stock',
      'Estate access rules',
      'Anything hazardous or specialist',
      'Handback date'
    ],
    local: 'We clear industrial units on estates around Boston Spa, Wetherby, Tadcaster, Leeds, York and Harrogate, and further afield on request. Tell us which estate you are on and we will plan the access with you.',
    faqs: [
      { q: 'How quickly can you clear a unit?', a: 'Smaller units can often be arranged at short notice. Tell us your deadline and we will confirm availability.' },
      { q: 'Do you clear racking and benches?', a: 'Yes, once agreed in your quote.' },
      { q: 'Can you work around other tenants?', a: 'Yes. Share any access rules and we will plan around them.' }
    ],
    related: ['clearances/warehouse-clearances', 'clearances/factory-clearances', 'clearances/end-of-lease-clearances', 'haulage/short-distance-haulage']
  }
];
