import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import { css } from '@emotion/core'
import { Twitter, GitHub, Rss, Sun, Moon, Codepen, Mail, Key } from 'react-feather'

import ObservableHQLogo from '../../content/assets/observableHQ.svg'

const style = css`
  padding: 20px 40px;
  font-family: 'Text Me One', sans-serif;
  align-items: center;

  h1 {
    flex: 1;
    margin: 0;
    display: flex;
    align-items: center;

    a {
      color: var(--text);
    }
  }

  .mainNav {
    ul {
      list-style-type: none;
      display: flex;
      flex-wrap: wrap;
      font-size: 1.2rem;
      padding: 0;
      align-items: center;
      
      svg {
        top: 6px;
        position: relative;
      }

      .darkModeBtn {
        border: none;
        background-color: transparent;
        color: var(--text);

        &:hover {
          color: var(--contrast);
        }
      }

      a {
        font-weight: bold;
        padding: 10px;
      }

      li {
        margin-bottom: 10px;
      }

      li:first-child a {
        padding-left: 0;
      }
    }
  }

  @media (min-width: 900px) {
    display: flex;

    .mainNav ul {
      

      li:first-child a {
      padding-left: 10px;
      }
    }
  }
`

const Header = ({ siteTitle }) => {
  const [darkMode, setDarkMode] = useState(true)
  useEffect(() => {
    setDarkMode(JSON.parse(localStorage.getItem('darkMode') || true))
  }, [])

  return (
    <header css={style}>
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          title="Daniel Doblado"
          style={{
            textDecoration: 'none'
          }}
        >
          {siteTitle}
        </Link>
      </h1>
      <nav className="mainNav">
        <ul role="navigation">
          <li>
            <Link to="/blog">Articles</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
          <li>
            <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/dobladev">
              <Twitter />
            </a>
          </li>
          <li>
            <a target="_blank" rel="noopener noreferrer" href="https://github.com/dobladov">
              <GitHub />
            </a>
          </li>
          <li>
            <a target="_blank" rel="noopener noreferrer" href="https://codepen.io/dobladov">
              <Codepen />
            </a>
          </li>
          <li>
            <a target="_blank" rel="noopener noreferrer" href="https://observablehq.com/@dobladov">
              <ObservableHQLogo />
            </a>
          </li>
          <li>
            <a href="mailto:danieldoblado@gmail.com">
              <Mail />
            </a>
          </li>
          <li>
            <a title="PGP public key: B16C 9712 C6A2 468C ABA4  99BB 9652 C300 6A47 AC0B" href="/public.pgp">
              <Key />
            </a>
          </li>
          <li>
            <Link to="/rss.xml">
              <Rss />
            </Link>
          </li>
          <li className="noScript">
            <button
              aria-label="Toggle dark theme"
              className="darkModeBtn"
              onClick={() => {
                darkMode
                  ? document.body.classList.add('light')
                  : document.body.classList.remove('light')
                localStorage.setItem('darkMode', !darkMode)
                setDarkMode(!darkMode)
              }}
            >
              {darkMode ? (
                <Sun />
              ) : (
                <Moon />
              )}
            </button>
          </li>
        </ul>
      </nav>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string
}

Header.defaultProps = {
  siteTitle: ''
}

export default Header
