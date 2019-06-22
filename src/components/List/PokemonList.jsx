import React,{Component} from 'react';
import PokeCard from '../Card/PokemonCard';
import {connect} from 'react-redux';
import {fecthPokemons,fecthPokemon} from '../../redux/actions';
// import {getDataPokemons} from '../redux/actions'
class PokemonList extends Component{
  
   componentDidMount(){      
       const {pokemons,fecthPokemon} = this.props
       console.log("didMount Pokemon",pokemons)
    //     pokemons.map(pokemon =>{
    //     fecthPokemon(pokemon.name)
    //    }) 
   }
   
    render(){
        const {pokemons,loading,fecthPokemon,pokemon} = this.props 
        if(!pokemons) return null
        
        // pokemons.map(pokemon=>{
        //     fecthPokemon(pokemon.name)
        // })
        // fecthPokemon(pokemons[0].name)
                console.log("List Pokemon",pokemon.length)
         
       
        console.log("List Loading",pokemons)
       
        return(
            <div className="container">
               
                <div className="cards">
                {
                    !loading ?(
                        pokemons.map((pokemon,index)=>(
                            // <div>{pokemon.name}</div>
                            <PokeCard name={pokemon.name} id={index} key={index} />
                        ))
                    ) : (<div>Loading...</div>)
                   
                    
                }
                </div>
                
            </div>
        )
    }
}
const mapStateToProps =state=>({
    progress:state.pokemonsReducers.loading,	
    pokemons:state.pokemonsReducers.pokemons,
        pokemon: state.selectPokemonReducer,
})

const mapDispatchToProps ={
    fecthPokemons,
    fecthPokemon
}


export default connect(
    mapStateToProps, 
    mapDispatchToProps
    )(PokemonList);