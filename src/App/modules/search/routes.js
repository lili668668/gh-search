import React, { lazy } from 'react'
import { Route } from 'react-router-dom'

const Search = lazy(() => import('./pages/Search'))

export default [
  (<Route key="search" exact path="/" component={() => <Search />} />)
]
