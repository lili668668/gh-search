import React from 'react'
import { HashRouter as Router } from 'react-router-dom'
import CssBaseline from '@material-ui/core/CssBaseline'
import routes from './modules/routes'

function App (props) {
  return (
    <React.Fragment>
      <CssBaseline />
      <Router>
        <React.Fragment>
          {routes}
        </React.Fragment>
      </Router>
    </React.Fragment>
  )
}

export default App
