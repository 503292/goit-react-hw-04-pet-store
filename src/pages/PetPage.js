import React, { Component } from 'react';
import PropTypes from 'prop-types';
import GoBackBtn from '../components/GoBackBtn/GoBackBtn';
import pets from '../pets.json';
import css from './Pages.module.css';

class PetPage extends Component {
  state = {};

  findOnePet = () => {
    const { match } = this.props;
    return pets.find(pet => pet.id === match.params.idPets);
  };

  handleGoback = () => {
    const { history, location } = this.props;
    if (location.state) {
      return history.push(location.state.from);
    }

    return history.push('/pets');
  };

  render() {
    const pet = this.findOnePet();
    return (
      <>
        <div className={css.onePetWrap}>
          <GoBackBtn handleGoback={this.handleGoback} />
          <p className={css.namePet}>All about {pet.name}</p>
          <div className={css.cardPet}>
            <div className={css.imagePetWrap}>
              <img className={css.imagePet} src={pet.image} alt="pet" />
            </div>
            <div className={css.infoPetWrap}>
              <p className={css.aboutPet}>
                Age: <span className={css.dataPet}>{pet.age}</span>
              </p>
              <p className={css.aboutPet}>
                Gender: <span className={css.dataPet}>{pet.gender}</span>
              </p>
              <p className={css.aboutPet}>
                Color: <span className={css.dataPet}>{pet.color}</span>
              </p>
              <p className={css.aboutPet}>
                Breed: <span className={css.dataPet}>{pet.breed}</span>
              </p>
            </div>
          </div>
          <p className={css.descriptionPet}>{pet.description}</p>
        </div>
      </>
    );
  }
}

PetPage.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
  location: PropTypes.shape({
    state: PropTypes.shape({
      from: PropTypes.PropTypes.shape().isRequired,
    }),
  }).isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      idPets: PropTypes.string.isRequired,
    }),
  }).isRequired,
};

export default PetPage;
