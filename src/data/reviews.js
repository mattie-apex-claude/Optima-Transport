// Genuine Google reviews, quoted exactly as written by customers. Do not edit the wording of a quote.
// Ratings are omitted because star values were not supplied; add `rating: 5` to an entry only once verified on the Google listing.
export const reviews = [
  {
    id: 'jane-sanderson',
    name: 'Jane Sanderson',
    quote: 'Ryan and Lewis were huge help in my move. They were polite and professional. Support was given throughout the move. Nothing was too much trouble. I would definitely recommend them. First Class. Kind regards jane'
  },
  {
    id: 'millie-turner',
    name: 'Millie Turner',
    quote: 'Cannot recommend these guys enough! Honestly didn’t lift a finger and even helped me move around furniture in my new house and made my moving experience simple and easy. Ryan was really friendly and even waited while we were sorting out some issues getting the keys free of charge! Great price too!'
  },
  {
    id: 'courtney-may',
    name: 'Courtney May',
    quote: 'Great service! Will defiantly be using again! They got the job done very smoothly! Thankyou again 🙂'
  },
  {
    id: 'ryan-smith-wedding',
    name: 'Ryan Smith',
    quote: 'Had Ryan move some bit from my house to my wedding venue last year and he was extremely professional. Couldn’t do enough for me and my wife’s special day. Absolutely would use him again 100% top bloke. Was that good we actually invited him to the after party'
  },
  {
    id: 'kayleigh-evans',
    name: 'Kayleigh Evans',
    quote: 'Great company, picked up a sofa for me on a Sunday was on time and really quick to get the sofa in and out of both properties. Both guys who came were polite and friendly too. Would definitely recommend.'
  },
  {
    id: 'ryan-smith-last-minute',
    name: 'Ryan Smith',
    quote: 'Amazing service took my job on to move house last minute after being let down by another company. Ryan was a top bloke very polite, punctual and reasonably priced. Next time I need anything moving from a-b he will be my first call'
  },
  {
    id: 'marysia-dzierzek',
    name: 'Marysia Dzierzek',
    quote: 'These guys were ABSOLUTELY fantastic. Very polite, professional & punctual. I highly recommend them plus they are reasonably priced. Such great guys. You won\'t be disappointed! 5 star rating from me.'
  },
  {
    id: 'john',
    name: 'John',
    quote: 'Fantastic service. Excellent work. Couldn’t recommend enough. He went beyond his job and couldn’t do enough. Will definitely be using him again.'
  },
  {
    id: 'mark-edson',
    name: 'Mark Edson',
    quote: 'Great firm to deal with very professional service. Very friendly staff i would recommend this firm one million percent to anyone. I definitely will be using Optima Transport again in the future'
  },
  {
    id: 'jayme-ivers',
    name: 'Jayme Ivers',
    quote: 'Couldn’t ask for a nicer set of gentlemen really helped in my situation and 100% worth every penny you spend with these guys thank you ☺️☺️'
  },
  {
    id: 'sarah-booker',
    name: 'Sarah Booker',
    quote: 'Optima helped me move house, arrived on time, really friendly guys who got me moved quickly and efficiently! Highly reccomend and will definitely be using again'
  },
  {
    id: 'sam-jee',
    name: 'Sam Jee',
    quote: 'Great experience with Ryan. Very professional, kept updated throughout removal and all round good experience - thanks !'
  },
  {
    id: 'michelle-brown',
    name: 'Michelle Brown',
    quote: 'Great guys to help us move our whole house to new one got cracked on was no problems really helpful and friendly guys kept em fueled with cold drinks for the day'
  },
  {
    id: 'helen-foreman',
    name: 'Helen Foreman',
    quote: 'Used these guys twice now. Great service and a good price.'
  },
  {
    id: 'am-nee',
    name: 'AM Nee',
    quote: 'Lovely guys, really helpful & did a home swap for me and another tenant. Thank you!'
  }
];

// Reviews shown on a service page are left out of the homepage carousel so each appears once.
export const servicePageReviews = {
  removals: ['sarah-booker'],
  'removals/house-removals': ['michelle-brown'],
  'haulage/short-distance-haulage': ['ryan-smith-wedding'],
  'haulage/single-item-and-furniture-transport': ['kayleigh-evans']
};

const usedOnServicePages = new Set(Object.values(servicePageReviews).flat());

export const homepageReviews = reviews.filter((review) => !usedOnServicePages.has(review.id));

export const reviewsForPage = (slug) =>
  (servicePageReviews[slug] ?? []).map((id) => reviews.find((review) => review.id === id)).filter(Boolean);
