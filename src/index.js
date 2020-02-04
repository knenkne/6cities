import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App.jsx';

const OFFERS_QUANTITY = 200;

ReactDOM.render(<App quantity={OFFERS_QUANTITY}/>, document.getElementById(`root`));
