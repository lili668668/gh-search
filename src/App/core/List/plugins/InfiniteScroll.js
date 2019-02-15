import React, { useCallback } from 'react'
import PropTypes from 'prop-types'
import { Plugin, Template, TemplatePlaceholder } from '@devexpress/dx-react-core'
import { useScrollListener } from '../../../util/hooks'

function InfiniteScroll (props) {
  const { loadMore, loading } = props
  const handleScroll = useCallback(() => {
    const scrollTop = (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop
    const scrollHeight = (document.documentElement && document.documentElement.scrollHeight) || document.body.scrollHeight
    const clientHeight = document.documentElement.clientHeight || window.innerHeight
    const scrollToBottom = Math.ceil(scrollTop + clientHeight) >= scrollHeight
    if (loadMore && !loading && scrollToBottom) loadMore()
  }, [loadMore])
  useScrollListener(handleScroll)
  return (
    <Plugin>
      <Template name="list">
        {(items) => (
          <TemplatePlaceholder />
        )}
      </Template>
    </Plugin>
  )
}

InfiniteScroll.defaultProps = {
  loadMore: null,
  loading: false
}

InfiniteScroll.propTypes = {
  loadMore: PropTypes.func,
  loading: PropTypes.bool
}

export default InfiniteScroll
