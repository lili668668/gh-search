import React from 'react'
import { useFetchRepositories, useRepositories } from '../duck/hooks'
import SearchField from '../components/SearchField'

function Search (props) {
  const repositories = useRepositories([])
  console.log(repositories)
  return (
    <section>
      <SearchField />
    </section>
  )
}

export default Search
