import React, { Component } from 'react'
import VisibleTripList from '../containers/VisibleTripList'
import AddDestination from '../containers/AddDestination'
import ApiForm from '../containers/ApiForm'

import './App.scss'

class App extends Component {
  render() {
    const { children, inputValue } = this.props
    return (
        <div className="App">
          <ApiForm />
          <VisibleTripList />
          <AddDestination />
      </div>
    )
  }
}

export default App
