// INCREASE_COUNT
const increaseCount = (increaseBy) => {
  return {
    type: 'INCREASE_COUNT',
    increaseBy: increaseBy
  }
}

const startIncreaseCount = (increaseBy) => {
  return (dispatch) => {
    // Insert any other actions here
    // For example, send a reqest to the server to increase the count in the database
    console.log("Increasing count in database")

    // Change the redux state
    dispatch(increaseCount(increaseBy))
  }
}

// REDUCE_COUNT
const reduceCount = (reduceBy) => {
  return {
    type: 'REDUCE_COUNT',
    reduceBy: reduceBy
  }
}

const startReduceCount = (reduceBy) => {
  return (dispatch) => {
    // Insert any other actions here
    // For example, send a reqest to the server to reduce the count in the database
    console.log("Reducing count in database")

    // Change the redux state
    dispatch(reduceCount(reduceBy))
  }
}

// RESET_COUNT
const resetCount = () => {
  return {
    type: 'RESET_COUNT'
  }
}

const startResetCount = () => {
  return (dispatch) => {
    // Insert any other actions here
    // For example, send a reqest to the server to reset the count in the database
    console.log("Reset count in database")
    
    // Change the redux state
    dispatch(resetCount())
  }
}

// SET_COUNT
const setCount = (setCountTo) => {
  return {
    type: 'SET_COUNT',
    setCountTo: setCountTo
  }
}

const startSetCount = (setCountTo) => {
  return (dispatch) => {
    // Insert any other actions here
    // For example, send a reqest to the server to set the count in the database
    console.log("Set count in database")

    // Change the redux state
    dispatch(setCount(setCountTo))
  }
}

export { startIncreaseCount, startReduceCount, startResetCount, startSetCount }