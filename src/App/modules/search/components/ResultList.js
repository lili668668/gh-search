import React from 'react'
import { PluginHost } from '@devexpress/dx-react-core'
import ResultListCore from './ResultListCore'

function ResultList (props) {
  const { children, ...restProps } = props
  return (
    <PluginHost>
      <ResultListCore {...restProps} />
      {children}
    </PluginHost>
  )
}

export default ResultList
