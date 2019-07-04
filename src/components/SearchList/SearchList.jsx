import React,{Component} from 'react'
import {connect} from 'react-redux';
import {findPokemon} from '../../redux/actions';
function searchingFor(text){
    return function(x,i){
        console.log("X",x.name)
        return x.name.toLowerCase().includes(text.toLowerCase()) || !text;
    }
}
class SearchList extends Component {
    constructor(props){
        super(props)
        this.state ={
            pokemonList:[],
            text:'',
            isOpen : false
        }
        this.onTextChange = this.onTextChange.bind(this);
    }
    onTextChange(event){
        const {pokemons} = this.props
        const value = event.target.value
        let pokemonList = []
        if(value.length > 0 ){
            pokemonList = pokemons.filter(searchingFor(value))
            this.setState({
                pokemonList
            })
        }else{
            let pokemonList =pokemons
            this.setState({
                pokemonList
            })
        }
       
        findPokemon("mundo")
        console.log(pokemons)
   }
   renderPokemons(){
    const {pokemonList} = this.state
    if(!pokemonList) return null
    
    if(pokemonList.length  !== 0){
        return(
            pokemonList.map((pokemon,index)=>(
                index < 10   ? 
                <div className="ui-autocomplete-link">
                    <span>{pokemon.name}</span>
                </div>
                :
                null
            ))
        );
    } else{
        return(
            <div>
                <span>Not Founds</span>
            </div>
        )
    }

   }
    render(){
        const {pokemons} = this.props
        const {isOpen,text,pokemonList} = this.state
        if(!pokemonList) return null
        console.log(pokemonList)
        
      
        return(
            <div className={"ui-autocomplete "+(isOpen?'key-on':'')}>
                <input className={'input'} 
                onChange={this.onTextChange}
                onBlur={()=>{
                    setTimeout(() => this.setState({ isOpen: false,pokemonList:pokemons }), 100);
                    console.log("blur")
                }}
                onFocus={() => {
                   
                        this.setState({ isOpen: true,pokemonList:pokemons });
                        console.log("focus")
                   
                    console.log("text",text)
                }}
                type="text"
                data-icon="search" 
                placeholder="Search"/>   
                {isOpen &&
                    <div className="ui-list">
                            {
                               this.renderPokemons()
                            }
                    </div>
                }   
                
            </div>
        )
    }
   
}
const mapStateToProps =state=>({

})

const mapDispatchToProps ={
    findPokemon
}

export default connect(
    mapStateToProps, 
    mapDispatchToProps
    ) (SearchList);