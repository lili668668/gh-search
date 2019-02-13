import { combineEpics } from 'redux-observable'
import { createFetchFromGithubEpic } from '../../../util/createEpics'
import actions from './actions'
import * as types from './types'

export default combineEpics(
  createFetchFromGithubEpic({ baseUrl: 'https://api.github.com/search/repositories', type: types.fetchRepositories.fetch, fetchAction: actions.fetchRepositories })
)
