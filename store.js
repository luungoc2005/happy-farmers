import { createStore } from 'redux'
import { combineReducers } from 'redux-immutable'


function configureStore() {
  const rootReducer = combineReducers({})
  return createStore(rootReducer)
}

const store = configureStore()

export default store