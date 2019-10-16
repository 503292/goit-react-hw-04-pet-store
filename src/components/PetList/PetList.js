import React from 'react';
import { Link, withRouter } from 'react-router-dom';
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
          <img
            className={css.petImg}
            src={item.image}
            alt={item.description}
          ></img>
          <h3 className={css.petName}>{item.name}</h3>
        </Link>
      </li>
    ))}
  </ul>
);

export default withRouter(PetList);
