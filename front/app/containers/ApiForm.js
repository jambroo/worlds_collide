import React from 'react'
import { connect } from 'react-redux'
import SelectApi from '../components/SelectApi'

const mapStateToProps = state => {
  return {
    api: state.api
  }
}

const ApiForm = connect(
  mapStateToProps
)(SelectApi)

export default ApiForm
