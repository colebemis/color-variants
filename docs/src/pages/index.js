import merge from 'lodash.merge';
import set from 'lodash.set';
import React from 'react';
import ColorVariants from '../components/color-variants';
import Controls from '../components/controls';
import Layout from '../components/layout';
import controls from '../controls.json';

class IndexPage extends React.Component {
  state = {
    base: '#f00',
    light: {
      steps: 4,
      lighten: 0.8,
      hueShift: 20,
      saturate: 0.1,
    },
    dark: {
      steps: 4,
      darken: 0.8,
      hueShift: -20,
      saturate: 0.1,
    },
  }

  handleChange = (path, value) => {
    this.setState(state =>
      merge(state, set(state, path.join('.'), isNaN(value) ? value : Number(value)))
    )
  }

  render() {
    return (
      <Layout>
        <h1>color-variants</h1>
        <p>Generate light and dark variants of a color</p>
        <a href="https://github.com/colebemis/color-variants">GitHub</a>
        <pre>
          <code>npm install color-variants</code>
        </pre>
        <div style={{ display: 'flex' }}>
          <form style={{ width: '100%' }}>
            <Controls controls={controls} state={this.state} onChange={this.handleChange} />
          </form>
          <pre style={{ width: '100%' }}>
            <code>{getCode(this.state)}</code>
          </pre>
          <ColorVariants options={this.state} />
        </div>
        <footer style={{ padding: '16px 0' }}>
          <a href="https://twitter.com/colebemis">Made by @colebemis</a>
        </footer>
      </Layout>
    )
  }
}

function getCode({ base, light, dark }) {
  return `
colorVariants({
  base: '${base}',
  light: {
    steps: ${light.steps},
    lighten: ${light.lighten},
    hueShift: ${light.hueShift},
    saturate: ${light.saturate},
  },
  dark: {
    steps: ${dark.steps},
    darken: ${dark.darken},
    hueShift: ${dark.hueShift},
    saturate: ${dark.saturate},
  },
})
`.trim()
}

export default IndexPage
