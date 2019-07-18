import React,{Component} from 'react';
import {connect} from 'react-redux';
import {fecthPokemon,fecthSpecies,fecthEvolution} from '../../redux/actions'
import ProgressBar from '../ProgressBar/ProgressBar';
import { NavLink  } from "react-router-dom";
class PokeCard extends Component{
    constructor(props){
        super(props)

        const {fecthPokemon,fecthSpecies,name} = this.props
        fecthPokemon(name)
        fecthSpecies(name)
    }

    componentDidMount(){
    }

    render(){
     
        const {details,name,id,chain} = this.props
        if(!details[name]) return null
        if(!chain[name]) return null
        const type = details[name].types ? 
            details[name].types.map(type=>{
               return type.type.name
            }  
            ):['default']
            const id_Chain = chain[name].evolution_chain.url.split("/")[chain[name].evolution_chain.url.split('/').length - 2]
        return(
            <div className="card" key={id}>
                    <div className="card__header">
                        <div className={`avatar type--${type[0]}`}>
                            <img src={details[name].sprites.front_default} className="card__image" alt=""/>
                        </div>

                      
                    </div> 
                    <article className="card__container">
                        <div className="card__description">
                            <h3>{details[name].name}</h3>
                            <div>
                                {
                                    details[name].types ? (
                                    details[name].types.map(type=>(
                                    <span className={`badge--${type.type.name}`}>{type.type.name}</span>

                                    )) ):( <span>Loading</span>)
                                } 
                            </div>
                           
                        </div>
                        <div className="card__stats">
                            {
                                details[name].stats.map(stat=>(
                                        <ProgressBar text={stat.stat.name} percentage={stat.base_stat}/>
                                    ))   
                            }
                        </div>
                       
                        
                        <span>{}</span>
                    </article>
                    <div className="card__details">
                        <NavLink  to={{ pathname: `/details/`,state:{id_Chain,name}}} className="button--primary">View Details</NavLink >
                    </div>
                   
            </div>
            
        )
    }
}
const mapStateToProps =(state)=>{
	return {
        loading:state.selectPokemonReducer.loading,
        details: state.selectPokemonReducer.details,
        chain: state.selectPokemonReducer.chain,
    
	};
}
const mapDispatchToProps ={
    fecthPokemon,
    fecthSpecies,
}
export default connect(
    mapStateToProps, 
    mapDispatchToProps
    )(PokeCard);