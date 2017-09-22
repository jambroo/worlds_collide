import getAllTrips from '../api/TripApi';

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}

export const ADD_TRIP = 'ADD_TRIP'
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'
export const LOAD_TRIPS = 'LOAD_TRIPS'

let nextTripId = 0
export const addTrip = (src, dest) => {
  return {
    type: ADD_TRIP,
    id: nextTripId++,
    src,
    dest
  }
}

export function loadTrips() {
  return function(dispatch) {
    return getAllTrips().then(trips => {
      dispatch(loadTripsSuccess(trips));
    }).catch(error => {
      throw(error);
    });
  }
}

export function loadTripsSuccess(trips) {
  return {
    type: LOAD_TRIPS,
    trips
  };
}
