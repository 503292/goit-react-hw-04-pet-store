import React from 'react';
import pets from '../pets.json';
import PetList from '../components/PetList/PetList';

const PetsPage = () => (
  <>
    <h2>Available pets</h2>
    <PetList items={pets} />
  </>
);

export default PetsPage;
