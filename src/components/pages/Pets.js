import React from 'react';
import pets from '../../pets.json';
import Pet from './Pet';
import css from './Pages.module.css';

const Pets = () => (
  <>
    {console.log(pets)}
    <h2>Available pets</h2>
    <ul className={css.petsList}>
      {pets.map(el => (
        <Pet key={el.id} {...el} />
      ))}
    </ul>
  </>
);

export default Pets;
