import React from 'react';
import ReactDOM from 'react-dom';
import './scss/styles.scss';
import PokeApp from './container/PokeContainer';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<PokeApp />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
