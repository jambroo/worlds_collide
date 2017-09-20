import React from 'react'
import VisibleTripList from '../containers/VisibleTripList'
import AddDestination from '../containers/AddDestination'

import './App.scss'

const App = () => (
  <div className="App">
    <VisibleTripList />
    <AddDestination />
  </div>
)

export default App
