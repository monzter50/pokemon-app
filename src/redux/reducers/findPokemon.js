import { SEARCH_POKEMON } from "../actions";

const initinialState = {
	pokemons: [],
	loading: false,
	error: false,
};
export const findPokemon = (state = initinialState, action) => {
	switch (action.type) {
	case SEARCH_POKEMON:
		break;
	default:
		return state;
	}
};
