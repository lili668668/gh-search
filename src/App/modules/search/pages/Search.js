import React from 'react'
import { replace } from 'connected-react-router'
import SearchField from '../components/SearchField'

import { useFetchByQuery, useSelector } from '../../../util/hooks'
import { getRepositories, getQuery } from '../duck/selectors'
import { fetchRepositories } from '../duck/actions'

function Search (props) {
  const repositories = useSelector(getRepositories)
  const defaultQuery = useSelector(getQuery)
  const [query, setQuery] = useFetchByQuery(defaultQuery, fetchRepositories, replace)
  return (
    <section>
      <SearchField
        defaultValue={defaultQuery.q}
        onChange={(event) => setQuery({ q: event.target.value })}
      />
    </section>
  )
}

export default Search
