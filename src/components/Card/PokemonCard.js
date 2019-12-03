/* eslint-disable react/forbid-prop-types */
/* eslint-disable no-shadow */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { fecthPokemon, fecthSpecies } from '../../redux/actions';
import ProgressBar from '../ProgressBar/ProgressBar';

class PokeCard extends Component {
	componentDidMount() {
		const { fecthPokemon, fecthSpecies, name } = this.props;
		fecthPokemon(name);
		fecthSpecies(name);
	}

	render() {
		const {
			details, name, id, chain,
		} = this.props;
		if (!details[name]) return null;
		if (!chain[name]) return null;
		const type = details[name].types
			? details[name].types.map((tp) => tp.type.name)
			: ['default'];
		const idChain = chain[name].evolution_chain.url.split('/')[
			chain[name].evolution_chain.url.split('/').length - 2
		];
		return (
			<div className="card" key={id}>
				<div className="card__header">
					<div className={`avatar type--${type[0]}`}>
						<img
							src={details[name].sprites.front_default}
							className="card__image"
							alt=""
						/>
					</div>
				</div>
				<article className="card__container">
					<div className="card__description">
						<h3>{details[name].name}</h3>
						<div>
							{details[name].types ? (
								details[name].types.map((tp) => (
									<span className={`badge--${tp.type.name}`}>
										{tp.type.name}
									</span>
								))
							) : (
								<span>Loading</span>
							)}
						</div>
					</div>
					<div className="card__stats">
						{details[name].stats.map((stat) => (
							<ProgressBar
								text={stat.stat.name}
								percentage={stat.base_stat}
							/>
						))}
					</div>

					<span>{}</span>
				</article>
				<div className="card__details">
					<NavLink
						to={{ pathname: '/details/', state: { idChain, name } }}
						className="button--primary"
					>
						View Details
					</NavLink>
				</div>
			</div>
		);
	}
}
PokeCard.propTypes = {
	fecthPokemon: PropTypes.func.isRequired,
	fecthSpecies: PropTypes.func.isRequired,
	name: PropTypes.string.isRequired,
	id: PropTypes.number.isRequired,
	chain: PropTypes.array.isRequired,
	details: PropTypes.array.isRequired,
};
const mapStateToProps = (state) => ({
	loading: state.selectPokemonReducer.loading,
	details: state.selectPokemonReducer.details,
	chain: state.selectPokemonReducer.chain,
});
const mapDispatchToProps = {
	fecthPokemon,
	fecthSpecies,
};
export default connect(mapStateToProps, mapDispatchToProps)(PokeCard);
