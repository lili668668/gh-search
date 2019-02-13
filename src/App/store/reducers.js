import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import history from './history'
import search from '../modules/search/duck/reducers'

export default combineReducers({
  router: connectRouter(history),
  search
})
