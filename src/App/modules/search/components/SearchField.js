import React from 'react'
import PropTypes from 'prop-types'
import TextField from '@material-ui/core/TextField'

function SearchField (props) {
  const { onChange, defaultValue } = props
  return (
    <TextField
      label="Search GitHub"
      fullWidth
      onChange={onChange}
      defaultValue={defaultValue}
    />
  )
}

SearchField.propTypes = {
  onChange: PropTypes.func.isRequired,
  defaultValue: PropTypes.string
}

export default SearchField
