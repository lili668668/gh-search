import { combineReducers } from 'redux'
import { createEntity, createMeta } from '../../../util/createReducers'
import * as types from './types'

const requestTypes = [types.fetchRepositories.request]
const successTypes = [types.fetchRepositories.success]
const failureTypes = [types.fetchRepositories.failure]

export default combineReducers({
  entity: createEntity('repositories'),
  meta: createMeta('repositories', { requestTypes, successTypes, failureTypes })
})
