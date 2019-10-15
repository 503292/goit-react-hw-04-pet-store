import React, { Component } from 'react';

class Pet extends Component {
  state = {};
  render() {
    console.log(this.props.match);
    return <>InfoPet</>;
  }
}

export default Pet;
