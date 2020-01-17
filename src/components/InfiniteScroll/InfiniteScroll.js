/* eslint-disable react/prop-types */
/* eslint-disable react/no-unused-prop-types */
/* eslint-disable no-undef */
/* eslint-disable no-underscore-dangle */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card from '../Card';

class InfiniteScroll extends Component {
    _isMounted = false;

    constructor(props) {
      super(props);
      this.state = {
        pokemons: [],
        prevTotal: 0,
        scrolling: false,
        loading: false,
      };
    }

    componentDidMount() {
      this._isMounted = true;
      this.loadUsers();
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
      //   console.log(lastUser);

      if (!lastUser) return;
      const lastUserOffset = lastUser.offsetTop + lastUser.clientHeight;
      const pageOffset = window.pageYOffset + window.innerHeight;
      const bottomOffset = 20;
      if (pageOffset > lastUserOffset - bottomOffset) this.loadMore();
    };

  loadUsers = () => {
    const { prevTotal, pokemons } = this.state;
    this.setState({ loading: true });
    fetch(`${process.env.REACT_APP_BASE_API_URL}/pokemon/?offset=${prevTotal}`)
      .then((response) => response.json())
      .then((myJson) => this.setState({
        pokemons: [...pokemons, ...myJson.results],
      }))
      .finally(() => this.setState({ loading: false }));
  };

  loadMore = () => {
    this.setState(
      (prevState) => ({
        prevTotal: prevState.prevTotal + 5,
      }),
      this.loadUsers,
    );
  };

  render() {
    const { loading, pokemons } = this.state;
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
export default InfiniteScroll;
