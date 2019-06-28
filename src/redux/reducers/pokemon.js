import {
    FETCH_SELECT_POKEMON_ERROR, 
    FETCH_SELECT_POKEMON_SUCCESS, 
    FETCH_SELECT_POKEMON_PENDING,
    FECHT_CHAIN,
    FECHT_EVOLUTION} from '../../redux/actions'
const initinialState = {
    details:{
    },
    evolution:{},
    chain:{},
    loading: false,
    error: false
   
};
export const selectPokemonReducer = (state=initinialState,action)=>{
    const newDetails = Object.assign({},state.details)
    const newChain = Object.assign({},state.chain)
    const newEvolution = Object.assign({},state.evolution)
    console.log('STATE',state)
    switch(action.type){
        case FETCH_SELECT_POKEMON_PENDING: 
            return {
                ...state,
               loading: true

            }
        case FECHT_CHAIN:
                
            newChain[action.payload.name] = action.payload.evolution_chain.url
            // console.log('Chain chain', newChain)
            return {
                ...state,
                loading: false,
                chain:newChain
            } 
        case FECHT_EVOLUTION:
          
            newEvolution[action.payload.name] = action.payload
            // console.log('Chain evoulion', action.payload)
            return {
                ...state,
                loading: false,
                evolution:newEvolution
            }            
        case FETCH_SELECT_POKEMON_SUCCESS:
            newDetails[action.payload.name] = action.payload
            // console.log('My pokemon', newDetails)
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
