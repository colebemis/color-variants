import React from 'react'
import Text from './text'

function Pre(props) {
  return (
    <Text
      is="pre"
      p={5}
      fontFamily="monospace"
      fontSize={2}
      lineHeight="normal"
      bg="whitesmoke"
      borderRadius={1}
      {...props}
    />
  )
}

export default Pre
