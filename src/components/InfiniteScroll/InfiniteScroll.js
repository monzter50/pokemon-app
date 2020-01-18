/* eslint-disable no-shadow */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-unused-prop-types */
/* eslint-disable no-undef */
/* eslint-disable no-underscore-dangle */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fecthPokemons } from '../../redux/actions';
import Card from '../Card';

class InfiniteScroll extends Component {
    _isMounted = false;

    constructor(props) {
      super(props);
      this.state = {
        // auxPokemons: [],
        prevTotal: 0,
        scrolling: false,
        loading: false,
      };
    }

    componentDidMount() {
      this._isMounted = true;
      this.scrollListener = window.addEventListener('scroll', (e) => this.handleScrolling(e));
    }

    componentWillUnmount() {
      this._isMounted = false;
    }

    handleScrolling = () => {
      const { scrolling } = this.state;
      if (scrolling) return;
      const lastUser = document.querySelector(
        'div.poke-cards > div.element:last-child',
      );
      if (!lastUser) return;
      const lastUserOffset = lastUser.offsetTop + lastUser.clientHeight;
      const pageOffset = window.pageYOffset + window.innerHeight;
      const bottomOffset = 20;
      if (pageOffset > lastUserOffset - bottomOffset) this.loadMore();
    };

  loadUsers = () => {
    const { prevTotal } = this.state;
    const { fecthPokemons } = this.props;
    this.setState({ loading: true });
    fecthPokemons(prevTotal);
  };

  loadMore = () => {
    this.setState(
      (prevState) => ({
        prevTotal: prevState.prevTotal + 20,
      }),
      this.loadUsers,
    );
  };

  render() {
    const { loading, prevTotal } = this.state;
    const { pokemons } = this.props;
    console.log(prevTotal, pokemons);
    return (
      <>
        <div className="poke-cards cards">

          {

            pokemons.map((pokemon) => (
              <Card name={pokemon.name} />
            ))

          }
        </div>
        {loading && (
          <div className="loading">
            ...loading
          </div>
        )}

      </>
    );
  }
}
InfiniteScroll.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  pokemons: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
  fecthPokemons: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
  loading: state.pokemonsReducers.loading,
  pokemons: state.pokemonsReducers.pokemons,
});

const mapDispatchToProps = {
  fecthPokemons,
};

export default connect(mapStateToProps, mapDispatchToProps)(InfiniteScroll);
