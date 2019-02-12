import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import CircularProgress from '@material-ui/core/CircularProgress'
import Grid from '@material-ui/core/Grid'

const styles = theme => ({
  root: {
    minHeight: 400
  }
})

function LoadingPage (props) {
  const { classes } = props
  return (
    <Grid container direction="column" justify="center" alignItems="center" className={classes.root}>
      <CircularProgress disableShrink color="secondary" />
    </Grid>
  )
}

export default withStyles(styles)(LoadingPage)

