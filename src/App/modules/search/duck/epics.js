import { combineEpics } from 'redux-observable'
import { normalize, schema } from 'normalizr'
import humps from 'humps'
import queryString from 'query-string'
import { createFetchEpic } from '../../../util/createEpics'
import * as actions from './actions'
import * as types from './types'

const baseRepoUrl = 'https://api.github.com/search/repositories'

const fetchRepositoriesEpic = createFetchEpic({
  baseUrl: baseRepoUrl,
  type: types.fetchRepositories.fetch,
  fetchAction: actions.fetchRepositories,
  getPayload: (response, url) => {
    const repositoriesSchema = new schema.Entity('repositories')
    const normalizedData = normalize(response, { items: [repositoriesSchema] })
    const entities = humps.camelizeKeys(normalizedData.entities)
    const result = { repositories: normalizedData.result.items }
    const qs = url.indexOf('?') >= 0 ? url.slice(url.indexOf('?')) : ''
    const query = queryString.parse(qs)
    const newQuery = { ...query }
    if (query.page) {
      newQuery.page = Number(query.page) + 1
    } else {
      newQuery.page = 2
    }
    const nextUrl = `${baseRepoUrl}?${queryString.stringify(newQuery)}`
    const pagination = { nextUrl }
    return { entities, result, pagination }
  }
})

export default combineEpics(
  fetchRepositoriesEpic
)
