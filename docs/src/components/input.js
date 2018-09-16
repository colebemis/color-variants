import React from 'react'
import TextInput from './text-input'
import RangeInput from './range-input'

function Input({ type, ...props }) {
  switch (type) {
    case 'range':
      return <RangeInput {...props} />

    default:
      return <TextInput {...props} />
  }
}

export default Input