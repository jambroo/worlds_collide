export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}

export const ADD_TRIP = 'ADD_TRIP'
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'

let nextTripId = 0
export const addTrip = (src, dest) => {
  return {
    type: ADD_TRIP,
    id: nextTripId++,
    src,
    dest
  }
}
