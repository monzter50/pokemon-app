import {combineReducers} from 'redux';
import {selectPokemonReducer} from "./pokemon";
import {pokemonsReducers} from "./pokemons";

const rootReducer = combineReducers({
   selectPokemonReducer,
   pokemonsReducers
   // person
});
export default rootReducer;