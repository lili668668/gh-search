import { createListSelector } from '../../../util/createSelector'

export const selectSearch = state => state.router.location.search

export const selectEntity = state => state.search.entity
export const selectMeta = state => state.search.meta

export const getRepositories = createListSelector([selectSearch, selectEntity, selectMeta])
