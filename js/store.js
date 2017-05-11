import { createStore, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reducers'

const store = createStore(rootReducer, compose(

  applyMiddleware(thunk),
  /*
    If we are in the browser and have devToolsExtension, turn on devToolsExtension.  Else, to nothing.
  */
  typeof window === 'object' && typeof window.devToolsExtension !== 'undefined' ? window.devToolsExtension() : (f) => f
))

export default store
