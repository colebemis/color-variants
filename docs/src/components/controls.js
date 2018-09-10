import get from 'lodash.get'
import React from 'react'

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
      <div key={path.join('.')}>
        <label>{path.join('.')}</label>
        <br />
        <input
          {...attrs}
          style={{ width: '100%', boxSizing: 'border-box' }}
          value={get(state, path.join('.'))}
          onChange={event => onChange(path, event.target.value)}
        />
      </div>
    )
  })
}

Controls.defaultProps = {
  prevPath: [],
}

export default Controls
