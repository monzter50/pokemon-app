/* eslint-disable no-return-assign */
/* eslint-disable no-shadow */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-unused-prop-types */
/* eslint-disable no-undef */
/* eslint-disable no-underscore-dangle */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fecthPokemons } from 'redux/actions';
// Components
import Pagination from 'components/Pagination';
import Card from '../Card';
// Styles
import { List } from './styles';

function ListCards(props) {
  const [currentPage, setCurrentPage] = useState(1);
  const [perPages] = useState(20);
  const _isMounted = useRef(true);
  const {
    pokemons, fecthPokemons, loading, count,
  } = props;
  const paginate = (num) => setCurrentPage(num);
  const loadPokemons = () => {
    console.log(perPages * (currentPage - 1));
    fecthPokemons(perPages * (currentPage - 1));
  };
  useEffect(() => {
    if (_isMounted.current) {
      loadPokemons();
    }
  }, [_isMounted, currentPage]);
  useEffect(() => () => (_isMounted.current = false), []);
  if (!count) return null;

  return (
    <div>
      {!loading && (
        <List>
          {pokemons.map((pokemon) => (
            <Card name={pokemon.name} key={`$pokem-${pokemon.name}`} />
          ))}
        </List>
      )}
      {loading && <div className="loading">...loading</div>}
      <Pagination total={count} perPages={perPages} paginate={paginate} />
    </div>
  );
}

ListCards.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  pokemons: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
  fecthPokemons: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
  loading: state.pokemonsReducers.loading,
  pokemons: state.pokemonsReducers.pokemons,
  count: state.pokemonsReducers.count,
});

const mapDispatchToProps = {
  fecthPokemons,
};

export default connect(mapStateToProps, mapDispatchToProps)(ListCards);
