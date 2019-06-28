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
        this.state = {
            text:''
        }
        this.onChange = this.onChange.bind(this);
    }
   onChange(event){
        this.setState({
            text:event.target.value
        })
        console.log(event.target.value)
   }
    componentDidMount(){    
        this.props.fecthPokemons()
    }
    
    render(){   
     console.log("Container")
     const {text}= this.state
        return(
            <div className="layout-grid">
                <NavbarContainer/>
                <PokeList
                    onChange={this.onChange} 
                    text={text}               
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