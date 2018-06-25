import React from 'react';
import { connect } from 'react-redux'
import { startIncreaseCount, startReduceCount, startResetCount, setCount } from '../actions/count'

const Count = (props) => {
  return (
    <div>
      <h2>Count from the store! :D</h2>
      <p>Count: {props.count}</p>
      <p>These handlers run actions defined in src/js/actions/count.js :D</p>
      <button onClick={() => {
        props.dispatch(startIncreaseCount(1))
      }}>+1</button>
      <button onClick={() => {
        props.dispatch(startReduceCount(1))
      }}>-1</button>
      <button onClick={() => {
        props.dispatch(startResetCount())
      }}>Reset</button>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    count: state.count
  }
}

const ConnectedCount = connect(mapStateToProps)(Count);

export { ConnectedCount }