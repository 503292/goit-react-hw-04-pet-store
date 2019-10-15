import React, { Component } from 'react';
import pets from '../pets.json';
import PetList from '../components/PetList';

class Pets extends Component {
  state = {
    items: pets,
  };
  render() {
    // console.log('state', this.state.items);
    const { items } = this.state;
    return (
      <>
        <h2>Available pets</h2>
        <PetList items={items} />
      </>
    );
  }
}

export default Pets;
