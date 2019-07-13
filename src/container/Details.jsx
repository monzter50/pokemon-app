import React,{Component} from 'react';
import {connect} from 'react-redux';
import {fecthChain,fecthPokemon,fecthEvolution} from '../redux/actions';
import {getEvolutions} from '../helpers/getEvolutions'
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
        // fecthEvolution(1)
        console.log("Location",location)
    }
    render(){
        const {evolution,details,match,chain,fecthEvolution} = this.props 
        const {url} = this.state
        const name = match.params.id
        if(!details[name]) return null
        // if(!evolution.chain) return null
        if(!chain[name]) return null
        const evolutionChain = chain[name].evolution_chain.url.split("/")
        console.log(evolutionChain[6])
        // fecthEvolution(1)
           

           
            // let evoChain =   getEvolutions(evolution.chain)
            // console.log( "Get Evolution",getEvolutions(evolution.chain))
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
                            {/* {
                                evoChain.map(evoDetails =>(
                                    <div className={`avatar`}>
                                        <img src={`${url}${evoDetails.id}.png?raw=true`} className="card__image" alt=""/>
                                    </div>
                                ))

                                
                            } */}
                            
                          
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