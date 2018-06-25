const defaultAnimalsState = [
  {
    name: "Doggo",
    species: "Dog",
    breed: "Husky",
    age: 12 
  },
  {
    name: "Catto",
    species: "Cat",
    breed: "in-a-hat",
    age: 68
  }
]

const animalsReducer = (state = defaultAnimalsState, action) => {
  switch (action.type) {
    case 'ADD_ANIMAL':
      return [
        ...state,
        {
          name: action.name,
          species: action.species,
          breed: action.breed,
          age: action.age
        }
      ]
    
    case 'REMOVE_ANIMAL':
      return state.filter((current) => {
        if (current.name !== action.name) {
          return true
        } else {
          return false
        }
      })
    
    default: 
      return state
  }
}

export { animalsReducer }