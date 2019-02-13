import { createFetchActions } from '../../../util/createActions'
import * as types from './types'

export const fetchRepositories = createFetchActions(Object.values(types.fetchRepositories))
