import get from 'lodash.get'
import React from 'react'
import Box from './box'
import Input from './input'
import Text from './text'

function Controls({ controls, state, prevPath, onChange }) {
  return Object.entries(controls).map(([name, attrs]) => {
    const path = [...prevPath, name]

    if (!('type' in attrs)) {
      return (
        <Controls
          key={path.join('.')}
          controls={attrs}
          state={state}
          prevPath={path}
          onChange={onChange}
        />
      )
    }

    return (
      <Box key={path.join('.')} mb={5}>
        <Text is="label" display="inline-block" pb={2} fontWeight="bold" for={path.join('.')}>
          {path.join('.')}
        </Text>
        <br />
        <Input
          {...attrs}
          id={path.join('.')}
          style={{ width: '100%', boxSizing: 'border-box' }}
          value={get(state, path.join('.'))}
          onChange={event => onChange(path, event.target.value)}
        />
      </Box>
    )
  })
}

Controls.defaultProps = {
  prevPath: [],
}

export default Controls
