import { async } from "q";

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

const fecthChainSuccess = payload => ({type:FECHT_CHAIN,payload})
const fetchPending = () => ({type: FETCH_PENDING})
const fetchError = error => ({type: FETCH_ERROR,error})
const fecthEvolutionSuccess = payload => ({type:FECHT_EVOLUTION,payload})

const fetchPokemonsPending = () => ({type: FETCH_POKEMONS_PENDING})
const fetchPokemonsSuccess = payload => ({type: FETCH_POKEMONS_SUCCESS,payload})
const fetchPokemonsError =  error =>({type: FETCH_POKEMONS_ERROR,error})
const fetchSelectPokemonSuccess = payload => ({type: FETCH_SELECT_POKEMON_SUCCESS,payload})
const fetchSelectPokemonError = error => ({type: FETCH_SELECT_POKEMON_ERROR,error})
const fetchSelectPokemonPending = () => ({type: FETCH_SELECT_POKEMON_PENDING})

export const fecthPokemons =()=>{
    
    return async dispatch  =>{
        try{
            dispatch(fetchPokemonsPending())
           const data = await fetch(`https://pokeapi.co/api/v2/pokemon/?offset=0&limit=150`).then(response => response.json())
           dispatch(fetchPokemonsSuccess(data.results))


        }catch(e){
            dispatch(fetchPokemonsError(e))
        }
    }
}

export const fecthPokemon =(name)=>{
    
    return async dispatch  =>{
        try{
            dispatch(fetchPending())
            const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}/`).then(response => response.json())
            dispatch(fetchSelectPokemonSuccess(data))
        }catch (e) {
            dispatch(fetchSelectPokemonError(e))
        }
       
    }
}

export const fecthChain =(name)=>{
    console.log("fecth name",name)
    return async dispatch  =>{
        try{
            dispatch(fetchSelectPokemonPending())
           const data = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${name}/`).then(response => response.json())
           dispatch(fecthChainSuccess(data))
        }catch (e) {
            dispatch(fetchSelectPokemonError(e))

        }
       
       
    }
}

export const fecthEvolution =(url)=>{
    return async dispatch  =>{
        try{
            dispatch(fetchSelectPokemonPending())
            console.log("fecth evolution",url)
           const data = await fetch(url).then(response => response.json())
           console.log("select evolution",data)
           dispatch(fecthEvolutionSuccess(data))
        }catch(e){
            dispatch(fetchSelectPokemonError(e))
        }
      
    }
}