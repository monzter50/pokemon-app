import React,{Component} from 'react';
import PokeList from '../components/List/PokemonList'
import {connect} from 'react-redux';
// import fecthPokemons from '../helpers/fecthPokemons';
import {fecthPokemons} from '../redux/actions';
import { bindActionCreators } from 'redux';
class PokeLayout extends Component{
    constructor(props){
        super(props)
        this.state = {
            pokemons:null,
            error:false,
            loading:true
        }
    }
   
    componentDidMount(){
     

    }
    
    render(){   
     console.log("Container")
        return(
            <>
                <PokeList />
            </>
        )
    }
}
//  const mapStateToProps =state=>({
	
// 		pokemons: state.pokemons
	
// })

// const mapDispatchToProps ={
// 	fecthPokemons
// }

export default connect(
    // mapStateToProps, 
    // mapDispatchToProps
    )(PokeLayout);