import { store } from './store/store'
import { startIncreaseCount, startReduceCount, startResetCount, startSetCount } from './actions/count'
import { startAddPerson, startRemovePerson } from './actions/people'
import { startAddAnimal, startRemoveAnimal } from './actions/animals'


const dummyActions = () => {
  // Action - Increase the count by 2
  store.dispatch(startIncreaseCount(2))
  // Action - Set count to 76
  store.dispatch(startSetCount(76))
  // Action - Add person
  store.dispatch(startAddPerson("Steve", 30, "Road Auditor", "Brisbane"))
  // Action - Add person
  store.dispatch(startAddPerson("Nat", 28, "Doctor", "Singapore"))
  // Action - Reduce the count by 12 
  store.dispatch(startReduceCount(12))
  // Action - Reset count
  store.dispatch(startResetCount())
  // Action - Add animal
  store.dispatch(startAddAnimal("Wombo", "Wombat", "Big Nose", 17))
  // Action - Remove person
  store.dispatch(startRemovePerson("Maxi"))
  // Action - Remove animal
  store.dispatch(startRemoveAnimal("Catto"))
  // Action - Increase the count by 17
  store.dispatch(startIncreaseCount(17))

  // Additional actions that run on a timer
  // Action - Create a person named Maxi every second
  setInterval(() => {
    store.dispatch(startAddPerson("New Person :D New one every 3 seconds!", Math.floor(Math.random() * 100), "Unemployed", "Somewhere in the World"))
  }, 3000)

  setInterval(() => {
    store.dispatch(startAddAnimal("New Animal (,,,/(;,,;)/,,,) New one every 5 seconds!", "Pokemon", "Water", Math.floor(Math.random() * 100)))
  }, 5000)
}

export { dummyActions }