import React from 'react';
import ReactDOM from 'react-dom';

import {offers} from './mocks/offers.js';
import App from './App.jsx';

const cities = [`Paris`, `Cologne`, `Brussels`, `Amsterdam`, `Hamburg`, `Dusseldorf`];
const city = `Paris`;
const userName = `jztenk@gmail.com`;

ReactDOM.render(<App offers={offers} cities={cities} city={city} userName={userName} />, document.getElementById(`root`));
