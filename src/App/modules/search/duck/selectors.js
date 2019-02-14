import { createSelector } from 'reselect'
import queryString from 'query-string'
import { createListSelector } from '../../../util/createSelector'

export const selectSearch = state => state.router.location.search

export const selectRepositoriesEntity = state => state.search.entity.repositories || {}
export const selectRepositoriesMeta = state => state.search.meta.repositories || {}

export const getRepositories = createListSelector([selectSearch, selectRepositoriesEntity, selectRepositoriesMeta])
export const getQuery = createSelector(selectSearch, (search) => queryString.parse(search))
