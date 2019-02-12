import { createAction } from 'redux-actions'

function createFetchActions (types) {
  const [fetchType, requestType, successType, failureType] = types
  const metaFunc = meta => ({ ...meta, action: 'fetch' })
  const fetchAction = createAction(fetchType, option => option)
  fetchAction.request = createAction(requestType, meta => null, metaFunc)
  fetchAction.success = createAction(successType, (meta, response) => response, metaFunc)
  fetchAction.failure = createAction(failureType, (meta, error) => error, metaFunc)
  return fetchAction
}

export default {
  createFetchActions
}
