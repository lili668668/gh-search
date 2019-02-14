import { createSelector } from 'reselect'

export function createListSelector (selectors) {
  return createSelector(
    selectors,
    (search, entity, meta) => {
      const selectedMeta = meta[search] || {}
      const ids = selectedMeta.ids || []
      const list = ids
        .filter(id => entity[id] !== undefined)
        .map(id => entity[id])
      return list
    }
  )
}

export function createMetaSelector (selectors) {
  return createSelector(
    selectors,
    (search, meta) => meta[search] || {}
  )
}
