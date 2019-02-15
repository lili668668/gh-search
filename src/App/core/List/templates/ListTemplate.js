import React from 'react'
import PropTypes from 'prop-types'
import { Plugin, Template } from '@devexpress/dx-react-core'

function ListTemplate (props) {
  const {
    containerComponent: Container,
    itemComponent: Item
  } = props
  return (
    <Plugin>
      <Template name="list">
        {(items) => (
          <Container>
            {items.map((item, index) => (<Item key={index} {...item} />))}
          </Container>
        )}
      </Template>
    </Plugin>
  )
}

ListTemplate.propTypes = {
  containerComponent: PropTypes.func,
  itemComponent: PropTypes.func
}

ListTemplate.components = {
  containerComponent: 'Container',
  itemComponent: 'Item'
}

export default ListTemplate
