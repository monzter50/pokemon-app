import React,{Component} from 'react';
import {connect} from 'react-redux';
import {fecthEvolution} from '../../redux/actions';
import {getEvolutions} from '../../helpers/getEvolutions'
class EvolutionList extends Component{
    constructor(props){
        super(props)
        this.state ={
            id_Chain:null
        }
    }
     componentDidMount(){
     

     }
     componentDidUpdate(){
        const {urlChain,fecthEvolution}= this.props
    
        
        //  fecthEvolution(urlChain.url.split("/")[urlChain.url.split('/').length - 2])
     }
    render(){
       
        const {evolution,details,match} = this.props 
    
            let evoChain =   getEvolutions(evolution.chain)
        return(
            <div>
                {
                    evoChain.map(evoDetails =>(
                    
                        <img src={`https://img.pokemondb.net/artwork/${evoDetails.species_name}.jpg`} alt=""/>
                    ))
                } 
            </div>
        )
    }
}

const mapStateToProps =(state)=>{
	return {
        evolution: state.selectPokemonReducer.evolution,
	};
}

export default connect(
    mapStateToProps
    )(EvolutionList);