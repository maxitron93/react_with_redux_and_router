import React from 'react';
import { connect } from 'react-redux'

const People = (props) => {
  return (
    <div>
      <h2>People from the store! :D</h2>
      {props.people.map((current, index) => {
        return (
          <div key={index}>
            <h4>Name: {current.name}</h4>
            <p>Age: {current.age}</p>
            <p>Occupation: {current.occupation}</p>
            <p>Location: {current.location}</p>
          </div>
        )
      })}
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    people: state.people
  }
}

const ConnectedPeople = connect(mapStateToProps)(People);

export { ConnectedPeople }