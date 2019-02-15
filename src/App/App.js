import React from 'react'
import { Switch } from 'react-router-dom'
import { ConnectedRouter } from 'connected-react-router'
import CssBaseline from '@material-ui/core/CssBaseline'
import { Provider } from 'react-redux'
import { StoreContext } from 'redux-react-hook'
import ErrorBoundary from './core/ErrorBoundary'
import LoadingPage from './components/LoadingPage'
import ErrorPage from './components/ErrorPage'
import routes from './modules/routes'
import store from './store'
import history from './store/history'

function App (props) {
  return (
    <StoreContext.Provider value={store}>
      <Provider store={store}>
        <CssBaseline />
        <ConnectedRouter history={history}>
          <ErrorBoundary errorPage={ErrorPage}>
            <React.Suspense fallback={<LoadingPage />}>
              <Switch>
                {routes}
              </Switch>
            </React.Suspense>
          </ErrorBoundary>
        </ConnectedRouter>
      </Provider>
    </StoreContext.Provider>
  )
}

export default App
