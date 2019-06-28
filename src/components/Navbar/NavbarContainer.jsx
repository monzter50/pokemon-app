import React,{Component} from 'react';
import Pokeball from '../SVG/pokeballs.svg'
class NavbarContainer extends Component{
    render(){
        return(
            <nav className="navbar">
                <a href="">Pokedex</a>
                <div>
                    <a href=""><img src={Pokeball} alt=""/></a>
                    
                </div>
            </nav>
        )
    }
}

export default NavbarContainer;