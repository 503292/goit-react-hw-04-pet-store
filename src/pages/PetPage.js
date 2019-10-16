import React, { Component } from 'react';
import GoBackBtn from '../components/GoBackBtn/GoBackBtn';
import pets from '../pets.json';
import css from './Pages.module.css';

class PetPage extends Component {
  state = {};
  findOnePet = () => {
    return pets.find(pet => pet.id === this.props.match.params.idPets);
  };
  handleGoback = () => {
    const { history, location } = this.props;

    if (location.state) {
      return history.push(location.state.from);
    }

    history.push('/pets');
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

export default PetPage;
