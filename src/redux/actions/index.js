
export const FETCH_POKEMONS_PENDING = 'FETCH_POKEMONS_PENDING';
export const FETCH_POKEMONS_SUCCESS = 'FETCH_POKEMONS_SUCCESS';
export const FETCH_POKEMONS_ERROR = 'FETCH_POKEMONS_ERROR';
export const FETCH_SELECT_POKEMON_PENDING = 'FETCH_SELECT_POKEMON_PENDING';
export const FETCH_SELECT_POKEMON_ERROR = 'FETCH_SELECT_POKEMON_ERROR';
export const FETCH_SELECT_POKEMON_SUCCESS = 'FETCH_SELECT_POKEMON_SUCCESS';
const fetchPokemonsPending = () => ({type: FETCH_POKEMONS_PENDING})
const fetchPokemonsSuccess = payload => ({type: FETCH_POKEMONS_SUCCESS,payload})
const fetchPokemonsError =  error =>({type: FETCH_POKEMONS_ERROR,error})
const fetchSelectPokemonSuccess = payload => ({type: FETCH_SELECT_POKEMON_SUCCESS,payload})
const fetchSelectPokemonError = error => ({type: FETCH_SELECT_POKEMON_ERROR,error})
const fetchSelectPokemonPending = () => ({type: FETCH_SELECT_POKEMON_PENDING})

export const fecthPokemons =()=>{
    
    return dispatch  =>{
        dispatch(fetchPokemonsPending())
        fetch(`https://pokeapi.co/api/v2/pokemon/?offset=0&limit=200`)
        .then(response => response.json())
       
        .then(response => {
            console.log("response",response.results)

            dispatch(fetchPokemonsSuccess(response.results))
            return response.results;

        })
        .catch(error => 
            dispatch(fetchPokemonsError(error))
        )
    }
}

export const fecthPokemon =(name)=>{
    
    return dispatch  =>{
        // dispatch(fetchSelectPokemonPending())
       return fetch(`https://pokeapi.co/api/v2/pokemon/${name}/`)
        .then(response => response.json())
        .then(response => {
            // const {name,types} = response
            console.log("select pokemon",response)
            dispatch(fetchSelectPokemonSuccess(response))
            // return {
            //     name,
            //     types
            // };

        })
        .catch(error => 
            dispatch(fetchSelectPokemonError(error))
        )
    }
}
