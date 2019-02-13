import { useState, useCallback, useEffect } from 'react'
import { useDispatch, useMappedState } from 'redux-react-hook'
import { push } from 'connected-react-router'
import queryString from 'query-string'

export function createFetchByQueryHook (fetchAction, routerAction = push) {
  return function useFetchByQuery (initValue) {
    const [query, setQuery] = useState(initValue)

    useEffect(() => {
      const dispatch = useDispatch()
      const mapState = useCallback(state => state.router.match.path, [])
      const path = useMappedState(mapState)

      dispatch(fetchAction(query))
      const qs = `${path}?${queryString.stringify(query)}`
      dispatch(routerAction(qs))
    })

    return [query, setQuery]
  }
}

export function createSelectorHook (selector, input = []) {
  return function useSelector (defaultValue) {
    const mapState = useCallback(selector, input)
    return useMappedState(mapState) || defaultValue
  }
}
