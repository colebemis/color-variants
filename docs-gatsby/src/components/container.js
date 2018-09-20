import React from 'react'
import Box from './box'

function Container(props) {
  return <Box maxWidth={1200} width="95%" mx="auto" px={4} {...props} />
}

export default Container
