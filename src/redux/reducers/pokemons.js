import {
  FETCH_POKEMONS_PENDING,
  FETCH_POKEMONS_SUCCESS,
  FETCH_POKEMONS_ERROR,
} from '../actions';

const initinialState = {
  pokemons: [],
  loading: false,
  error: false,
};

const pokemonsReducers = (state = initinialState, action) => {
  switch (action.type) {
  case FETCH_POKEMONS_PENDING:
    return {
      ...state,
      loading: true,
    };
  case FETCH_POKEMONS_SUCCESS:
    console.log(state.pokemons);
    return {
      ...state,
      loading: false,
      pokemons: action.payload,
      count: action.count,
    };
  case FETCH_POKEMONS_ERROR:
    return {
      ...state,
      loading: false,
      error: action.error,
    };
  default:
    return state;
  }
};
export default pokemonsReducers;
