import {FETCH_SELECT_POKEMON_ERROR, FETCH_SELECT_POKEMON_SUCCESS, FETCH_SELECT_POKEMON_PENDING} from '../../redux/actions'

export const selectPokemonReducer = (state={},action)=>{
    switch(action.type){
        case FETCH_SELECT_POKEMON_PENDING: 
            return {
                progress:{card_loading: true}
            }
        case FETCH_SELECT_POKEMON_SUCCESS:
            console.log("pokemon state",state)
            console.log("pokemon reducers action",action.payload)
            return {
                progress:{card_loading: false},
                stats: action.payload
            }
        case FETCH_SELECT_POKEMON_ERROR:
            return {
                progress:{card_loading: false},
                message:{card_error: action.error}
            }
        default: 
            return state;
    }
};
