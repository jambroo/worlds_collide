import { connect } from 'react-redux'
import { toggleTodo } from '../actions'
import PreviousTrips from '../components/PreviousTrips'

const getVisibleTrips = (trips, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return trips
  }
}

const mapStateToProps = state => {
  return {
    errorMessage: state.errorMessage,
    trips: getVisibleTrips(state.trips, state.visibilityFilter)
  }
}

const VisibleTripList = connect(
  mapStateToProps
)(PreviousTrips)

export default VisibleTripList
