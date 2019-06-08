import React,{Component} from 'react';
import PokeCard from '../Card/PokemonCard';
class PokemonList extends Component{
    render(){
        return(
            <div className="container">
                <PokeCard/>
            </div>
        )
    }
}
export default PokemonList;