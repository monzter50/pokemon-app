/* eslint-disable camelcase */
/* eslint-disable no-undef */
import fetchClient from '../../settings/httpClient';
import { GET_SPECIES, GET_POKEMON, GET_EVOLUTION } from '../../settings/endpoints';

export const FETCH_POKEMONS_PENDING = 'FETCH_POKEMONS_PENDING';
export const FETCH_POKEMONS_SUCCESS = 'FETCH_POKEMONS_SUCCESS';
export const FETCH_POKEMONS_ERROR = 'FETCH_POKEMONS_ERROR';
export const FETCH_SELECT_POKEMON_PENDING = 'FETCH_SELECT_POKEMON_PENDING';
export const FETCH_SELECT_POKEMON_ERROR = 'FETCH_SELECT_POKEMON_ERROR';
export const FETCH_SELECT_POKEMON_SUCCESS = 'FETCH_SELECT_POKEMON_SUCCESS';

export const FETCH_PENDING = 'FETCH_PENDING';
export const FETCH_ERROR = 'FETCH_ERROR';
export const FECHT_CHAIN = 'FECHT_CHAIN';
export const FECHT_EVOLUTION = 'FECHT_EVOLUTION';

export const SEARCH_POKEMON = 'SEARCH_POKEMON';
const searchPokemon = (payload) => ({ type: SEARCH_POKEMON, payload });

const fecthChainSuccess = (payload) => ({ type: FECHT_CHAIN, payload });
const fetchPending = () => ({ type: FETCH_PENDING });
const fecthEvolutionSuccess = (payload) => ({ type: FECHT_EVOLUTION, payload });

const fetchPokemonsPending = () => ({ type: FETCH_POKEMONS_PENDING });
const fetchPokemonsSuccess = (payload) => ({
  type: FETCH_POKEMONS_SUCCESS,
  payload,
});
const fetchPokemonsError = (error) => ({ type: FETCH_POKEMONS_ERROR, error });
const fetchSelectPokemonSuccess = (payload) => ({
  type: FETCH_SELECT_POKEMON_SUCCESS,
  payload,
});
const fetchSelectPokemonError = (error) => ({
  type: FETCH_SELECT_POKEMON_ERROR,
  error,
});
const fetchSelectPokemonPending = () => ({
  type: FETCH_SELECT_POKEMON_PENDING,
});

export const fecthPokemons = (prevOffset) => async (dispatch) => {
  try {
    dispatch(fetchPokemonsPending());
    const data = await fetchClient.get(`${process.env.REACT_APP_BASE_API_URL}${GET_POKEMON}/?offset=`, prevOffset);
    console.log(data);
    dispatch(fetchPokemonsSuccess(data.results));
  } catch (e) {
    dispatch(fetchPokemonsError(e));
  }
};

export const fecthPokemon = (name) => async (dispatch) => {
  try {
    dispatch(fetchPending());
    const data = await fetchClient.get(`${process.env.REACT_APP_BASE_API_URL}${GET_POKEMON}/`, name);
    dispatch(fetchSelectPokemonSuccess(data));
  } catch (e) {
    dispatch(fetchSelectPokemonError(e));
  }
};

export const fecthSpecies = (name) =>
// eslint-disable-next-line implicit-arrow-linebreak
  async (dispatch) => {
    try {
      dispatch(fetchSelectPokemonPending());
      const data = await fetchClient.get(`${process.env.REACT_APP_BASE_API_URL}${GET_SPECIES}/`, name);
      const { evolution_chain, habitat } = data;
      dispatch(fecthChainSuccess({ name, evolution_chain, habitat }));
    } catch (e) {
      dispatch(fetchSelectPokemonError(e));
    }
  };
export const fecthEvolution = (id) => async (dispatch) => {
  try {
    dispatch(fetchSelectPokemonPending());
    const data = await fetchClient.get(`${process.env.REACT_APP_BASE_API_URL}${GET_EVOLUTION}/`, id);
    dispatch(fecthEvolutionSuccess(data));
  } catch (e) {
    dispatch(fetchSelectPokemonError(e));
  }
};
export const findPokemon = (text) => (dispatch) => {
  dispatch(searchPokemon(text));
};
