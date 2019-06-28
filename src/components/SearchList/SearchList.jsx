import React,{Component} from 'react'
import search from '../SVG/search.svg'
function searchingFor(text){
    return function(x,i){
        console.log(x.name)
        return x.name.toLowerCase().includes(text.toLowerCase()) || !text;
    }
}
class SearchList extends Component {
    constructor(props){
        super(props)
        this.state ={
            isOpen : false
        }
    }
    render(){
        const {onChange,pokemons,text} = this.props
        const {isOpen} = this.state
        return(
            <div className="group-search">
                <label htmlFor="" ><img src={search} height="20px" alt=""/></label>
                <input className="input" 
                onChange={onChange}
                onBlur={()=>{
                    setTimeout(() => this.setState({ isOpen: false }), 100);
                    console.log("blur")
                }}
                onFocus={() => {
                    if (!text) {
                        this.setState({ isOpen: true });
                        console.log("focus")
                    }
                    console.log("text",text)
                }}
                type="text" 
                placeholder="Search"/>   
                {isOpen &&
                    <div>
                        <div>
                            {
                                pokemons.filter(searchingFor(text)).map((pokemon,index)=>(
                                    index < 10 ?
                                    <div>
                                        <span>{pokemon.name}</span>
                                    </div>
                                    :null
                                ))
                            }
                        </div>
                    </div>
                }   
                
            </div>
        )
    }
   
}
export default SearchList;