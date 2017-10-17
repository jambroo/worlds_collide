import React from 'react'
import PropTypes from 'prop-types'

import { VisibilityFilters, ApiAlternatives, ADD_TRIP, SET_VISIBILITY_FILTER, LOAD_TRIPS, ADD_TRIP_SUCCESS, ADD_TRIP_FAIL, SELECT_API } from '../actions/'
const { ApiNames, ApiFriendlyNames } = ApiAlternatives

import { changeApi, loadTrips } from '../actions'

const SelectApi = ({ dispatch }) => {
  return (
    <div>
        <label>API:</label>
        <select onChange={e => {
          e.preventDefault()
          dispatch(changeApi(e.target.value))
          dispatch(loadTrips())
        }}>
          {Object.keys(ApiNames).map(api => (
            <option value={api} key={api}>{ApiFriendlyNames[api]}</option>
          ))}
        </select>
    </div>
  )
}

export default SelectApi
