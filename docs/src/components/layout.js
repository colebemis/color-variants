import { node } from 'prop-types'
import React from 'react'
import { injectGlobal, ThemeProvider } from 'styled-components'
import theme from '../theme'

injectGlobal({
  '*, *:before, *:after': {
    boxSizing: 'inherit',
    transition: 'inherit',
  },

  body: {
    boxSizing: 'border-box',
    margin: 0,
    fontFamily: theme.fonts.sans,
  },
})

function Layout({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <div>{children}</div>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: node.isRequired,
}

export default Layout
