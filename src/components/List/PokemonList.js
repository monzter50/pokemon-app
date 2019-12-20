/* eslint-disable react/sort-comp */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import PokeCard from '../Card/PokemonCard';
import { fecthPokemons } from '../../redux/actions';
import AutoComplete from '../AutoComplete/AutoComplete';
import searchingFor from '../../helpers/searchTerms';
import ListField from '../ListField/ListField';

class PokemonList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemonList: [],
      text: '',
      active: false,
      isOpen: false,
    };
    this.onTextChange = this.onTextChange.bind(this);
    this.onTextSelect = this.onTextSelect.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  onTextSelect(text) {
    const { pokemons } = this.props;
    const newPokemonList = pokemons.filter(searchingFor(text)).map((pokemon) => pokemon);
    this.setState({
      text,
      pokemonList: newPokemonList,
    });
  }

  onTextChange(text) {
    const { pokemons } = this.props;
    const newPokemonList = pokemons.filter(searchingFor(text)).map((pokemon) => pokemon);
    this.setState({
      text,
      pokemonList: newPokemonList,
    });
  }

  renderPokemons() {
    const { pokemonList } = this.state;
    const { loading, pokemons } = this.props;

    if (!pokemonList) return null;
    if (pokemonList.length !== 0) {
      return !loading ? (
        pokemonList.map((pokemon, index) => (
          <PokeCard name={pokemon.name} id={index} key={pokemon.name} />
        ))
      ) : (
        <div>Loading...</div>
      );
    }
    return !loading ? (
      pokemons.map((pokemon, index) => (
        <PokeCard name={pokemon.name} id={index} key={pokemon.name} />
      ))
    ) : (
      <div>Loading...</div>
    );
  }

  handleClick() {
    this.setState((prevState) => ({ active: !prevState.active }));
  }

  handleOpen = (isOpen) => {
    this.setState({ isOpen });
  }

  render() {
    const { pokemons } = this.props;
    const {
      pokemonList, text, active, isOpen,
    } = this.state;
    if (!pokemons) return null;

    return (
      <div className="layout-body">
        <div className="container">
          <div className="group-search">
            <AutoComplete
              pokemonList={pokemonList}
              onTextChange={this.onTextChange}
              handleOpen={this.handleOpen}
              text={text}
              isOpen={isOpen}
            >
              <ListField list={pokemonList} isOpen={isOpen} onTextSelect={this.onTextSelect} />
            </AutoComplete>
            <div className="list-info">
              <div
                className={`list-bars ${!active ? 'active' : ''}`}
                onClick={this.handleClick}
                onKeyUp={this.handleClick}
                role="button"
                tabIndex="0"
              >
                <span />
                <span />
                <span />
                <span />
              </div>
              <div
                className={`th-bars${active ? ' active' : ''}`}
                onClick={this.handleClick}
                onKeyDown={this.handleClick}
                role="button"
                tabIndex="0"
              >
                <span />
                <span />
                <span />
                <span />
              </div>
            </div>
          </div>
          <div className={active ? 'cards' : 'list'}>
            {this.renderPokemons()}
          </div>
        </div>
      </div>
    );
  }
}
PokemonList.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  pokemons: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
};
const mapStateToProps = (state) => ({
  loading: state.pokemonsReducers.loading,
  pokemons: state.pokemonsReducers.pokemons,
});

const mapDispatchToProps = {
  fecthPokemons,
};

export default connect(mapStateToProps, mapDispatchToProps)(PokemonList);
