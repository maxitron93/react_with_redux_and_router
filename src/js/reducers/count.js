const countReducer = (state = 0, action) => {
  switch (action.type) {
    case 'INCREASE_COUNT':
      const increaseBy = action.increaseBy ? action.increaseBy : 1
      return (state + increaseBy)
    
    case 'REDUCE_COUNT': 
      const reduceBy = action.reduceBy ? action.reduceBy : 1
      return (state - reduceBy)

    case 'RESET_COUNT':
      return 0
    
    case 'SET_COUNT':
      return action.setCountTo
    
    default: 
      return state
  }
}

export { countReducer }