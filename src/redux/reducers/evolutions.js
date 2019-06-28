import {FETCH_ERROR, FECHT_EVOLUTION, FETCH_PENDING,FECHT_CHAIN} from '../../redux/actions'
const initinialState = {
    evolution:{},
    loading: false,
    error: false
   
};
export const evolutionChain = (state=initinialState,action)=>{
    console.log("Chain",state)
    const newEvolution = Object.assign({},state.evolution)
    switch(action.type){
        case FETCH_PENDING: 
            return {
                ...state,
               loading: true

            }
        case FECHT_CHAIN:
                console.log('Chain evoulion', state)
                // newEvolution[action.payload.evolves_to] =action.payload
                return {
                    ...state,
                    // details:newEvolution
                }    
        case FECHT_EVOLUTION:
            newEvolution[action.payload.evolves_to] =action.payload
            return {
                ...state,
                details:newEvolution
            }
        case FETCH_ERROR:
            return {
                ...state,
                loading: false,
                error: action.error
            }
        default: 
            return state;
    }
};
