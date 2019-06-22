import React,{Component} from 'react';
import {connect} from 'react-redux';
import {fecthPokemon} from '../../redux/actions'
class PokeCard extends Component{
    constructor(props){
        super(props)
        this.state={
            stats:{
               
            }
        }
        this.props.fecthPokemon(this.props.name)
    }
    getStatsPokemon(){
        console.log("Get stats pokemon")
        
    }
    componentDidMount(){
   
    }
    renderPokemon(){
        const {pokemon} = this.props
        return (
            <>
            <div className="card__header">
                    {/* <div className={`avatar type--${type[0]}`}>
                        <img src={stats.avatar} className="card__image" alt=""/>
                    </div> */}
                    
                    <h3>{pokemon.name}</h3>
                </div>
            <article className="card__container">
                {/* {
                    stats.types ? (
                        stats.types.map(type=>(
                           <span className={`badge--${type.type.name}`}>{type.type.name}</span>
                          
                        )) ):( <span>Loading</span>)
                   
                    
                } */}
                
                <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi beatae nostrum eos 
                asperiores magnam ut fugit. Modi dicta mollitia blanditiis doloremque sint adipisci aut et, sed est voluptate necessitatibus laudantium?</p>
            </article>
            </>
        )
    }

    render(){
     
      
        const {details,name} = this.props
        const {stats} = this.state
        if(!details) return null
        if(!details[name]) return null
        console.log("poke",details)
        const type = details[name].types ? 
            details[name].types.map(type=>{
                // console.log(type)
               return type.type.name
            }
              
            ):['default']
        // const type = stats.types[0] || 'default';
        // console.log('badge',stats.avatar)
        
        return(
            <div className="card" >
                <div className="card__header">
                    <div className={`avatar type--${type[0]}`}>
                        <img src={details[name].sprites.front_default} className="card__image" alt=""/>
                    </div>
                    
                    <h3>{details[name].name}</h3>
                    <p>Weight : {details[name].weight}</p>
                </div>
        </div>
        )
    }
}
const mapStateToProps =(state)=>{
	return {
        details: state.selectPokemonReducer.details,
    
	};
}
const mapDispatchToProps ={
	fecthPokemon
}
export default connect(
    mapStateToProps, 
    mapDispatchToProps
    )(PokeCard);