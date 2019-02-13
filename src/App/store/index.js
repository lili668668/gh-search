import { createStore, applyMiddleware, compose } from 'redux'
import { createEpicMiddleware } from 'redux-observable'
import { routerMiddleware } from 'connected-react-router'
import rootReducer from './reducers'
import rootEpic from './epics'
import history from './history'

const epicMiddleware = createEpicMiddleware()

/* eslint-disable no-underscore-dangle */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(
  rootReducer,
  composeEnhancers(
    applyMiddleware(
      epicMiddleware,
      routerMiddleware(history)
    )
  )
)
/* eslint-enable */

epicMiddleware.run(rootEpic)

export default store
