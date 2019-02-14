import React from 'react'
import PropTypes from 'prop-types'
import { Plugin, Template, TemplatePlaceholder } from '@devexpress/dx-react-core'

function ResultListCoreBase (props) {
  const { items } = props
  const {
    listComponent: List,
    listItemComponent: ListItem
  } = props
  return (
    <Plugin>
      <Template name="root">
        <TemplatePlaceholder name="list" params={items} />
      </Template>
      <Template name="list">
        {(items) => (
          <List>
            {items.map((item, index) => (<ListItem key={index} {...item} />))}
          </List>
        )}
      </Template>
    </Plugin>
  )
}

ResultListCoreBase.defaultProps = {
  items: []
}

ResultListCoreBase.propTypes = {
  listComponent: PropTypes.func,
  listItemComponent: PropTypes.func,
  items: PropTypes.array
}

ResultListCoreBase.components = {
  listComponent: 'List',
  listItemComponent: 'ListItem'
}

export default ResultListCoreBase
