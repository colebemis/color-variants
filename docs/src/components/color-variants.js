import React from 'react'
import colorVariants from 'color-variants'
import Color from 'color'

function ColorVariants({ options }) {
  let colors = []

  try {
    colors = colorVariants({
      base: options.base,
      light: {
        steps: Number(options.light.steps),
        lighten: Number(options.light.lighten),
        hueShift: Number(options.light.hueShift),
        saturate: Number(options.light.saturate)
      },
      dark: {
        steps: Number(options.dark.steps),
        darken: Number(options.dark.darken),
        hueShift: Number(options.dark.hueShift),
        saturate: Number(options.dark.saturate)
      }
    })
  } catch (error) {
    return (
      <div
        style={{
          boxSizing: 'border-box',
          width: '100%',
          padding: 16,
          color: 'white',
          background: 'red',
        }}
      >
        <code>Error: {error.message}</code>
      </div>
    )
  }

  return (
    <div style={{ width: '100%' }}>
      {colors.map((color, index) => (
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            padding: 16,
            color: Color(color).isLight() ? 'black' : 'white',
            backgroundColor: color,
          }}
        >
          <span>{index}</span>
          <span>{color}</span>
        </div>
      ))}
    </div>
  )
}

export default ColorVariants
