import React, { Component } from "react";
import getEvolutions from "../../helpers/getEvolutions";
import PopUp from "../PopUp/PopUp";
export class EvolutionList extends Component {
  render() {
    const { evolution } = this.props;
    let evoChain = getEvolutions(evolution.chain);
    return (
      <div className="evolution-list">
        {evoChain.map((evoDetails, index) => (
          <div className="evolution-items">
            <img
              src={`https://img.pokemondb.net/artwork/${evoDetails.species_name}.jpg`}
              alt=""
            />
            <h3>{evoDetails.species_name}</h3>
            {index > 0 ? (
              <PopUp
                id={evoDetails.id}
                species_name={evoDetails.species_name}
                prevSpecies_name={evoChain[index - 1].species_name}
                prevID={evoChain[index - 1].id}
                min_evo={evoDetails.min_level}
              />
            ) : null}
          </div>
        ))}
      </div>
    );
  }
}
