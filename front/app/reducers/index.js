import { combineReducers } from 'redux'
import { VisibilityFilters } from './actions'
const { SHOW_ALL } = VisibilityFilters

function todos(state = [], action) {
  switch (action.type) {
    default:
      return state
  }
}

const todoApp = combineReducers({
  visibilityFilter: SHOW_ALL,
  todos
})

export default todoApp
