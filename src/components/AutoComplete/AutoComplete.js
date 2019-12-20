/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { findPokemon } from '../../redux/actions';

const AutoComplete = (props) => {
  const {
    isOpen, text, onTextChange, children, handleOpen,
  } = props;

  return (
    <div className={`ui-autocomplete ${isOpen ? 'key-on' : ''}`}>
      <input
        className="input"
        onChange={(event) => {
          const newText = event.target.value;
          onTextChange(newText);
          if (!isOpen && newText) {
            handleOpen(true);
          } else if (isOpen && !newText) {
            handleOpen(false);
          }
        }}
        onBlur={() => {
          setTimeout(() => handleOpen(false), 300);
        }}
        onFocus={() => {
          if (text) {
            handleOpen(true);
          }
        }}
        type="text"
        data-icon="search"
        placeholder="Search"
        value={text}
      />
      {children}

    </div>
  );
};
AutoComplete.propTypes = {
  onTextChange: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  handleOpen: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
};
const mapStateToProps = () => ({});
const mapDispatchToProps = {
  findPokemon,
};

export default connect(mapStateToProps, mapDispatchToProps)(AutoComplete);
