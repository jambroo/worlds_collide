import React from 'react'
import PropTypes from 'prop-types'

import './Heading.scss'

const Heading = ({ children }) => {
  return (
    <h1 className="Heading">
      {children}
    </h1>
  )
}

Heading.propTypes = {
}

export default Heading
