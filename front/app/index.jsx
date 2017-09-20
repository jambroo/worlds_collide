import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import worldsCollideApp from './reducers'
import App from './components/App'

let store = createStore(worldsCollideApp)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('container')
)
