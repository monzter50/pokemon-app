import React,{Component} from 'react';
import PokeList from '../components/List/PokemonList';
import NavbarContainer from '../components/Navbar/NavbarContainer';
import {connect} from 'react-redux';
// import fecthPokemons from '../helpers/fecthPokemons';
import {fecthPokemons} from '../redux/actions';
import { bindActionCreators } from 'redux';
class PokeLayout extends Component{

  
    componentDidMount(){    
        this.props.fecthPokemons()
    }
    
    render(){   
        return(
            <>
                
                <PokeList
                />
                <footer className="layout-footer">
                    <article className="footer-description container">
                        <p>Monster Codes</p>
                        <div>
                            <a href="https://github.com/monzter50">My github</a>
                        </div>
                    </article>
                </footer>
            </>
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