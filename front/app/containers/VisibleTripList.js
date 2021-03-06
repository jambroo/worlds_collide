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
    errorMessage: state.errorMessage && state.errorMessage.load,
    trips: getVisibleTrips(state.trips, state.visibilityFilter),
    loading: state.loading
  }
}

const VisibleTripList = connect(
  mapStateToProps
)(PreviousTrips)

export default VisibleTripList
