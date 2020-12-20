/* eslint-disable no-return-assign */
/* eslint-disable no-shadow */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-unused-prop-types */
/* eslint-disable no-undef */
/* eslint-disable no-underscore-dangle */
import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fecthPokemons } from '../../redux/actions';
import Card from '../Card';
import { ListCards } from './styles';

function InfiniteScroll(props) {
  const [prevTotal] = useState(0);
  const [loading, setLoading] = useState(false);
  const _isMounted = useRef(true);
  const { pokemons, fecthPokemons } = props;
  const loadPokemons = () => {
    setLoading(true);
    fecthPokemons(prevTotal);
  };
  useEffect(() => {
    if (_isMounted.current) {
      loadPokemons();
    }
  }, [_isMounted]);
  useEffect(() => () => (_isMounted.current = false), []);


  return (
    <div>
      <ListCards>
        {pokemons.map((pokemon) => (
          <Card name={pokemon.name} key={`$pokem-${pokemon.name}`} />
        ))}
      </ListCards>
      {loading && <div className="loading">...loading</div>}
    </div>
  );
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
