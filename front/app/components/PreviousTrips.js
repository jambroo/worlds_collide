import React from 'react'
import PropTypes from 'prop-types'

import Heading from './Heading'
import Location from './Location'
import Error from './Error'

import './PreviousTrips.scss'

const PreviousTrips = ({ errorMessage, trips, loading }) => (
  <div>
    <Heading>Previous Trips</Heading>
    {errorMessage && <Error>{errorMessage}</Error>}
    {!errorMessage && loading && <div className="Loading">Loading...</div>}
    {!errorMessage && !loading && trips.length === 0 && <div className="NoTripsMessage">No trips recorded.</div>}
    {!errorMessage && !loading && trips.length !== 0 && <ul className="PreviousTrips">
      {trips.map(trip => (
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
