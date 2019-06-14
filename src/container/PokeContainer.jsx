import React,{Component} from 'react';
import PokeList from '../components/List/PokemonList'
class PokeLayout extends Component{
    constructor(props){
        super(props)
        this.state = {
            pokemons:null,
            error:false,
            loading:true
        }
    }
    getPokemons(){
        fetch(`https://pokeapi.co/api/v2/pokemon/`)
        .then(response => response.json())
        .catch(error => 
            this.setState({
                error: true
            })
            
        )
        .then(response => 
            this.setState({
                pokemons : response.results
            })
        //  console.log(response)
            
        ).finally(() => this.loading = false);
    }

    componentDidMount(){
       this.getPokemons()

    }
    
    render(){   
     
        const {pokemons} = this.state;
        console.log('Success:',pokemons)
        return(
            <>

                <PokeList pokemons={pokemons}/>
            </>
        )
    }
}

export default PokeLayout;