import React from 'react'
import { replace } from 'connected-react-router'
import SearchField from '../components/SearchField'
import ResultList from '../components/ResultList'
import RepositoryListItem from '../components/RepositoryListItem'

import { useFetchByQuery, useSelector } from '../../../util/hooks'
import { getRepositories, getQuery } from '../duck/selectors'
import * as actions from '../duck/actions'

function Search (props) {
  const repositories = useSelector(getRepositories)
  const defaultQuery = useSelector(getQuery)
  const fetchRepositories = useFetchByQuery(defaultQuery, actions.fetchRepositories, replace)
  return (
    <section>
      <SearchField
        defaultValue={defaultQuery.q}
        onChange={(event) => fetchRepositories({ q: event.target.value })}
      />
      <ResultList
        items={repositories}
        listItemComponent={RepositoryListItem}
      />
    </section>
  )
}

export default Search
