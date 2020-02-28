export const offers = [
  {
    id: `1`,
    name: `Beautiful & luxurious apartment at great location`,
    type: `Apartment`,
    images: [`/img/room.jpg`, `/img/apartment-01.jpg`, `/img/apartment-02.jpg`, `/img/apartment-03.jpg`, `/img/studio-01.jpg`, `/img/apartment-01.jpg`],
    bedrooms: 3,
    adults: 4,
    price: 110,
    premium: false,
    rating: 4.51,
    bookmarked: true,
    city: {
      name: `Paris`,
      cords: [52.38333, 4.9]
    },
    cords: [52.3909553943508, 4.85309666406198],
    features: [`Wi-Fi`, `Heating`, `Kitchen`, `Fridge`, `Washing machine`, `Coffee machine`, `Dishwasher`, `Towels`, `Baby seat`, `Cabel TV`],
    host: {
      name: `Angelina`,
      avatar: `/img/avatar-angelina.jpg`,
      description: [
        `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
        `An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`
      ],
      pro: true
    },
    reviews: []
  },
  {
    id: `2`,
    name: `Wood and stone place`,
    type: `Room`,
    images: [`/img/apartment-01.jpg`, `/img/room.jpg`, `/img/apartment-02.jpg`, `/img/apartment-03.jpg`, `/img/studio-01.jpg`, `/img/apartment-01.jpg`],
    bedrooms: 1,
    adults: 2,
    price: 120,
    premium: true,
    rating: 4.49,
    bookmarked: true,
    city: {
      name: `Cologne`,
      cords: [52.38333, 4.9]
    },
    cords: [52.369553943508, 4.85309666406198],
    features: [`Wi-Fi`, `Heating`, `Kitchen`, `Fridge`, `Washing machine`, `Coffee machine`, `Dishwasher`, `Towels`, `Baby seat`, `Cabel TV`],
    host: {
      name: `Max`,
      avatar: `/img/avatar-max.jpg`,
      description: [
        `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
        `An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`
      ],
      pro: false
    },
    reviews: [{
      author: {
        name: `Max`,
        avatar: `/img/avatar-max.jpg`
      },
      info: {
        text: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
        rating: 5,
        date: `2019-04-24`
      }
    },
    {
      author: {
        name: `Alex`,
        avatar: `/img/avatar-max.jpg`
      },
      info: {
        text: `lorem ipsum lol.`,
        rating: 2,
        date: `2020-01-17`
      }
    }]
  },
  {
    id: `3`,
    name: `Canal View Prinsengracht`,
    type: `House`,
    images: [`/img/apartment-02.jpg`, `/img/room.jpg`, `/img/apartment-01.jpg`, `/img/apartment-03.jpg`, `/img/studio-01.jpg`, `/img/apartment-01.jpg`],
    bedrooms: 3,
    adults: 3,
    price: 240,
    premium: false,
    rating: 2.11,
    bookmarked: false,
    city: {
      name: `Hamburg`,
      cords: [52.38333, 4.9]
    },
    cords: [52.3909553943508, 4.929309666406198],
    features: [`Wi-Fi`, `Heating`, `Kitchen`, `Fridge`, `Washing machine`, `Coffee machine`, `Dishwasher`, `Towels`, `Baby seat`, `Cabel TV`],
    host: {
      name: `Max`,
      avatar: `/img/avatar-max.jpg`,
      description: [
        `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
        `An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`
      ],
      pro: true
    },
    reviews: []
  },
  {
    id: `4`,
    name: `Nice, cozy, warm big bed apartment`,
    type: `Hotel`,
    images: [`/img/apartment-03.jpg`, `/img/room.jpg`, `/img/apartment-01.jpg`, `/img/apartment-02.jpg`, `/img/studio-01.jpg`, `/img/apartment-01.jpg`],
    bedrooms: 1,
    adults: 2,
    price: 50,
    premium: true,
    rating: 3.2,
    bookmarked: false,
    city: {
      name: `Paris`,
      cords: [52.38333, 4.9]
    },
    cords: [52.3809553943508, 4.939309666406198],
    features: [`Wi-Fi`, `Heating`, `Kitchen`, `Fridge`, `Washing machine`, `Coffee machine`, `Dishwasher`, `Towels`, `Baby seat`, `Cabel TV`],
    host: {
      name: `Angelina`,
      avatar: `/img/avatar-angelina.jpg`,
      description: [
        `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
        `An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`
      ],
      pro: false
    },
    reviews: []
  }];
