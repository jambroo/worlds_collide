import { combineReducers } from 'redux'
import { VisibilityFilters, ADD_TRIP, SET_VISIBILITY_FILTER, LOAD_TRIPS, ADD_TRIP_SUCCESS, ADD_TRIP_FAIL } from '../actions/'
const { SHOW_ALL } = VisibilityFilters

const trips = (state = [], action) => {
  switch (action.type) {
    case LOAD_TRIPS:
      return action.trips
    case ADD_TRIP_FAIL:
      return [
        ...state,
        {
          error: 1
        }
      ]
    case ADD_TRIP_SUCCESS:
        return [
          ...state,
          {
            uid: action.trip.uid,
            src: action.trip.src,
            dest: action.trip.dest
          }
        ]
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

const errorMessage = (state = null, action) => {
  const { type, error } = action

  if (error) {
    return error
  }

  return state
}

const worldsCollideApp = combineReducers({
  visibilityFilter,
  trips,
  errorMessage
})

export default worldsCollideApp
