import { getAllTrips, saveTrip } from '../api/TripApi';

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}

export const ADD_TRIP = 'ADD_TRIP'
export const ADD_TRIP_SUCCESS = 'ADD_TRIP_SUCCESS'
export const ADD_TRIP_FAIL = 'ADD_TRIP_FAIL'
export const ADD_TRIP_FAIL_MESSAGE = 'An error has occurred while saving the trip.'

export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'
export const LOADING_TRIPS = 'LOADING_TRIPS'
export const LOAD_TRIPS = 'LOAD_TRIPS'
export const SHOW_LOADING = 'SHOW_LOADING'
export const LOAD_TRIPS_FAIL_MESSAGE = 'An error has occurred while loading previously saved trips.'

export const SELECT_API = 'SELECT_API'
export const ApiAlternatives = {
  ApiNames: {
    API_DJANGO: 'API_DJANGO',
    API_PYRAMID: 'API_PYRAMID',
    API_FLASK: 'API_FLASK',
    API_TORNADO: 'API_TORNADO'
  },
  ApiFriendlyNames: {
    API_DJANGO: 'Django',
    API_PYRAMID: 'Pyramid',
    API_FLASK: 'Flask',
    API_TORNADO: 'Tornado'
  },
  ApiPorts: {
    API_DJANGO: 3001,
    API_PYRAMID: 3002,
    API_FLASK: 3003,
    API_TORNADO: 3004
  }
}

export function addTrip(src, dest) {
  return (dispatch, getState) => {
    let state = getState();
    return saveTrip(ApiAlternatives.ApiPorts[state.api], src, dest).then(payload => {
      dispatch(addTripSuccess(payload));
    }).catch(error => {
      dispatch(addTripFail());
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
    type: ADD_TRIP_FAIL,
    error: ADD_TRIP_FAIL_MESSAGE
  };
}

export function loadTrips() {
  return function(dispatch, getState) {
    dispatch(loadingTrips(true));
    let state = getState();
    return getAllTrips(ApiAlternatives.ApiPorts[state.api]).then(trips => {
      dispatch(loadTripsResponse(trips, null));
      dispatch(loadingTrips(false));
    }).catch(error => {
      dispatch(loadTripsResponse([], error));
      dispatch(loadingTrips(false));
    });
  }
}

export function loadingTrips(status) {
  return {
    type: LOADING_TRIPS,
    loading: status
  };
}

export function loadTripsResponse(trips, error) {
  // atatus logging could be added here for error.

  return {
    type: LOAD_TRIPS,
    error: (error) ? LOAD_TRIPS_FAIL_MESSAGE : null,
    trips: trips
  };
}

export function changeApi(api) {
  return {
    type: SELECT_API,
    api
  };
}
