import { navigate } from 'gatsby'
import debounce from 'lodash.debounce'
import merge from 'lodash.merge'
import set from 'lodash.set'
import qs from 'qs'
import React from 'react'
import ColorVariants from '../components/color-variants'
import Controls from '../components/controls'
import Layout from '../components/layout'
import controls from '../controls.json'
import Pre from '../components/pre'
import Flex from '../components/flex'
import Box from '../components/box'
import Code from '../components/code'
import Text from '../components/text'
import Button from '../components/button'
import Container from '../components/container'

const initialState = {
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

class IndexPage extends React.Component {
  state = merge(initialState, qs.parse((this.props.location.search || '').slice(1)))

  handleChange = (path, value) => {
    this.setState(
      state => merge(state, set(state, path.join('.'), value)),
      debounce(() => navigate(`${this.props.location.pathname}?${qs.stringify(this.state)}`), 1000)
    )
  }

  render() {
    return (
      <Layout>
        <Box mb={[6, null, 7]} py={[6, null, 7]} color="white" bg="black">
          <Container>
            <Text is="h1">color-variants</Text>
            <Text is="p" pt={4} pb={6}>
              Generate light and dark variants of a color
            </Text>
            <Button
              is="a"
              py={3}
              px={4}
              mr={5}
              color="black"
              bg="white"
              href="https://github.com/colebemis/color-variants"
            >
              GitHub
            </Button>

            <Code>npm i color-variants</Code>
          </Container>
        </Box>
        <Container>
          <Flex alignItems="flex-start" flexDirection={['column', null, 'row']} m={-3}>
            <Box width={[1, null, 1 / 3]} p={3}>
              <form style={{ width: '100%' }}>
                <Controls controls={controls} state={this.state} onChange={this.handleChange} />
              </form>
            </Box>
            <Box width={[1, null, 1 / 3]} p={3}>
              <Pre width={1}>{getCode(this.state)}</Pre>
            </Box>
            <Box width={[1, null, 1 / 3]} p={3}>
              <ColorVariants options={this.state} />
            </Box>
          </Flex>
        </Container>
        <Box is="footer" mt={[6, null, 7]} py={6} borderTop="1px solid" borderColor="lightgray">
          <Container>
            <a href="https://twitter.com/colebemis">Made by @colebemis</a>
          </Container>
        </Box>
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
