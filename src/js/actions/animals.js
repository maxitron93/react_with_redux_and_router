// ADD_ANIMAL
const addAnimal = (name = "No name", species  = "No species", breed = "No breed" , age = null) => {
  return {
    type: 'ADD_ANIMAL',
    name: name,
    species: species,
    breed: breed,
    age: age
  }
}

const startAddAnimal = (name = "No name", species  = "No species", breed = "No breed" , age = null) => {
  return (dispatch) => {
    // Insert any other actions here
    // For example, send a reqest to the server to add an animal to the database
    console.log("Adding animal")

    // Change the redux state
    dispatch(addAnimal(name, species, breed, age))
  }
}

// REMOVE_ANIMAL
const removeAnimal = (name) => {
  return {
    type: 'REMOVE_ANIMAL',
    name: name
  }
}

const startRemoveAnimal = (name) => {
  return (dispatch) => {
    // Insert any other actions here
    // For example, send a reqest to the server to remove an animal from the database
    console.log("Removing animal")

    // Change the redux state
    dispatch(removeAnimal(name))
  }
}

export { startAddAnimal, startRemoveAnimal }