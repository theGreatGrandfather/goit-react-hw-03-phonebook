import React from 'react'
import PropTypes from 'prop-types'

import {Item, ItemElement, DelButton} from './ContactItem.styled'

export const ContactItem = ({ name, phone, onClick, id }) => {
  return (
    <Item
      key={id}
    >
      <ItemElement>
        {name} {": "}
      </ItemElement>
      <ItemElement>
        {phone}
      </ItemElement>
      <DelButton
        onClick={() => onClick(id)}
      >
      delete
      </DelButton>
    </Item>
  )
}

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired
}