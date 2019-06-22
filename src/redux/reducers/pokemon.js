import {FETCH_SELECT_POKEMON_ERROR, FETCH_SELECT_POKEMON_SUCCESS, FETCH_SELECT_POKEMON_PENDING} from '../../redux/actions'
const initinialState = {
    details:{},
    loading: false,
    error: false
   
};
export const selectPokemonReducer = (state=initinialState,action)=>{
    console.log("Details",state)
    const newDetails = Object.assign({},state.details)
    switch(action.type){
        case FETCH_SELECT_POKEMON_PENDING: 
            return {
                ...state,
               loading: true

            }
        case FETCH_SELECT_POKEMON_SUCCESS:
            newDetails[action.payload.name] =action.payload
            return {
                ...state,
                details:newDetails
            }
        case FETCH_SELECT_POKEMON_ERROR:
            return {
                ...state,
                loading: false,
                error: action.error
            }
        default: 
            return state;
    }
};
