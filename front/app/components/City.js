import React from 'react'
import PropTypes from 'prop-types'

const City = ({label}) => (
  <div>
    <input type="text" placeholder={label} />
  </div>
)

City.propTypes = {
  label: PropTypes.string.isRequired
}

export default City
