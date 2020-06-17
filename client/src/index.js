import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { Provider } from 'react-redux';
import { getStore, persistor } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';

require('dotenv').config();

ReactDOM.render(
  <Provider store={getStore()}>
    <App />
  </Provider>,
  document.getElementById('root')
);
