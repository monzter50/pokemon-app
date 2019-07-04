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
        this.onTextSelect = this.onTextSelect.bind(this);
    }
    onTextSelect(text){
        
        this.setState({text})
    }
    onTextChange(text){
        const {pokemons} = this.props
        let pokemonList = []
        this.setState({text})
        if(text.length > 0 ){
            pokemonList = pokemons.filter(searchingFor(text))
            this.setState({
                pokemonList,

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
                <div className="ui-autocomplete-link" onClick={() => {
                        this.onTextSelect(pokemon.name)
                        this.setState({ isOpen: false });
                    }}>
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
                onChange={(event)=>{
                    const newText = event.target.value
                    this.onTextChange(newText)
                    if (!isOpen && newText) {
                        this.setState({ isOpen: true });
                    } else if (isOpen && !newText) {
                        this.setState({ isOpen: false });
                    }
                }}
               
                // onBlur={()=>{
                //     setTimeout(() => this.setState({ isOpen: false,pokemonList:pokemons }), 100);
                //     console.log("blur")
                // }}
                onFocus={() => {
                    if (!text) {
                        this.setState({ isOpen: true,pokemonList:pokemons });
                        console.log("focus")
                    }
                    console.log("text",text)
                }}
                type="text"
                data-icon="search" 
                placeholder="Search"
                value={text}
                />   
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