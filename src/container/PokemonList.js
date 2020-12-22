/* eslint-disable no-shadow */
/* eslint-disable react/sort-comp */
import React, { useState } from 'react';
import ListCards from '../components/ListCards';

function PokemonList() {
  const [active] = useState(false);

  return (
    <div className="layout-body">
      <div className="container">
        <div className="group-search" />
        <ListCards active={active} />
      </div>
    </div>

  );
}


export default PokemonList;
