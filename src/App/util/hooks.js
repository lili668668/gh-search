import { useState, useCallback, useEffect } from 'react'
import { useDispatch, useMappedState } from 'redux-react-hook'
import { push } from 'connected-react-router'
import queryString from 'query-string'

export function useFetchByQuery (defaultQuery, fetchAction, routerAction = push) {
  const dispatch = useDispatch()
  const mapState = useCallback(state => ({
    path: state.router.location.pathname
  }), [])
  const { path } = useMappedState(mapState)

  const [initialized, setInitialized] = useState(false)
  useEffect(() => {
    if (!initialized) {
      dispatch(fetchAction(defaultQuery))
      setInitialized(true)
    }
  })

  const fetch = (query) => {
    if (!query.fetchByUrl) {
      const newPath = `${path}?${queryString.stringify(query)}`
      dispatch(routerAction(newPath))
    }
    dispatch(fetchAction(query))
  }

  return fetch
}

export function useSelector (selector, input = []) {
  const mapState = useCallback(selector, input)
  return useMappedState(mapState)
}

export function useScrollListener (handleScroll) {
  const [initialized, setInitialized] = useState(false)
  useEffect(() => {
    if (!initialized) {
      window.addEventListener('scroll', (event) => handleScroll(event))
      setInitialized(true)
    }
    return window.removeEventListener('scroll', handleScroll)
  })
}
