import { SET_SEARCH_TERM, ADD_OMDB_DATA } from './actions'

const DEFAULT_STATE = {
  searchTerm: '',
  omdbData: {}
}

const setSearchTerm = (state, action) => {
  const newState = {}
  Object.assign(newState, state, {searchTerm: action.searchTerm})
  return newState
}

const addOMDBData = (state, action) => {
  const newOMDBData = {}
  // the square brackets are taking {type: 'ADD_OMDB_DATA', omdbData: {....}, imdbID: 'tt12345'}
  // and giving us {'tt12345': {....}}
  Object.assign(newOMDBData, state.omdbData, {[action.imdbID]: action.omdbData})  // key is imdbID and the value is omdbData
  const newState = {}
  Object.assign(newState, state, {omdbData: newOMDBData})
  // return the entire state
  return newState
}

const rootReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case SET_SEARCH_TERM:
      return setSearchTerm(state, action)
    case ADD_OMDB_DATA:
      return addOMDBData(state, action)
    default:
      return state
  }
}

export default rootReducer
