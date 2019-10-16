import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import css from './PetList.module.css';

const PetList = ({ items = [], match, location }) => (
  <ul className={css.petsList}>
    {items.map(item => (
      <li key={item.id} className={css.petItem}>
        <Link
          className={css.linkCard}
          to={{
            pathname: `${match.path}/${item.id}`,
            state: { from: location },
          }}
        >
          <img className={css.petImg} src={item.image} alt={item.description} />
          <h3 className={css.petName}>{item.name}</h3>
        </Link>
      </li>
    ))}
  </ul>
);

PetList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  location: PropTypes.shape().isRequired,
  match: PropTypes.shape({
    path: PropTypes.string.isRequired,
  }).isRequired,
};

export default withRouter(PetList);
