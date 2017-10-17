import React, { Component } from 'react'
import VisibleTripList from '../containers/VisibleTripList'
import AddDestination from '../containers/AddDestination'
import ApiForm from '../containers/ApiForm'

import './App.scss'

class App extends Component {
  renderErrorMessage() {
    const { errorMessage } = this.props
    if (!errorMessage) {
      return null
    }

    return (
      <p style={{ backgroundColor: '#e99', padding: 10 }}>
        <b>{errorMessage}</b>
        {' '}
        <button onClick={this.handleDismissClick}>
          Dismiss
        </button>
      </p>
    )
  }

  render() {
    const { children, inputValue } = this.props
    return (
        <div className="App">
          {this.renderErrorMessage()}
          <ApiForm />
          <VisibleTripList />
          <AddDestination />
      </div>
    )
  }
}

export default App
