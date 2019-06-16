import {createStore,applyMiddleware,compose} from 'redux';
import thunk from 'redux-thunk';
import reducers from '../reducers';
const initinialState = {
    person:'Jose Antonio',
    pokemon:  {
        name:'',
        types:[],
        evolution:{},
        life:null
    }
};
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE || compose;

export const store = createStore(reducers,initinialState,composeEnhancer(applyMiddleware(thunk)));



