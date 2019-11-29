import React, { Component } from "react";
import PokeCard from "../Card/PokemonCard";
import { connect } from "react-redux";
import { fecthPokemons } from "../../redux/actions";
import {} from "../../helpers/searchTerms";
import AutoComplete from "../AutoComplete/AutoComplete";

class PokemonList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemonList: [],
      text: "",
      active: false
    };
    this.onTextChange = this.onTextChange.bind(this);
    this.onTextSelect = this.onTextSelect.bind(this);
  }
  onTextSelect(text) {
    const { pokemons } = this.props;
    let pokemonList = [];
    this.setState({ text });
    if (text.length > 0) {
      pokemonList = pokemons.filter(text);
      this.setState({
        pokemonList
      });
    } else {
      pokemonList = pokemons;
      this.setState({
        pokemonList
      });
    }
  }

  onTextChange(text) {
    const { pokemons } = this.props;
    let pokemonList = [];
    this.setState({ text });
    if (text.length > 0) {
      pokemonList = pokemons.filter(text);
      this.setState({
        pokemonList
      });
    } else {
      pokemonList = pokemons;
      this.setState({
        pokemonList
      });
    }
  }
  renderPokemons() {
    const { pokemonList } = this.state;
    const { loading, pokemons } = this.props;

    if (!pokemonList) return null;
    if (pokemonList.length !== 0) {
      return !loading ? (
        pokemonList.map((pokemon, index) => (
          <PokeCard name={pokemon.name} id={index} key={index} />
        ))
      ) : (
        <div>Loading...</div>
      );
    }
    return !loading ? (
      pokemons.map((pokemon, index) => (
        <PokeCard name={pokemon.name} id={index} key={index} />
      ))
    ) : (
      <div>Loading...</div>
    );
  }
  render() {
    const { pokemons } = this.props;
    let { pokemonList, text, active } = this.state;
    if (!pokemons) return null;

    console.log(pokemons);
    return (
      <div className="layout-body">
        <div className="container">
          <div className="group-search">
            <AutoComplete
              pokemonList={pokemonList}
              onTextChange={this.onTextChange}
              onTextSelect={this.onTextSelect}
              text={text}
            />
            <div className="list-info">
              <div
                className={"list-bars " + (!active ? "active" : "")}
                onClick={() =>
                  this.setState(prevState => ({ active: !prevState.active }))
                }
              >
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </div>
              <div
                className={"th-bars" + (active ? " active" : "")}
                onClick={() =>
                  this.setState(prevState => ({ active: !prevState.active }))
                }
              >
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </div>
          <div className={active ? "cards" : "list"}>
            {this.renderPokemons()}
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  loading: state.pokemonsReducers.loading,
  pokemons: state.pokemonsReducers.pokemons
});

const mapDispatchToProps = {
  fecthPokemons
};

export default connect(mapStateToProps, mapDispatchToProps)(PokemonList);
