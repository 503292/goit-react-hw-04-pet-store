import React, { Component } from 'react';

class InfoPet extends Component {
  state = {};
  render() {
    console.log(this.props.match);
    return <>InfoPet</>;
  }
}

export default InfoPet;
