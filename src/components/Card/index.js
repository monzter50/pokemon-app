/* eslint-disable react/forbid-prop-types */
/* eslint-disable no-shadow */
import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { fecthSpecies } from '../../redux/actions';
import {
  Card, Avatar, Description, Button,
} from './styles';

const PokeCard = (props) => {
  const element = useRef(null);
  useEffect(() => {
    // const { fecthSpecies, name } = props;
    // fecthSpecies(name);
  }, [element]);

  const {
    name,
  } = props;
  // if (!chain[name]) return null;
  // const type = details[name].types
  //   ? details[name].types.map((tp) => tp.type.name)
  //   : ['default'];
  // const idChain = chain[name].evolution_chain.url.split('/')[
  //   chain[name].evolution_chain.url.split('/').length - 2
  // ];
  return (
    <Card ref={element} className="element" key={name}>
      <Avatar src={`https://img.pokemondb.net/artwork/${name}.jpg`} alt="" />
      <Description>
        <h3>{name}</h3>
        <Button>
          <NavLink
            to={{ pathname: '/details/', state: { name } }}
          >
  Details
          </NavLink>
        </Button>
      </Description>
    </Card>
  );
};
PokeCard.propTypes = {
  // fecthSpecies: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  // chain: PropTypes.array.isRequired,
};
const mapStateToProps = (state) => ({
  loading: state.selectPokemonReducer.loading,
  chain: state.selectPokemonReducer.chain,
});
const mapDispatchToProps = {
  fecthSpecies,
};
export default connect(mapStateToProps, mapDispatchToProps)(PokeCard);
