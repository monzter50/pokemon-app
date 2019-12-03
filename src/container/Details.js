/* eslint-disable no-shadow */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { fecthSpecies, fecthPokemon, fecthEvolution } from '../redux/actions';
import trainer from '../components/SVG/trainer';
import Percentage from '../components/Percentage/Percentage';
import EvolutionList from '../components/Evolution-List/EvolutionList';

class Details extends Component {
	constructor(props) {
		super(props);
		this.state = {
			url: 'https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/',
		};
	}

	componentDidMount() {
		const { location, fecthPokemon, fecthEvolution } = this.props;
		fecthPokemon(location.state.name);
		fecthEvolution(location.state.id_Chain);
	}

	render() {
		const { details, location } = this.props;
		const { url } = this.state;
		const { name } = location.state;
		if (!details[name]) return null;
		const type = details[name].types
			? details[name].types.map((tp) => tp.type.name)
			: ['default'];
		return (
			<>
				<div className={`banner type--${type[0]}`}>
					<NavLink
						to={{ pathname: '/' }}
						className="banner-self-left text-white"
					>
            Back
					</NavLink>
					<div className="avatar-primary">
						<img
							src={`https://img.pokemondb.net/artwork/${location.state.name}.jpg`}
							alt=""
						/>
					</div>
					<h1 className="">{name}</h1>
				</div>
				<div className="container">
					<div>
						<div className="card__stats">
							{details[name].stats.map((stat) => (
								<Percentage text={stat.stat.name} percentage={stat.base_stat} />
							))}
						</div>
					</div>
					<div className="evolution">
						<h2>Evolution Chain</h2>
						<EvolutionList />
					</div>
					<div className="measurements">
						<h2>Measurements</h2>
						<div className="measurements-container">
							<div className="measurements-teams">
								<img
									src={`${url}${details[name].id}.png?raw=true`}
									alt=""
									className="measure-pokemon"
								/>
								<img src={trainer} alt="" className="measure-trainer" />
							</div>
							<article className="measurements-details">
								<div className="">
									<h3>Weight</h3>
									<h4 className="measure">
										{details[name].weight}
                    kg
									</h4>
								</div>
								<div>
									<h3>Height</h3>
									<h4 className="measure">
										{details[name].height / 10}
m
									</h4>
									<small>
                    Note: Image depiction might be inaccurate (trainer has base
                    height of 1.5m)
									</small>
								</div>
							</article>
						</div>
					</div>
				</div>
			</>
		);
	}
}
Details.propTypes = {
	// eslint-disable-next-line react/forbid-prop-types
	details: PropTypes.array.isRequired,
	fecthPokemon: PropTypes.func.isRequired,
	fecthEvolution: PropTypes.func.isRequired,
	location: PropTypes.string.isRequired,
};
const mapStateToProps = (state) => ({
	chain: state.selectPokemonReducer.chain,
	details: state.selectPokemonReducer.details,
});
const mapDispatchToProps = {
	fecthSpecies,
	fecthPokemon,
	fecthEvolution,
};
export default connect(mapStateToProps, mapDispatchToProps)(Details);
