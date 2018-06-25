import React from 'react';
import { connect } from 'react-redux'

const Home = (props) => {
  return (
    <div>
      <h2>This is the home page. Here is some info on all the state:</h2>
      <p>Current count: {props.count}</p>
      <p>Number of people: {props.people.length}</p>
      <p>Number of anumals: {props.animals.length}</p>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    count: state.count,
    people: state.people,
    animals: state.animals
  }
}
const ConnectedHome = connect(mapStateToProps)(Home)

export { ConnectedHome }