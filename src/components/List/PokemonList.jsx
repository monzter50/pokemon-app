import React,{Component} from 'react';
import PokeCard from '../Card/PokemonCard';
class PokemonList extends Component{
    constructor(props){
        super(props)
      
    }
   
    render(){
        const {pokemons} = this.props 
        console.log(pokemons)
       
        return(
            <div className="container">
               
                <div className="cards">
                {
                    pokemons ?(
                        pokemons.map((pokemon,index)=>(
                            <PokeCard name={pokemon.name} id={index} />
                        ))
                    ) : (<div>Loading...</div>)
                   
                    
                }
                </div>
                
            </div>
        )
    }
}
export default PokemonList;