import React,{Component} from 'react';

class PokeCard extends Component{
    constructor(props){
        super(props)
        this.state={
            url:'https://pokeapi.co/api/v2/pokemon/',
            imgUrl:'',
            stats:{
                types:null
            }
        }
    }
    getStatsPokemon(){
        fetch(`https://pokeapi.co/api/v2/pokemon/${this.props.name}/`)
        .then(response => response.json())
        .catch(error => 
            this.setState({
                error: true
            })
            
        )
        .then(response => 
          this.setState({
              stats:{
                  types:response.types || null

              }
          })
            
        ).finally(() => this.loading = false);
    }
    componentDidMount(){
        this.getStatsPokemon()
        const {id} = this.props
        console.log("types did",this.state.stats)
        const index = id +1;
        const imgUrl = `https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/${index}.png?raw=true`
       this.setState({
        imgUrl,
        
       })
    }

    render(){
        const {stats} = this.state
        console.log("types",stats.types)
        const type = stats.types ? 
            stats.types.map(type=>{
               return type.type.name
            }
              
            ):['default']
        // const type = stats.types[0] || 'default';
        console.log('badge',type[0])
        
        return(
            <div className="card">
                <div className="card__header">
                    <div className={`avatar type--${type[0]}`}>
                        <img src={this.state.imgUrl} className="card__image" alt=""/>
                    </div>
                    
                    <h3>{this.props.name}</h3>
                </div>
            <article className="card__container">
                {
                    stats.types ? (
                        stats.types.map(type=>(
                           <span className={`badge--${type.type.name}`}>{type.type.name}</span>
                          
                        )) ):( <span>Loading</span>)
                   
                    
                }
                
                <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi beatae nostrum eos 
                asperiores magnam ut fugit. Modi dicta mollitia blanditiis doloremque sint adipisci aut et, sed est voluptate necessitatibus laudantium?</p>
            </article>
        </div>
        )
    }
}

export default PokeCard;