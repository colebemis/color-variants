import { graphql, StaticQuery } from 'gatsby'
import { node } from 'prop-types'
import React from 'react'
import Helmet from 'react-helmet'
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
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
      render={data => (
        <>
          <Helmet
            title={data.site.siteMetadata.title}
            meta={[
              { name: 'description', content: 'Sample' },
              { name: 'keywords', content: 'sample, something' },
            ]}
          >
            <html lang="en" />
          </Helmet>
          <ThemeProvider theme={theme}>
            <div>{children}</div>
          </ThemeProvider>
        </>
      )}
    />
  )
}

Layout.propTypes = {
  children: node.isRequired,
}

export default Layout
