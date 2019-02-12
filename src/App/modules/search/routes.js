import React from 'react'
import { Route } from 'react-router-dom'
import Search from './pages/Search'

export default [
  (<Route key="search" exact path="/" component={Search} />)
]
