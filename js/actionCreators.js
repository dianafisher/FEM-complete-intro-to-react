import axios from 'axios'
import { SET_SEARCH_TERM, ADD_OMDB_DATA } from './actions'

// create an action
export function setSearchTerm (searchTerm) {
  return { type: SET_SEARCH_TERM, searchTerm: searchTerm }
}

// action for our syncronous creator
export function addOMDBData (imdbID, omdbData) {
  return { type: ADD_OMDB_DATA, imdbID, omdbData }
}

// action for our thunk creator.  This returns a function.
export function getOMDBDetails (imdbID) {
  // redux will call the function below
  return function (dispatch, getState) {
    axios.get(`http://www.omdbapi.com/?i=${imdbID}`)
      .then((response) => {
        dispatch(addOMDBData(imdbID, response.data))
      })
      .catch((error) => {
        console.error('axios error', error)
      })
  }
}
