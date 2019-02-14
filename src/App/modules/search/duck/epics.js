import { combineEpics } from 'redux-observable'
import { normalize, schema } from 'normalizr'
import humps from 'humps'
import { createFetchEpic } from '../../../util/createEpics'
import * as actions from './actions'
import * as types from './types'

const fetchRepositoriesEpic = createFetchEpic({
  baseUrl: 'https://api.github.com/search/repositories',
  type: types.fetchRepositories.fetch,
  fetchAction: actions.fetchRepositories,
  getPayload: (response) => {
    const repositoriesSchema = new schema.Entity('repositories')
    const normalizedData = normalize(response, { items: [repositoriesSchema] })
    const entities = humps.camelizeKeys(normalizedData.entities)
    const result = { repositories: normalizedData.result.items }
    return { entities, result }
  }
})

export default combineEpics(
  fetchRepositoriesEpic
)
