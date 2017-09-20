import React from 'react'
import PropTypes from 'prop-types'

import './City.scss'

const City = ({label}) => (
  <div className="City">
    <input type="text" placeholder={label} />
  </div>
)

City.propTypes = {
  label: PropTypes.string.isRequired
}

export default City
