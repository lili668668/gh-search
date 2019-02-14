import React, { useRef, useLayoutEffect, useCallback } from 'react'
import { replace } from 'connected-react-router'
import SearchField from '../components/SearchField'
import ResultList from '../components/ResultList'
import RepositoryListItem from '../components/RepositoryListItem'
import InfiniteScrollList from '../components/InfiniteScrollList'

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
    <section>
      <SearchField
        defaultValue={defaultQuery.q}
        onChange={(event) => fetchRepositories({ q: event.target.value })}
      />
      <ResultList
        items={repositories}
        listItemComponent={RepositoryListItem}
      >
        <InfiniteScrollList
          loading={meta.status === 'loading'}
          loadMore={handleLoadMore}
        />
      </ResultList>
    </section>
  )
}

export default Search
