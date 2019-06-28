import {combineReducers} from 'redux';
import {selectPokemonReducer} from "./pokemon";
import {pokemonsReducers} from "./pokemons";
import {evolutionChain} from './evolutions';
const rootReducer = combineReducers({
   selectPokemonReducer,
   pokemonsReducers,
   // evolutionChain
   // person
});
export default rootReducer;