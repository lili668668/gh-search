import React from 'react'
import PropTypes from 'prop-types'
import Typography from '@material-ui/core/Typography'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'

function ResultListItem (props) {
  const { message } = props
  return (
    <ListItem>
      <ListItemText
        primary={<Typography variant="subtitle1">{message}</Typography>}
      />
    </ListItem>
  )
}

ResultListItem.defaultProps = {
  message: ''
}

ResultListItem.propTypes = {
  message: PropTypes.string
}

export default ResultListItem
