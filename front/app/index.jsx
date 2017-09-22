import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import worldsCollideApp from './reducers'
import App from './components/App'
import {loadTrips} from './actions';

let store = createStore(worldsCollideApp, applyMiddleware(thunk))
store.dispatch(loadTrips());

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('container')
)
