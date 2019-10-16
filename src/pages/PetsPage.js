import React, { Component } from 'react';
import pets from '../pets.json';
import PetList from '../components/PetList/PetList';

class PetsPage extends Component {
  state = {
    items: pets,
  };

  render() {
    const { items } = this.state;
    return (
      <>
        <h2>Available pets</h2>
        <PetList items={items} />
      </>
    );
  }
}

export default PetsPage;
