export const SET_POKEMON = "SET_POKEMON";
export const SET_POKEMON_DATA = "SET_POKEMON_DATA";

const setPokemon = payload => ({ type:SET_POKEMON, payload});
const setPokemonData = payload => ({type:SET_POKEMON_DATA,payload});

export const setSeletedPokemon = payload => {
    return dispatch => {
        //Activas en el estado un indicador de busqueda de datos
        dispatch(setPokemon(payload));
    }
};

export const getDataPeople = ()=>{

    return dispatch => {
        console.log("ejecutando funcion");
        //Activas en el estado un indicador de busqueda de datos
        dispatch(setPokemonData());
    }
}