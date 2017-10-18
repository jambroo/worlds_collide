import React from 'react'
import PropTypes from 'prop-types'

import { ApiAlternatives } from '../actions/'
const { ApiNames, ApiFriendlyNames } = ApiAlternatives

import { changeApi, loadTrips } from '../actions'

import './SelectApi.scss'

const SelectApi = ({ dispatch }) => {
  return (
    <div className="SelectApi">
        <label>API</label>
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
