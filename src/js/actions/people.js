// ADD_PERSON
const addPerson = (name, age, occupation, location) => {
  return {
    type: 'ADD_PERSON',
    name: name,
    age: age,
    occupation: occupation,
    location: location
  }
}

const startAddPerson = (name, age, occupation, location) => {
  return (dispatch) => {
    // Insert any other actions here
    // For example, send a reqest to the server to add a person to the database
    console.log("Adding person")

    // Change the redux state
    dispatch(addPerson(name, age, occupation, location))
  }
}

// REMOVE_PERSON
const removePerson = (name) => {
  return {
    type: 'REMOVE_PERSON',
    name: name
  }
}

const startRemovePerson = (name) => {
  return (dispatch) => {
    // Insert any other actions here
    // For example, send a reqest to the server to remove a person from the database
    console.log("Removing person")

    // Change the redux state

    dispatch(removePerson(name))
  }
}

export { startAddPerson, startRemovePerson }