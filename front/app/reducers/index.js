import { combineReducers } from 'redux'
import { VisibilityFilters, ApiAlternatives, ADD_TRIP, SET_VISIBILITY_FILTER, LOADING_TRIPS, LOAD_TRIPS, ADD_TRIP_SUCCESS, ADD_TRIP_FAIL, SELECT_API, SHOW_LOADING } from '../actions/'
const { SHOW_ALL } = VisibilityFilters
const { ApiNames } = ApiAlternatives
const { API_PYRAMID, API_OTHER } = ApiNames

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
            id: action.trip.id,
            src: action.trip.src,
            dest: action.trip.dest
          }
        ]
    default:
      return state
  }
}

const loading = (state = SHOW_LOADING, action) => {
  switch (action.type) {
    case LOADING_TRIPS:
      return action.loading
    case LOAD_TRIPS:
      return false
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

const api = (state = API_PYRAMID, action) => {
  switch (action.type) {
    case SELECT_API:
      return action.api
    default:
      return state
  }
}

const errorMessage = (state = null, action) => {
  switch (action.type) {
    case LOAD_TRIPS:
      return action.error
    default:
      return state
  }
}

const worldsCollideApp = combineReducers({
  visibilityFilter,
  trips,
  api,
  errorMessage,
  loading
})

export default worldsCollideApp
