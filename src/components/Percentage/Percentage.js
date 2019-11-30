/* eslint-disable jsx-a11y/label-has-associated-control */
import React from "react";
import PropTypes from "prop-types";

const Percentage = props => {
  const { text, percentage } = props;
  return (
    <div className="percentage-list">
      <label className="label-bar">{text}</label>
      <p className={`circle percentage-${text}`}>
        <span className="label-percentage">{percentage}%</span>
      </p>
    </div>
  );
};
Percentage.propTypes = {
  text: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired
};
export default Percentage;
