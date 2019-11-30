import { combineReducers } from 'redux';
import selectPokemonReducer from './pokemon';
import pokemonsReducers from './pokemons';
import findPokemon from './findPokemon';

const rootReducer = combineReducers({
  selectPokemonReducer,
  pokemonsReducers,
  findPokemon,
});
export default rootReducer;
