import React from 'react';
import Pokeball from '../SVG/pokeballs.svg';

const NavbarContainer = () => (
  <nav className="navbar">
    <span>Pokedex</span>
    <div>
      <img src={Pokeball} alt="" />
    </div>
  </nav>
);

export default NavbarContainer;
