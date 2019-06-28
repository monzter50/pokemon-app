import React,{Component} from 'react';
import {connect} from 'react-redux';
import {fecthPokemon,fecthChain,fecthEvolution} from '../../redux/actions'
import EvolutionList from '../Evolution-List/Evolution-List';
class PokeCard extends Component{
    constructor(props){
        super(props)

        this.props.fecthPokemon(this.props.name)
        console.log("pase pokemon",this.props.name)
        // console.log("pase chain",this.props.name)

    }

    componentDidMount(){
        this.props.fecthChain(this.props.name)
    }

    render(){
        // console.log(this.props.chain)
     
      
        const {details,name,id,chain} = this.props
        if(!details[name]) return null
        const type = details[name].types ? 
            details[name].types.map(type=>{
               return type.type.name
            }  
            ):['default']
            
        return(
            <div className="card" key={id}>
                    <div className="card__header">
                        <div className={`avatar type--${type[0]}`}>
                            <img src={details[name].sprites.front_default} className="card__image" alt=""/>
                        </div>

                        <h3>{details[name].name}</h3>
                        <p>Weight : {details[name].weight}</p>
                    </div> 
                    <article className="card__container">
                    {
                        details[name].types ? (
                            details[name].types.map(type=>(
                        <span className={`badge--${type.type.name}`}>{type.type.name}</span>

                    )) ):( <span>Loading</span>)


                    } 

                     
                    </article>
                    <div className="card__details">
                        <button href="" className="button--primary">View Details</button>
                        <button href="" className="button--info">View Evolution</button>
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
    fecthChain,
}
export default connect(
    mapStateToProps, 
    mapDispatchToProps
    )(PokeCard);