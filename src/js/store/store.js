import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk'
import { countReducer } from '../reducers/count'
import { peopleReducer } from '../reducers/people'
import { animalsReducer } from '../reducers/animals'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
  combineReducers({
    count: countReducer,
    people: peopleReducer,
    animals: animalsReducer
  }),
  composeEnhancers(applyMiddleware(thunk))
)

export { store }