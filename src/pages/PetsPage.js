import React from 'react';
import pets from '../pets.json';
import PetList from '../components/PetList/PetList';
import css from './Pages.module.css';

const PetsPage = () => (
  <>
    <h2 className={css.titlePets}>Available pets</h2>
    <PetList items={pets} />
  </>
);

export default PetsPage;
