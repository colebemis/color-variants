import React from 'react'
import colorVariants from 'color-variants'
import Color from 'color'

function ColorVariants({ options }) {
  return (
    <div style={{ width: '100%' }}>
      {colorVariants(options).map((color, index) => (
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
