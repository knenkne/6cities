import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App.jsx';

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
const cities = [`Paris`, `Cologne`, `Brussels`, `Amsterdam`, `Hamburg`, `Dusseldorf`];
const city = `Paris`;

ReactDOM.render(<App offers={offers} cities={cities} city={city} />, document.getElementById(`root`));
