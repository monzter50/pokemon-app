/* eslint-disable no-undef */
/* eslint-disable no-underscore-dangle */
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducers from '../reducers';

const initinialState = {
	pokemons: [],
	stats: [],
	progress: {
		loading: false,
		card_loading: false,
	},
	message: {
		error: false,
		card_error: false,
	},
};
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE || compose;

const store = createStore(
	reducers,
	initinialState,
	composeEnhancer(applyMiddleware(thunk)),
);
export default store;
