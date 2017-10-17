import { getAllTrips, saveTrip } from '../api/TripApi';

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}

export const ADD_TRIP = 'ADD_TRIP'
export const ADD_TRIP_SUCCESS = 'ADD_TRIP_SUCCESS'
export const ADD_TRIP_FAIL = 'ADD_TRIP_FAIL'

export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'
export const LOAD_TRIPS = 'LOAD_TRIPS'


export function addTrip(src, dest) {
  return (dispatch, getState) => {
    return saveTrip(src, dest).then(result => {
      if (result.response === 0) {
        console.log("success")
        dispatch(addTripSuccess(result.trip));
      } else {
        dispatch(addTripFail());
      }
    }).catch(error => {
      throw(error);
    });
  }
}


export function addTripSuccess(trip) {
  return {
    type: ADD_TRIP_SUCCESS,
    trip
  };
}


export function addTripFail() {
  return {
    type: ADD_TRIP_FAIL
  };
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
