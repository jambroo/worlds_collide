import React from 'react'
import PropTypes from 'prop-types'

import Heading from './Heading'
import Location from './Location'

import './PreviousTrips.scss'

const PreviousTrips = ({ trips, loading }) => (
  <div>
    <Heading>Previous Trips</Heading>
    {loading && <div className="Loading">Loading...</div>}
    {!loading && <ul className="PreviousTrips">
      {trips.length === 0 && <i>No trips recorded.</i>}
      {trips.length && trips.map(trip => (
        <li key={trip.id}>
          <Location>{trip.src}</Location>
          <i className="material-icons Arrow">chevron_right</i>
          <Location>{trip.dest}</Location>
        </li>
      ))}
    </ul>
    }
  </div>
)

PreviousTrips.propTypes = {
  trips: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      src: PropTypes.string.isRequired,
      dest: PropTypes.string.isRequired
    }).isRequired
  ).isRequired
}

export default PreviousTrips
