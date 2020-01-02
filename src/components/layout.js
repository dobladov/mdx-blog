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
import backgroundDark from '../../content/assets/papyrus-dark.png'
import backgroundLight from '../../content/assets/white-waves.png'

import Header from './header'
import 'normalize.css'

const globalSyles = css`
  :root {
    --main-bg: hsl(0, 0%, 1%);
    --main-bg-contrast: hsl(0, 0%, 6%);
    --contrast: hsl(154, 44%, 49%);
    --text: hsl(0, 0%, 100%);
    --important: hsl(5, 83%, 64%);
    --subtle: hsl(0, 0%, 40.8%);
  }

  ::selection {
    background-color: var(--contrast);
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
    background-image: url(${backgroundDark});
    background-attachment: fixed;
    
    &.light {
      --main-bg: hsl(0, 0%, 96%);
      --main-bg-contrast: hsl(0, 0%, 94%);
      --text: hsl(0, 0%, 24%);
      --contrast: hsl(5, 83%, 64%);
      background-image: url(${backgroundLight});
    }
  }

  a {
    font-weight: 400;
    color: var(--text);
    text-decoration-color: var(--contrast);
    text-decoration-thickness: 4px;
    text-decoration-skip-ink: none;

    &:hover {
      color: var(--contrast);
    }
  }

  .unstyledList {
    margin: 0;
    padding: 0;
    list-style-type: none;
  }

  blockquote {
    position: relative;
    font-style: italic;
    font-size: 1.6rem;

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
    display: flex;
    align-items: center;

    svg {
      margin-right: 20px;
    }
  }

  .double {
    display: grid;
    grid-template-areas: "title title"
                          "article side";
    grid-template-columns: minmax(200px, 2.5fr) minmax(auto, 1fr);
    grid-row-gap: 20px;
    grid-column-gap: 60px;

    .content {
      max-width: 1000px;
      grid-area: article;
      font-size: 1.4rem;
    }

    aside {
      grid-area: side;

      a {
        text-decoration: none;
      }
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
    if (darkMode === false) {
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
        <noscript>
          <style>
            {`
              .noScript {
                display: none;
              }
            `}
          </style>
        </noscript>
        <main>
          {children}
        </main>

        <Helmet>
          <link href="https://fonts.googleapis.com/css?family=Text+Me+One&display=swap" rel="stylesheet" />
        </Helmet>

      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
