
import {SET_POKEMON} from '../../redux/actions'
export const pokemon = (state={},action)=>{
    switch(action.type){
        case SET_POKEMON:
            return  action.payload;
              break;
        default:
            return state;
             break;
    }
};