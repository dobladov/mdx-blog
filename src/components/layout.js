/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'
import { Global, css } from '@emotion/core'

import Header from './header'
import 'normalize.css'

const globalSyles = css`
  :root {
    --main-bg: hsl(0, 0%, 13%);
    --contrast: hsl(154, 44%, 49%);
    --text: hsl(0, 0%, 100%);
    --action: hsl(5, 83%, 64%);
  }

  ::selection {
    background-color: var(--action);
    color: white;
  }

  html {
    box-sizing: border-box;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }

  body {
    background-color: var(--main-bg);
    color: var(--text);
    font-size: calc(14px + 0.25vw);
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
    line-height: 1.6;
    font-weight: 300;
    
    &.light {
      --main-bg: hsl(0, 0%, 95%);
      --text: hsl(180, 3%, 39%);
    }
  }

  a {
    text-decoration: none;
    font-weight: 400;
    color: var(--contrast);

    &:hover {
      text-decoration: underline;
      color: var(--action);
    }
  }

  .unstyledList {
    margin: 0;
    padding: 0;
    list-style-type: none;
  }

  blockquote {
    position: relative;

    &::before {
      content: "";
      display: block;
      position: absolute;
      width: 3px;
      height: 100%;
      background-color: var(--contrast);
      left: -15px;
      top: 0;
    }
  }

  .title {
    font-size: 3.7em;
    font-weight: 200;
    margin-top: 0;
    font-family: 'Text Me One', sans-serif;
    grid-area: title;
    margin: 0;
  }

  .double {
    display: grid;
    grid-template-areas: "title title"
                          "article side";
    grid-template-columns: 2fr 1fr;
    grid-row-gap: 20px;
    grid-column-gap: 60px;

    .content {
      max-width: 1000px;
      grid-area: article;
    }

    aside {
      grid-area: side;
    }
  }

  @media (max-width: 900px) {
    .double {
      display: block;

    }
  }
`

const style = css`
  main {
    padding: 10px 40px;
  }

  @media (min-width: 900px) {
    main {
      padding: 40px 80px;
    }
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

  useEffect(() => {
    const darkMode = JSON.parse(localStorage.getItem('darkMode'))
    console.log(darkMode)
    if (darkMode === false) {
      console.log('exec')
      document.body.classList.add('light')
    }
  }, [])

  return (
    <>
      <Global styles={globalSyles} />
      <Header siteTitle={data.site.siteMetadata.title} />
      <div
        css={style}
      >
        <main>
          {children}
        </main>

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
