import {SEARCH_POKEMON} from '../../redux/actions'
const initinialState = {
    pokemons:[],
    loading: false,
    error: false
   
};
export const findPokemon = (state=initinialState,action)=>{

    switch(action.type){
        case SEARCH_POKEMON:
            console.log("text find", action.payload);

            // return {
            //     ...state,
            //     pokemons:action.payload
            // }
        default: 
            return state;
    }
};
