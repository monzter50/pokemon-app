import React,{Component} from 'react';
// import EvolutionList from '../Evolution-List/EvolutionList';
class EvolutionList extends Component{
    constructor(props){
        super(props)
      
    }
   getArray(){
      
   }
    render(){
        const {pokemons} = this.props 
        console.log(pokemons)
       
        return(
            <div className="avatar-list">
               
               <div className={`avatar`}>
                        <img src={this.state.imgUrl} className="card__image" alt=""/>
                    </div>
            
                
            </div>
        )
    }
}
export default EvolutionList;