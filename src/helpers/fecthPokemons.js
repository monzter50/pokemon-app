import {fetchPokemonsPending, fetchPokemonsSuccess, fetchPokemonsError} from '../redux/actions';


function fecthPokemons(){
    
    return dispatch  =>{
        
        fetch(`https://pokeapi.co/api/v2/pokemon/?offset=0&limit=10`)
        .then(response => response.json())
        .catch(error => 
            dispatch(fetchPokemonsError(error))
        )
        .then(response => 
            dispatch(fetchPokemonsSuccess(response.results))
     
        ).finally(() => dispatch(fetchPokemonsPending()));
    }
}

export default fecthPokemons;