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

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
