import React from 'react';
import PropTypes from 'prop-types';

const BackBtn = ({ handleGoback }) => (
  <button type="button" onClick={handleGoback}>
    Go back
  </button>
);

BackBtn.propTypes = {
  handleGoback: PropTypes.func.isRequired,
};

export default BackBtn;
