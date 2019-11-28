/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'
import { Global, css } from '@emotion/core'

import Header from './header'
import 'normalize.css'

const globalSyles = css`
  body {
    background-color: hsl(0, 0%, 13%);
    color: hsl(0, 0%, 100%);
    font-size: calc(14px + 0.25vw);
    line-height: 1.65;
    font-family: futura-pt,sans-serif,sans-serif;
  }

  a {
    color: hsl(0, 0%, 100%);
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`

const style = css`
  main {
    padding: 40px 80px;
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

        <Helmet>
          <link href="https://fonts.googleapis.com/css?family=Text+Me+One&display=swap" rel="stylesheet"/>
        </Helmet>

      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
