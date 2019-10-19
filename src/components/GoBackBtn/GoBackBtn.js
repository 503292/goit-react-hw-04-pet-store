import React from 'react';
import PropTypes from 'prop-types';
import css from './GoBackBtn.module.css';

const BackBtn = ({ handleGoback }) => (
  <button className={css.backBtn} type="button" onClick={handleGoback}>
    Go back
  </button>
);

BackBtn.propTypes = {
  handleGoback: PropTypes.func.isRequired,
};

export default BackBtn;
