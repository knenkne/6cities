import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import {offers} from './mocks/offers.js';
import App from './App.jsx';
import {store} from './store/store.js';

const cities = [`Paris`, `Cologne`, `Brussels`, `Amsterdam`, `Hamburg`, `Dusseldorf`];
const city = `Amsterdam`;
const userName = `jztenk@gmail.com`;

ReactDOM.render(
    <Provider store={store}>
      <App offers={offers} cities={cities} city={city} userName={userName} />
    </Provider>, document.getElementById(`root`));
