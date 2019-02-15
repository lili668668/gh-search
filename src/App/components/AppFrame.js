import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'

const styles = theme => ({
  root: {
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2
  }
})

function AppFrame (props) {
  const { classes, children } = props
  return (
    <Grid container>
      <Grid xs item />
      <Grid xs item className={classes.root}>
        {children}
      </Grid>
      <Grid xs item />
    </Grid>
  )
}

AppFrame.propTypes = {
  children: PropTypes.node
}

export default withStyles(styles)(AppFrame)
