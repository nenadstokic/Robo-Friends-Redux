import { CHANGE_SEARCH_FIELD } from './constants'

export const setSearchField = (text) => ({
  type: CHANGE_SEARCH_FIELD, // a constant
  payload: text  //default name in redux
})
