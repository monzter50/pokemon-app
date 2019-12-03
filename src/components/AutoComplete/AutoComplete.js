/* eslint-disable react/forbid-prop-types */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { findPokemon } from '../../redux/actions';

class SearchList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
  }

  renderPokemons() {
    const { pokemonList, onTextSelect } = this.props;
    if (!pokemonList) return null;
    if (pokemonList.length !== 0) {
      return pokemonList.map((pokemon, index) => (index < 10 ? (
        <div
          className="ui-autocomplete-link"
          onClick={() => {
            onTextSelect(pokemon.name);
            this.setState({ isOpen: false });
          }}
          onKeyPress={onTextSelect(pokemon.name)}
          role="searchbox"
          tabIndex="0"
        >
          <span>{pokemon.name}</span>
        </div>
      ) : null));
    }
    return (
      <div className="ui-autocomplete-link">
        <span>Not Founds</span>
      </div>
    );
  }

  render() {
    const { text, onTextChange } = this.props;
    const { isOpen } = this.state;

    return (
      <div className={`ui-autocomplete ${isOpen ? 'key-on' : ''}`}>
        <input
          className="input"
          onChange={(event) => {
            const newText = event.target.value;
            onTextChange(newText);
            if (!isOpen && newText) {
              this.setState({ isOpen: true });
            } else if (isOpen && !newText) {
              this.setState({ isOpen: false });
            }
          }}
          onBlur={() => {
            setTimeout(() => this.setState({ isOpen: false }), 300);
          }}
          onFocus={() => {
            if (text) {
              this.setState({ isOpen: true });
            }
          }}
          type="text"
          data-icon="search"
          placeholder="Search"
          value={text}
        />
        {isOpen && (
          <div className="ui-list">{this.renderPokemons()}</div>
        )}
      </div>
    );
  }
}
SearchList.propTypes = {
  onTextChange: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  pokemonList: PropTypes.array.isRequired,
  onTextSelect: PropTypes.func.isRequired,
};
const mapStateToProps = () => ({});
const mapDispatchToProps = {
  findPokemon,
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchList);
