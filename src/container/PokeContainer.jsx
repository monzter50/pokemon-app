import React,{Component} from 'react';
import PokeList from '../components/List/PokemonList'
class PokeLayout extends Component{
    constructor(props){
        super(props)
        this.state = {
            pokemon:null
        }
    }
    componentDidMount(){

    }
    
    render(){
        return(
            <>
                <PokeList/>
            </>
        )
    }
}

export default PokeLayout;