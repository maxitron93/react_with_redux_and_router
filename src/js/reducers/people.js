const defaultPeopleState = [
  {
    name: "Maxi",
    age: "24",
    occupation: "Student",
    location: "Melbourne"
  },
  {
    name: "Batman",
    age: "36",
    occupation: "Bat Man",
    location: "Gotham City"
  },
]

const peopleReducer = (state = defaultPeopleState, action) => {
  switch (action.type) {
    case 'ADD_PERSON':
      return [
        ...state,
        {
          name: action.name,
          age: action.age,
          occupation: action.occupation,
          location: action.location,
        }
      ]

    case 'REMOVE_PERSON':
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

export { peopleReducer }