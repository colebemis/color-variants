import Color from 'color'
import colorVariants from 'color-variants'
import React from 'react'
import Box from './Box'
import Flex from './Flex'
import Code from './Code'

function ColorVariants({ options }) {
  let colors = []

  try {
    colors = colorVariants({
      base: options.base,
      light: {
        steps: Number(options.light.steps),
        lighten: Number(options.light.lighten),
        hueShift: Number(options.light.hueShift),
        saturate: Number(options.light.saturate),
      },
      dark: {
        steps: Number(options.dark.steps),
        darken: Number(options.dark.darken),
        hueShift: Number(options.dark.hueShift),
        saturate: Number(options.dark.saturate),
      },
    })
  } catch (error) {
    return (
      <Box width={1} p={4} color="white" bg="red">
        Error: {error.message}
      </Box>
    )
  }

  return (
    <Box width={1} borderRadius={1} style={{ overflow: 'hidden' }}>
      {colors.map((color, index) => (
        <Flex
          key={`${index} ${color}`}
          justifyContent="space-between"
          p={4}
          color={Color(color).isLight() ? 'black' : 'white'}
          bg={color}
        >
          <Code>{index}</Code>
          <Code>{color}</Code>
        </Flex>
      ))}
    </Box>
  )
}

export default ColorVariants
