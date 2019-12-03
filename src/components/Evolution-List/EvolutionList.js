/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import getEvolutions from '../../helpers/getEvolutions';
import PopUp from '../PopUp/PopUp';

const EvolutionList = (props) => {
	const { evolution } = props;
	const evoChain = getEvolutions(evolution.chain);
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
};
EvolutionList.propTypes = {
	evolution: PropTypes.any.isRequired,
};
function mapStateToProps(state) {
	return { evolution: state.selectPokemonReducer.evolution };
}

export default connect(mapStateToProps)(EvolutionList);
