import React from 'react'
import classnames from 'classnames'
import { withStyles } from '@material-ui/core/styles'
import ErrorIcon from '@material-ui/icons/Error'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'

const styles = theme => ({
  root: {
    minHeight: 400
  },
  icon: {
    width: 60,
    height: 60
  },
  error: {
    color: theme.palette.error.main
  },
  anchor: {
    color: theme.palette.error.dark
  }
})

function ErrorPage (props) {
  const { classes } = props
  return (
    <Grid container direction="column" justify="center" alignItems="center" className={classes.root}>
      <ErrorIcon className={classnames(classes.icon, classes.error)} />
      <Typography className={classes.error} variant="body1">An unexpected error has occurred.</Typography>
      <Typography className={classes.error} variant="body1">Please contact author: <a href={`mailTo:lili668668@gmail.com`} className={classes.anchor}>lili668668@mgmail.com</a></Typography>
    </Grid>
  )
}

export default withStyles(styles)(ErrorPage)

