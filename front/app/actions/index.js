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

export const SELECT_API = 'SELECT_API'
export const ApiAlternatives = {
  API_PYRAMID: 'API_PYRAMID',
  API_OTHER: 'API_OTHER'
}
export const ApiAlternativesPorts = {
  API_PYRAMID: 6543,
  API_OTHER: 1234
}

export function addTrip(src, dest) {
  return (dispatch, getState) => {
    let state = getState();
    return saveTrip(ApiAlternativesPorts[state.api], src, dest).then(payload => {
      if (payload.result === 0) {
        dispatch(addTripSuccess(payload.trip));
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
  return function(dispatch, getState) {
    let state = getState();
    return getAllTrips(ApiAlternativesPorts[state.api]).then(trips => {
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

export function changeApi(api) {
  return {
    type: SELECT_API,
    api
  };
}
