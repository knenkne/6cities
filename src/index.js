import React from 'react';
import ReactDOM from 'react-dom';

import App from './App.jsx';

const offers = [
  {
    name: `Beautiful & luxurious apartment at great location`},
  {
    name: `Wood and stone place`
  },
  {
    name: `Canal View Prinsengracht`
  },
  {
    name: `Nice, cozy, warm big bed apartment`
  }];

const images = [`img/room.jpg`, `img/apartment-01.jpg`, `img/apartment-02.jpg`, `img/apartment-03.jpg`, `img/studio-01.jpg`, `img/apartment-01.jpg`];

const cities = [`Paris`, `Cologne`, `Brussels`, `Amsterdam`, `Hamburg`, `Dusseldorf`];
const city = `Paris`;
const userName = `jztenk@gmail.com`;

ReactDOM.render(<App offers={offers} cities={cities} city={city} userName={userName} images={images} />, document.getElementById(`root`));
