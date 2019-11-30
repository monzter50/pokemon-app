import {
  FETCH_SELECT_POKEMON_ERROR,
  FETCH_SELECT_POKEMON_SUCCESS,
  FETCH_SELECT_POKEMON_PENDING,
  FECHT_CHAIN,
  FECHT_EVOLUTION,
} from '../actions';

const initinialState = {
  details: {},
  evolution: {},
  chain: {},
  loading: false,
  error: false,
};
const selectPokemonReducer = (state = initinialState, action) => {
  const newDetails = { ...state.details };
  const newChain = { ...state.chain };
  switch (action.type) {
    case FETCH_SELECT_POKEMON_PENDING:
      return {
        ...state,
        loading: true,
      };
    case FECHT_CHAIN:
      newChain[action.payload.name] = action.payload;
      return {
        ...state,
        loading: false,
        chain: newChain,
      };
    case FECHT_EVOLUTION:
      return {
        ...state,
        loading: false,
        evolution: action.payload,
      };
    case FETCH_SELECT_POKEMON_SUCCESS:
      newDetails[action.payload.name] = action.payload;
      return {
        ...state,
        details: newDetails,
      };
    case FETCH_SELECT_POKEMON_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
};
export default selectPokemonReducer;
