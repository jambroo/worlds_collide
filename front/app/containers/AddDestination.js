import React from 'react'
import { connect } from 'react-redux'
import { addTrip } from '../actions'
import City from '../components/City'
import Heading from '../components/Heading'

const AddDestination = ({ dispatch }) => {
  let from_input, to_input

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault()
          if (!from_input.value.trim() || !to_input.value.trim()) {
            return
          }
          dispatch(addTrip(from_input.value, to_input.value))
          from_input.value = ''
          to_input.value = ''
        }}
      >
        <Heading>Register New Trip</Heading>
        <City label="From" reference={node => {
          from_input = node
        }} />
        <City label="To" reference={node => {
          to_input = node
        }} />
        <button type="submit">
          Save
        </button>
      </form>
    </div>
  )
}

export default connect()(AddDestination)
