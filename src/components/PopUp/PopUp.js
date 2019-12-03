/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';

const PopUp = (props) => {
	const { species_name, prevSpecies_name, min_evo } = props;
	return (
		<article className="popup">
			<img
				src={`https://img.pokemondb.net/artwork/${species_name}.jpg`}
				className="pokemon"
				alt=""
			/>
			<div className="popup-container">
				<h3 className="title">
					<b>{species_name}</b>
				</h3>
				<div className="popup-items">
					<p>
						<b>
              Prev Evolution
							<br />
							{prevSpecies_name}
						</b>
					</p>
					<img
						src={`https://img.pokemondb.net/artwork/${prevSpecies_name}.jpg`}
						className="prev-pokemon"
						alt=""
					/>
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
	);
};
PopUp.propTypes = {
	species_name: PropTypes.string.isRequired,
	prevSpecies_name: PropTypes.string.isRequired,
	min_evo: PropTypes.number.isRequired,
};
export default PopUp;
