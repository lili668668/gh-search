function createRequestTypes (action, name, option = {}) {
  const { namespace } = option
  const prefix = namespace !== undefined ? `${namespace.toUpperCase()}/` : ''
  const uppercaseAction = action.toUpperCase()
  const uppercaseName = name.toUpperCase()
  const actionType = `${prefix}${uppercaseAction}_${uppercaseName}`
  const requestType = `${prefix}${uppercaseAction}_${uppercaseName}_REQUEST`
  const successType = `${prefix}${uppercaseAction}_${uppercaseName}_SUCCESS`
  const failureType = `${prefix}${uppercaseAction}_${uppercaseName}_FAILURE`
  return {
    [action]: actionType,
    request: requestType,
    success: successType,
    failure: failureType
  }
}

export default {
  createRequestTypes
}
