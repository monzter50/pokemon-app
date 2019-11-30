/* eslint-disable no-shadow */
import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import PokeList from "../components/List/PokemonList";
import { fecthPokemons } from "../redux/actions";

class PokeLayout extends Component {
  componentDidMount() {
    const { fecthPokemons } = this.props;
    fecthPokemons();
  }

  render() {
    return (
      <>
        <PokeList />
        <footer className="layout-footer">
          <article className="footer-description container">
            <p>Monster Codes</p>
            <div>
              <a href="https://github.com/monzter50">My github</a>
            </div>
          </article>
        </footer>
      </>
    );
  }
}
PokeLayout.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  fecthPokemons: PropTypes.func.isRequired
};
const mapStateToProps = state => ({
  pokemons: state.pokemons
});

const mapDispatchToProps = {
  fecthPokemons
};

export default connect(mapStateToProps, mapDispatchToProps)(PokeLayout);
