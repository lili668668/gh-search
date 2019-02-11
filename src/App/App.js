import React from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'
import Search from './Search'
import CssBaseline from '@material-ui/core/CssBaseline'

function App (props) {
  return (
    <React.Fragment>
      <CssBaseline />
      <Router>
        <Route exact path="/" component={Search} />
      </Router>
    </React.Fragment>
  )
}

export default App
