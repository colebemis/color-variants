import React from 'react'
import TextInput from './text-input'
import Flex from './flex'
import Box from './box'

function RangeInput(props) {
  return (
    <Flex alignItems="center">
      <Box is="input" m={0} p={0} type="range" {...props} />
      <TextInput ml={4} width={1 / 3} value={props.value} onChange={props.onChange} />
    </Flex>
  )
}

export default RangeInput
