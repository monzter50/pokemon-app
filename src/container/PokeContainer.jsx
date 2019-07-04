import React,{Component} from 'react';
import PokeList from '../components/List/PokemonList';
import NavbarContainer from '../components/Navbar/NavbarContainer';
import {connect} from 'react-redux';
// import fecthPokemons from '../helpers/fecthPokemons';
import {fecthPokemons} from '../redux/actions';
import { bindActionCreators } from 'redux';
class PokeLayout extends Component{
    constructor(props){
        super(props)
      
    }
  
    componentDidMount(){    
        this.props.fecthPokemons()
    }
    
    render(){   
     console.log("Container")
        return(
            <div className="layout-grid">
                <NavbarContainer/>
                <PokeList
                />
            </div>
        )
    }
}
 const mapStateToProps =state=>({
	
		pokemons: state.pokemons
	
})

const mapDispatchToProps ={
	fecthPokemons
}

export default connect(
    mapStateToProps, 
    mapDispatchToProps
    )(PokeLayout);