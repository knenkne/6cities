import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App.jsx';

const names = [`Beautiful & luxurious apartment at great location`, `Wood and stone place`, `Canal View Prinsengracht`, `Nice, cozy, warm big bed apartment`];
const cities = [`Paris`, `Cologne`, `Brussels`, `Amsterdam`, `Hamburg`, `Dusseldorf`];

ReactDOM.render(<App names={names} cities={cities} />, document.getElementById(`root`));
