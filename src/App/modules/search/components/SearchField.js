import React from 'react'
import TextField from '@material-ui/core/TextField'

function SearchField (props) {
  return (
    <TextField
      label="Search GitHub"
      fullWidth
      onChange={props.onChange}
    />
  )
}

export default SearchField
