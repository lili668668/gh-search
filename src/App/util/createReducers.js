import union from 'lodash/union'
import merge from 'lodash/merge'

export function createEntity (name) {
  return function Entity (state = {}, action) {
    if (action.payload && action.payload.entities && action.payload.entities[name]) {
      return merge({}, state, { [name]: action.payload.entities[name] })
    }
    return state
  }
}

export function createMeta (name, types) {
  const idsReducer = (state = [], action, key) => {
    switch (action.meta.action) {
      case 'fetch':
        if (action.meta.id === key && action.payload && action.payload.result && action.payload.result[name]) {
          return union([...state, ...action.payload.result[name]])
        }
        return state
      case 'update':
      case 'add':
        if (action.payload && action.payload.result && action.payload.result[name]) {
          return union([...action.payload.result[name], ...state])
        }
        return state
      case 'delete':
        if (action.payload && action.payload.result && action.payload.result[name]) {
          return state.filter(id => !action.payload.result[name].includes(id))
        }
        return state
      default:
        return state
    }
  }

  const {requestTypes, successTypes, failureTypes} = types
  const statusReducer = (state = 'none', action, key) => {
    if (action.meta.id !== key) return state
    if (requestTypes.includes(action.type)) return 'loading'
    if (successTypes.includes(action.type)) return 'success'
    if (failureTypes.includes(action.type)) return 'failure'
    return state
  }

  const paginationReducer = (state = {}, action, key) => {
    if (action.meta.id !== key) return state
    if (action.payload && action.payload.pagination) return Object.assign({}, state, action.payload.pagination)
    return state
  }

  return function Meta (state = {}, action) {
    if (!action.meta) return state
    const selectedState = Object.assign({}, state[name])
    let newSelectedState = merge(selectedState, { [action.meta.id]: {} })
    newSelectedState = Object.keys(newSelectedState)
      .map(key => {
        const newItem = {
          id: action.meta.id,
          status: statusReducer(newSelectedState[key].status, action, key),
          ids: idsReducer(newSelectedState[key].ids, action, key),
          pagination: paginationReducer(newSelectedState[key].pagination, action, key)
        }
        return { [key]: newItem }
      })
      .reduce((meta, item) => Object.assign({}, meta, item), {})
    return merge({}, state, { [name]: newSelectedState })
  }
}
