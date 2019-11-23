/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'
import { Global, css } from '@emotion/core'

import Header from './header'
import 'normalize.css'

const globalSyles = css`
  body {
    background-color: hsl(0, 0%, 13%);
    color: hsl(0, 0%, 100%);
    font-size: calc(14px + 0.25vw);
    font-family: futura-pt,sans-serif,sans-serif;
  }

  a {
    color: hsl(0, 0%, 100%);
  }
`

const style = css`
  main {
    padding: 40px;
  }
`

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Global styles={globalSyles} />
      <Header siteTitle={data.site.siteMetadata.title} />
      <div
        css={style}
      >
        <main>{children}</main>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
