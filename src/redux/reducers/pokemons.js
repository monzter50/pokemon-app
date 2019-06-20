import {FETCH_POKEMONS_PENDING, FETCH_POKEMONS_SUCCESS, FETCH_POKEMONS_ERROR} from '../../redux/actions'

export const pokemonsReducers = (state={},action)=>{
    switch(action.type){
        case FETCH_POKEMONS_PENDING: 
            return {
                progress:{loading: true}
            }
        case FETCH_POKEMONS_SUCCESS:
            console.log("state",state)
            console.log("reducers action",action.payload)
            return {
                progress:{loading: false},
                pokemons: action.payload
            }
        case FETCH_POKEMONS_ERROR:
            return {
                progress:{loading: false},
               message:{error: action.error} 
            }
        default: 
            return state;
    }
};
