import React,{Component} from 'react';
import {connect} from 'react-redux';
import {fecthSpecies,fecthPokemon,fecthEvolution} from '../redux/actions';
import {getEvolutions} from '../helpers/getEvolutions'
import {trainer} from '../components/SVG/trainer'
import ProgressBar from '../components/ProgressBar/ProgressBar';
class Details extends Component{
    constructor(props){
        super();
        this.state={
            url:"https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/"
        }
    }
    componentDidMount(){
        const {location,match,fecthPokemon,fecthEvolution}= this.props
        console.log(location.state.name)
        fecthPokemon(location.state.name)
        fecthEvolution(location.state.id_Chain)
        console.log("Location",location.state)
    }
    render(){
        const {evolution,details,location} = this.props 
        const {url} = this.state
        const name = location.state.name
        if(!details[name]) return null
            let evoChain =   getEvolutions(evolution.chain)
            console.log( "Get Evolution",details[name])
        return(
            // https://img.pokemondb.net/artwork/rattata.jpg
            <div>
                 <div className="card__header">
                        <div className={`avatar`}>
                            <img src={details[location.state.name].sprites.front_default} className="card__image" alt=""/>
                        </div>

                        <div className="card__stats">
                            {
                                details[name].stats.map(stat=>(
                                        <ProgressBar text={stat.stat.name} percentage={stat.base_stat}/>
                                    ))   
                            }
                        </div>
                    </div> 
                    <div>
                        <h2>Evolution Chain</h2>
                        <div>
                           {
                                evoChain.map(evoDetails =>(
                                    <img src={`https://img.pokemondb.net/artwork/${evoDetails.species_name}.jpg`} alt=""/>
                                ))

                                
                            } 
                        </div>
                    </div>
                    <div>
                        <h2>Measurements</h2>
                        <div>
                            <div>
                                <img src={`${url}${details[name].id}.png?raw=true`} alt=""/>
                                <img src={trainer} alt=""/>
                            </div>
                        </div>
                    </div>
            </div>
        )
    }
}
const mapStateToProps =(state)=>{
	return {
        chain: state.selectPokemonReducer.chain,
        details: state.selectPokemonReducer.details,
        evolution:state.selectPokemonReducer.evolution
    
	};
}
const mapDispatchToProps ={
    fecthSpecies,
    fecthPokemon,
    fecthEvolution
}
export default connect(
    mapStateToProps, 
    mapDispatchToProps
    )(Details);