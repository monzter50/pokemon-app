import React,{Component} from 'react';

class Details extends Component{
    
    render(){
        return(
            <div>
                <div>
                    Detaoñs { this.props.match.params.name }
                </div>
            </div>
        )
    }
}

export default Details