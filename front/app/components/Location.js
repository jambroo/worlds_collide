import React from 'react'
import PropTypes from 'prop-types'

import './Location.scss'

const Location = ({ children }) => {
  return (
    <span className="Location">
      {children}
    </span>
  )
}

Location.propTypes = {
}

export default Location
