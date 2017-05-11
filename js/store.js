import { createStore, compose } from 'redux'
import rootReducer from './reducers'

const store = createStore(rootReducer, compose(
  /*
    If we are in the browser and have devToolsExtension, turn on devToolsExtension.  Else, to nothing.
  */
  typeof window === 'object' && typeof window.devToolsExtension !== 'undefined' ? window.devToolsExtension() : (f) => f
))

export default store
