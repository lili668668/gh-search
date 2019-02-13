import React from 'react'
import SearchField from '../components/SearchField'

function SearchPage (props) {
  console.log(props.repositories)
  return (
    <section>
      <SearchField />
    </section>
  )
}

export default SearchPage
