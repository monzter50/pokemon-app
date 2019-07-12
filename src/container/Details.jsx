import React,{Component} from 'react';
import {connect} from 'react-redux';
import {fecthChain,fecthPokemon,fecthEvolution} from '../redux/actions';
import ProgressBar from '../components/ProgressBar/ProgressBar';
class Details extends Component{
    constructor(props){
        super();
        this.state={
            url:"https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/"
        }
    }
    componentDidMount(){
        const {location,match,fecthChain,fecthPokemon,fecthEvolution}= this.props
        console.log(match.params.id)
        fecthChain(match.params.id)
        fecthPokemon(match.params.id)
        fecthEvolution(location.state.id)
        console.log("Location",location)
    }
    render(){
        const {evolution,details,match} = this.props 
        const {url} = this.state
        const name = match.params.id
        if(!details[name]) return null
        if(!evolution.chain) return null
        console.log(evolution)
            let evoChain = [];
            let evoData = evolution.chain;

            do {
            var evoDetails = evoData['evolution_details'][0];
            const id = evoData.species.url.split("/")   
            evoChain.push({
                "species_name": evoData.species.name,
                "min_level": !evoDetails ? 1 : evoDetails.min_level,
                "trigger_name": !evoDetails ? null : evoDetails.trigger.name,
                "item": !evoDetails ? null : evoDetails.item,
                "url":`${url}${id[6]}.png?raw=true`
            });

            evoData = evoData['evolves_to'][0];
            } while (!!evoData && evoData.hasOwnProperty('evolves_to'));
            console.log(evoChain)
        return(
            <div>
                 <div className="card__header">
                        <div className={`avatar`}>
                            <img src={details[match.params.id].sprites.front_default} className="card__image" alt=""/>
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
                                    <div className={`avatar`}>
                                        <img src={evoDetails.url} className="card__image" alt=""/>
                                    </div>
                                ))

                                
                            }
                            
                          
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
    fecthChain,
    fecthPokemon,
    fecthEvolution
}
export default connect(
    mapStateToProps, 
    mapDispatchToProps
    )(Details);