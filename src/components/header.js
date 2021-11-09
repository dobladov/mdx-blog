import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import { css } from '@emotion/react'
import { Twitter, GitHub, Rss, Sun, Moon, Codepen, Mail, Key } from 'react-feather'

import { getDarkMode } from '../common'
import ObservableHQLogo from '../../content/assets/observableHQ.svg'
import StackOverflowLogo from '../../content/assets/stackoverflow.svg'

const style = css`
  padding: 20px 40px;
  font-family: 'Text Me One', sans-serif;
  align-items: center;
  display: flex;
  justify-content: space-between;

  h1 {
    margin: 0;

    a {
      color: var(--text);
    }
  }

  .nav {
    ul {
      list-style-type: none;
      font-size: 1.2rem;
      display: inline-block;
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
        padding-left: 20px;
        position: relative;

        &.active {
          color: var(--contrast);
          text-decoration: none;
        }
      }

      li {
        display: inline-block;
        margin-bottom: 10px;
      }

      // li:first-child a {
      //   padding-left: 0;padding-leftpadding-left
      // }
    }

    // @media (min-width: 900px) {
    //   padding-right: 40px;padding-rightpadding-rightpadding-right
    // }
  }
`

const Header = ({ siteTitle }) => {
  const [darkMode, setDarkMode] = useState(false)
  useEffect(() => {
    setDarkMode(getDarkMode())
  }, [])

  return (
    <header css={style}>
      <nav className="nav">
        <ul role="navigation">
          <li>
          <h1 style={{ margin: 0 }}>
            <Link
              to="/"
              title="Home"
              style={{
                textDecoration: 'none'
              }}
            >
              {siteTitle}
            </Link>
          </h1>
          </li>
          {/* <li>
            <Link
              activeClassName="active"
              title="My Resume"
              to="/resume">
                Resume
            </Link>
          </li> */}
          <li>
            <Link
              activeClassName="active"
              title="Blog Articles"
              to="/blog">
                Articles
            </Link>
          </li>
          <li>
            <Link
              activeClassName="active"
              title="Personal Projects"
              to="/projects">
                Projects
            </Link>
          </li>
        </ul>
      </nav>
      <nav className="nav">
        <ul role='navigation'>
        <li>
            <a title="Twitter @danieldobla" target="_blank" rel="noopener noreferrer" href="https://twitter.com/danieldobla">
              <Twitter />
            </a>
          </li>
          <li>
            <a title="My repositories on GitHub" target="_blank" rel="noopener noreferrer" href="https://github.com/dobladov">
              <GitHub />
            </a>
          </li>
          <li>
            <a title="Mostly layouts and concepts at CodePen" target="_blank" rel="noopener noreferrer" href="https://codepen.io/dobladov">
              <Codepen />
            </a>
          </li>
          <li>
            <a title="Data visualizations at ObservableHQ" target="_blank" rel="noopener noreferrer" href="https://observablehq.com/@dobladov">
              <ObservableHQLogo />
            </a>
          </li>
          <li>
            <a title="Helping other developers in Stack Overflow" target="_blank" rel="noopener noreferrer" href="https://stackoverflow.com/users/2498992/daniel-doblado">
              <StackOverflowLogo />
            </a>
          </li>
          <li>
            <a title="E-Mail danieldoblado@gmail.com" href="mailto:danieldoblado@gmail.com">
              <Mail />
            </a>
          </li>
          <li>
            <a title="PGP public key: B16C 9712 C6A2 468C ABA4  99BB 9652 C300 6A47 AC0B" href="/public.pgp">
              <Key />
            </a>
          </li>
          <li>
            <a title="Follow my blog articles" href="/rss.xml">
              <Rss />
            </a>
          </li>
          <li className="noScript">
            <button
              aria-label="Toggle dark theme"
              className="darkModeBtn"
              title={darkMode ? 'Use light theme' : 'Use dark theme'}
              onClick={() => {
                darkMode
                  ? document.body.classList.remove('dark')
                  : document.body.classList.add('dark')
                localStorage.setItem('darkMode', !darkMode)
                setDarkMode(!darkMode)
              }}
            >
              {darkMode
                ? (
                <Sun />
                  )
                : (
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
