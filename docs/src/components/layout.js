import { graphql, StaticQuery } from 'gatsby';
import { node } from 'prop-types';
import React from 'react';
import Helmet from 'react-helmet';

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
          <div
            style={{
              margin: '0 auto',
              maxWidth: 960,
            }}
          >
            {children}
          </div>
        </>
      )}
    />
  )
}

Layout.propTypes = {
  children: node.isRequired,
}

export default Layout
