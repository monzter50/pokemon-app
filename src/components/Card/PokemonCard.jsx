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
    }
    getStatsPokemon(){
        console.log("Get stats pokemon")
        
    }
    componentDidMount(){
        console.log("component Did Mount")
        const {name,fecthPokemon} = this.props
        fecthPokemon(name)
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
     
      
        const {pokemon} = this.props
        const {stats} = this.state
        if(!pokemon) return null
        console.log("poke",pokemon.name)
        const type = stats.types ? 
            stats.types.map(type=>{
                // console.log(type)
            //    return type.type.name
            }
              
            ):['default']
        // const type = stats.types[0] || 'default';
        // console.log('badge',stats.avatar)
        
        return(
            <div className="card" >
                <div className="card__header">
                    {/* <div className={`avatar type--${type[0]}`}>
                        <img src={stats.avatar} className="card__image" alt=""/>
                    </div> */}
                    
                    <h3>{pokemon.name}</h3>
                </div>
        </div>
        )
    }
}
const mapStateToProps =(state)=>{
	return {
        pokemon: state.selectPokemonReducer.stats,
    
	};
}
const mapDispatchToProps ={
	fecthPokemon
}
export default connect(
    mapStateToProps, 
    mapDispatchToProps
    )(PokeCard);