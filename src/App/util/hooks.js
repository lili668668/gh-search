import { useState, useCallback, useEffect } from 'react'
import { useDispatch, useMappedState } from 'redux-react-hook'
import { push } from 'connected-react-router'
import queryString from 'query-string'

export function useFetchByQuery (initValue, fetchAction, routerAction = push) {
  const [query, setQuery] = useState(initValue)

  const dispatch = useDispatch()
  const mapState = useCallback(state => ({
    path: state.router.location.pathname,
    search: state.router.location.search
  }), [])
  const { path, search } = useMappedState(mapState)
  const newSearch = queryString.stringify(query)
  const newPath = `${path}?${queryString.stringify(query)}`

  useEffect(() => {
    if (search.slice(1) !== newSearch) {
      dispatch(fetchAction(query))
      dispatch(routerAction(newPath))
    }
  })

  return [query, setQuery]
}

export function useSelector (selector, input = []) {
  const mapState = useCallback(selector, input)
  return useMappedState(mapState)
}
