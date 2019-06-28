import React,{Component} from 'react';
import {connect} from 'react-redux';
import {fecthEvolution} from '../../redux/actions';
// import EvolutionList from '../Evolution-List/EvolutionList';
class EvolutionList extends Component{
    constructor(props){
        super(props)
        const {fecthEvolution,name,chain} = this.props
        
        // fecthEvolution(chain[name])
      
    }
     componentDidMount(){
        const {name,chain} = this.props
        // console.log("render chain2",this.props.chain)
        // console.log("component chain",chain[name])
        // console.log("component",name)
     }
 
    render(){
        // console.log("render chain",this.props.chain[this.props.name])
       
        return(
            <div className="avatar-list">
               
               <div className={`avatar`}>
                        {/* <span>{this.props.chain}</span> */}
                    </div>
            
                
            </div>
        )
    }
}

const mapStateToProps =(state)=>{
	return {
        evolution: state.selectPokemonReducer.evolution,
        chain: state.selectPokemonReducer.chain,
    
	};
}
const mapDispatchToProps ={
    fecthEvolution
}
export default connect(
    mapStateToProps, 
    mapDispatchToProps
    )(EvolutionList);