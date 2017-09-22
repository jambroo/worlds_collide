import { combineReducers } from 'redux'
import { VisibilityFilters, ADD_TRIP, SET_VISIBILITY_FILTER, LOAD_TRIPS } from '../actions/'
const { SHOW_ALL } = VisibilityFilters

const trips = (state = [], action) => {
  switch (action.type) {
    case ADD_TRIP:
      return [
        ...state,
        {
          id: action.id,
          src: action.src,
          dest: action.dest
        }
      ]
    case LOAD_TRIPS:
      return action.trips
    default:
      return state
  }
}

const visibilityFilter = (state = SHOW_ALL, action) => {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter
    default:
      return state
  }
}

const worldsCollideApp = combineReducers({
  visibilityFilter,
  trips
})

export default worldsCollideApp
