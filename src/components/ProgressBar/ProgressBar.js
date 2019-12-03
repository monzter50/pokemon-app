import React from 'react';
import PropTypes from 'prop-types';

const ProgressBar = (props) => {
	const { percentage, text } = props;
	return (
		<div className="progress-bar">
			<label htmlFor={text} className="label-bar">
				{text}
			</label>
			<span
				className={`bar progress-${text}`}
				style={{ width: `${percentage}%` }}
			/>
		</div>
	);
};

ProgressBar.propTypes = {
	percentage: PropTypes.number.isRequired,
	text: PropTypes.string.isRequired,
};
export default ProgressBar;
