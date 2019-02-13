import React from 'react'
import { connect } from 'react-redux'
import SearchPage from './SearchPage'
import actions from '../duck/actions'
import * as selectors from '../duck/selectors'

class Search extends React.Component {
  componentDidMount () {
    this.props.fetchRepositories()
  }

  render () {
    return (
      <SearchPage {...this.props} />
    )
  }
}

export default connect(
  (state, props) => ({
    repositories: selectors.getRepositories(state, props)
  }),
  (dispatch) => ({
    fetchRepositories: (option) => dispatch(actions.fetchRepositories(option))
  })
)(Search)
