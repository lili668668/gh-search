import { createFetchActions } from '../../../util/createActions'
import * as types from './types'

export default {
  fetchRepositories: createFetchActions(Object.values(types.fetchRepositories))
}
