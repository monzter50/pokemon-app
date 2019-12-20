/* eslint-disable react/forbid-prop-types */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import PropTypes from 'prop-types';

const ListField = (props) => {
  const { list, onTextSelect, isOpen } = props;
  return (
    <div className="ui-list">
      {
        isOpen && (list.length > 0
          ? list.slice(0, 15).map((pokemon) => (
            <div
              className="ui-autocomplete-link"
              key={pokemon.name}
              onClick={() => onTextSelect(pokemon.name)}
              role="searchbox"
              tabIndex="0"
            >

              <span>{pokemon.name}</span>
            </div>
          ))
          : (
            <div className="ui-autocomplete-link">
              <span>Not Founds</span>
            </div>
          ))
      }
    </div>
  );
};
ListField.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  list: PropTypes.array.isRequired,
  onTextSelect: PropTypes.func.isRequired,
};
export default ListField;
