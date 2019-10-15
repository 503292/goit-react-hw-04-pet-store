import React from 'react';
import css from './Pages.module.css';

const Pet = ({ image, name, description }) => (
  <>
    <li className={css.petItem}>
      <a className={css.linkCard} href="/">
        <img className={css.petImg} src={image} alt={description}></img>
        <h3 className={css.petName}>{name}</h3>
      </a>
    </li>
  </>
);

export default Pet;
