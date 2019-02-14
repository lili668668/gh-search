import React from 'react'
import PropTypes from 'prop-types'
import Typography from '@material-ui/core/Typography'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'

function RepositoriesListItem (props) {
  const { fullName, htmlUrl, language } = props
  return (
    <ListItem component="a" button href={htmlUrl}>
      <ListItemText
        primary={<Typography variant="subtitle1">{fullName}</Typography>}
        secondary={<Typography variant="body2">{language}</Typography>}
      />
    </ListItem>
  )
}

RepositoriesListItem.defaultProps = {
  fullName: '',
  htmlUrl: '',
  language: ''
}

RepositoriesListItem.propTypes = {
  fullName: PropTypes.string,
  htmlUrl: PropTypes.string,
  language: PropTypes.string
}

export default RepositoriesListItem
