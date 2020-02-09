import React from 'react';
import ReactDOM from 'react-dom';

import App from './App.jsx';

const offers = [
  {
    name: `Beautiful & luxurious apartment at great location`,
    type: `Apartment`,
    images: [`img/room.jpg`, `img/apartment-01.jpg`, `img/apartment-02.jpg`, `img/apartment-03.jpg`, `img/studio-01.jpg`, `img/apartment-01.jpg`],
    bedrooms: 3,
    adults: 4,
    price: 1337,
    premium: true,
    rating: 4.51,
    bookmarked: true
  },
  {
    name: `Wood and stone place`
  },
  {
    name: `Canal View Prinsengracht`
  },
  {
    name: `Nice, cozy, warm big bed apartment`
  }];

const cities = [`Paris`, `Cologne`, `Brussels`, `Amsterdam`, `Hamburg`, `Dusseldorf`];
const city = `Paris`;
const userName = `jztenk@gmail.com`;

ReactDOM.render(<App offers={offers} cities={cities} city={city} userName={userName} />, document.getElementById(`root`));
