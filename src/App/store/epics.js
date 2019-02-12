import { combineEpics } from 'redux-observable'
import search from '../modules/search/duck/epics'

export default combineEpics(
  search
)
