import React from 'react'
import PropTypes from 'prop-types'

import './City.scss'

const City = ({label, reference}) => (
  <div className="City">
    <input type="text" placeholder={label} ref={reference} />
  </div>
)

City.propTypes = {
  label: PropTypes.string.isRequired,
  reference: PropTypes.func
}

export default City
