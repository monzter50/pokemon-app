import React,{Component} from 'react';
import PokeCard from '../Card/PokemonCard';
import {connect} from 'react-redux';
import {fecthPokemons} from '../../redux/actions';
// import {getDataPokemons} from '../redux/actions'
class PokemonList extends Component{
    constructor(props){
        super(props)
      
    }
   componentDidMount(){
       this.props.fecthPokemons()
   }
   shouldComponentRender() {
    const {loading} = this.props;
    if(this.loading === false) return false;
    // more tests
    return true;
}
    render(){
        const {pokemons,progress} = this.props 
        if(!pokemons) return null
        console.log("List Pokemon",pokemons)
        console.log("List Loading",progress.loading)
       
        return(
            <div className="container">
               
                <div className="cards">
                {
                    !progress.loading ?(
                        pokemons.map((pokemon,index)=>(
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
    progress:state.pokemonsReducers.progress,	
    pokemons:state.pokemonsReducers.pokemons
})

const mapDispatchToProps ={
	fecthPokemons
}


export default connect(
    mapStateToProps, 
    mapDispatchToProps
    )(PokemonList);