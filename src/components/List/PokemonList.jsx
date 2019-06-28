import React,{Component} from 'react';
import PokeCard from '../Card/PokemonCard';
import {connect} from 'react-redux';
import {fecthPokemons} from '../../redux/actions';
import SearchList from '../SearchList/SearchList'
class PokemonList extends Component{
  

    render(){
        const {pokemons,loading} = this.props 
        if(!pokemons) return null
 
        return(
            <div>
            
                <div className="container">
                <div className="container-search">
                    <SearchList/>
                    {/* <div className="group-search">
                        <label htmlFor="" ><img src={search} height="20px" alt=""/></label>
                        <input className="input" type="search" placeholder="Search" aria-label="Search"/>
                      
                    </div> */}
                </div>
                    <div className="cards" > 
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
            </div>
           
        )
    }
}
const mapStateToProps =state=>({
    loading:state.pokemonsReducers.loading,	
    pokemons:state.pokemonsReducers.pokemons,
})

const mapDispatchToProps ={
    fecthPokemons
}


export default connect(
    mapStateToProps, 
    mapDispatchToProps
    )(PokemonList);