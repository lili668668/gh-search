import { combineReducers } from 'redux'
import union from 'lodash/union'
import merge from 'lodash/merge'

function createEntity (name) {
  return function Entity (state = {}, action) {
    if (action.payload && action.payload.entities && action.payload.entities[name]) {
      return Object.assign({}, state, action.payload.entities[name])
    }
    return state
  }
}

function createMeta (name, types) {
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

  return function Meta (state = {}, action) {
    const newState = merge(state, { [action.meta.id]: {} })
    return Object.keys(newState)
      .map(key => {
        const newItem = { status: statusReducer(state[key].status, action, key), ids: idsReducer(state[key].ids, action, key) }
        return { [key]: newItem }
      })
      .reduce((meta, item) => Object.assign({}, meta, item), {})
  }
}

export default {
  createEntity,
  createMeta
}
