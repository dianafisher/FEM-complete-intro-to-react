import { SET_SEARCH_TERM } from './actions'

// create an action
export function setSearchTerm (searchTerm) {
  return { type: SET_SEARCH_TERM, searchTerm: searchTerm }
}
