import React from 'react'
import PropTypes from 'prop-types'
import { PluginHost, Plugin, Template, TemplatePlaceholder } from '@devexpress/dx-react-core'

function ListCore (props) {
  const { children: otherPlugins, items } = props
  return (
    <PluginHost>
      <Plugin>
        <Template name="root">
          <TemplatePlaceholder name="list" params={items} />
          <TemplatePlaceholder name="loading" />
        </Template>
      </Plugin>
      {otherPlugins}
    </PluginHost>
  )
}

ListCore.defaultProps = {
  items: []
}

ListCore.propTypes = {
  items: PropTypes.array
}

export default ListCore
