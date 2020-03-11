import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import App from './App.jsx';
import {store} from './store/store.js';

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>, document.getElementById(`root`));
