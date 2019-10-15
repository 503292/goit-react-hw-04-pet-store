import React, { Component } from 'react';
import pets from '../pets.json';
import css from './Pages.module.css';

class Pet extends Component {
  state = { onePet: [] };

  render() {
    const pet = pets.find(pet => pet.id === this.props.match.params.idPets);
    console.log(pet);
    return (
      <>
        <div className={css.petPageMain}>
          {/* <ReturnBtn /> */}
          <p className={css.namePet}>All about {pet.name}</p>
          <div className={css.cardPet}>
            <img className={css.imagePet} src={pet.image} alt="pet" />
            <div className={css.about}>
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

export default Pet;
