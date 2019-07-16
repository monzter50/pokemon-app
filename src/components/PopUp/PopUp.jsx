import React from 'react';
const PopUp = ({id,species_name,prevID,prevSpecies_name,min_evo})=>{
    return(
        <article className="popup">
                <img src={`https://img.pokemondb.net/artwork/${species_name}.jpg`} className="pokemon" alt=""/>
            <div className="popup-container">
                <h3 className="title"><b>{species_name}</b></h3>
                <div className="popup-items">
                    <p><b>Prev Evolution<br/>{prevSpecies_name}</b></p>
                    <img src={`https://img.pokemondb.net/artwork/${prevSpecies_name}.jpg`}className="prev-pokemon"  alt=""/>
                </div>
                <div className="popup-evolution">
                    <h3 className="title">Evolution</h3>
                    <article className="table-evolution">
                        <p className="items">Level up</p>
                        <p>Min level</p>
                        <p>{min_evo}</p>
                    </article>
                </div>
            </div>
    </article>
    )
}
export default PopUp;