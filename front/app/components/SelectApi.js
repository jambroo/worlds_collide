import React from 'react'
import PropTypes from 'prop-types'

import { VisibilityFilters, ApiAlternatives, ADD_TRIP, SET_VISIBILITY_FILTER, LOAD_TRIPS, ADD_TRIP_SUCCESS, ADD_TRIP_FAIL, SELECT_API } from '../actions/'
const { SHOW_ALL } = VisibilityFilters

import { changeApi } from '../actions'

const SelectApi = ({ dispatch }) => {
  return (
    <div>
        <select onChange={e => {
          e.preventDefault()
          dispatch(changeApi(e.target.value))
        }}>
          {ApiAlternatives && Object.keys(ApiAlternatives) && Object.keys(ApiAlternatives).map(api => (
            <option value={api} key={api}>{api}</option>
          ))}
        </select>
    </div>
  )
}

export default SelectApi
