/* eslint-disable no-undef */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createBrowserHistory } from 'history';
import store from './redux/store';
import PublicRoutes from './routes';

import './scss/styles.scss';
import * as serviceWorker from './serviceWorker';

const history = createBrowserHistory();

ReactDOM.render(
  <Provider store={store}>
    <PublicRoutes history={history} />
  </Provider>,
  document.getElementById('root'),
);


serviceWorker.unregister();
