import React, { useRef, useLayoutEffect, useCallback } from 'react'
import { replace } from 'connected-react-router'
import AppFrame from '../../../components/AppFrame'
import ListCore from '../../../core/List'
import InfiniteScroll from '../../../core/List/plugins/InfiniteScroll'
import SearchField from '../components/SearchField'
import ListLayout from '../components/ListLayout'
import { useFetchByQuery, useSelector } from '../../../util/hooks'
import { getRepositories, getRepositoriesMeta, getQuery } from '../duck/selectors'
import * as actions from '../duck/actions'

function Search (props) {
  const repositories = useSelector(getRepositories)
  const meta = useSelector(getRepositoriesMeta)
  const defaultQuery = useSelector(getQuery)
  const fetchRepositories = useFetchByQuery(defaultQuery, actions.fetchRepositories, replace)
  const ref = useRef()
  useLayoutEffect(() => {
    ref.current = meta
  })
  const handleLoadMore = useCallback(() => {
    const meta = ref.current
    fetchRepositories({ fetchByUrl: true, url: meta.pagination.nextUrl, metaId: meta.id })
  }, [ref])
  return (
    <AppFrame>
      <SearchField
        defaultValue={defaultQuery.q}
        onChange={(event) => fetchRepositories({ q: event.target.value })}
      />
      <ListCore items={repositories}>
        <ListLayout />
        <InfiniteScroll
          loading={meta.status === 'loading'}
          loadMore={handleLoadMore}
        />
      </ListCore>
    </AppFrame>
  )
}

export default Search
