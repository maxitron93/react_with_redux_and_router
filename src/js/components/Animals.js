import React from 'react';
import { connect } from 'react-redux'

const Animals = (props) => {
  return (
    <div>
      <h2>Animals from the store! :D</h2>
      {props.animals.map((current, index) => {
        return (
          <div key={index}>
            <h4>Name: {current.name}</h4>
            <p>Species: {current.species}</p>
            <p>Breed: {current.breed}</p>
            <p>Age: {current.age}</p>
          </div>
        )
      })}
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    animals: state.animals
  }
}
const ConnectedAnimals = connect(mapStateToProps)(Animals);

export { ConnectedAnimals }