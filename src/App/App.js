import React from 'react'
import { HashRouter as Router, Switch } from 'react-router-dom'
import { createHashHistory } from 'history'
import CssBaseline from '@material-ui/core/CssBaseline'
import { Provider } from 'react-redux'
import ErrorBoundary from './core/ErrorBoundary'
import LoadingPage from './core/LoadingPage'
import routes from './modules/routes'
import store from './store'

const history = createHashHistory()

function App (props) {
  return (
    <Provider store={store}>
      <CssBaseline />
      <Router history={history}>
        <ErrorBoundary>
          <React.Suspense fallback={<LoadingPage />}>
            <Switch>
              {routes}
            </Switch>
          </React.Suspense>
        </ErrorBoundary>
      </Router>
    </Provider>
  )
}

export default App
