import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import { css } from '@emotion/core'
import { Twitter, GitHub, Rss, Sun, Moon, Codepen, Mail } from 'react-feather'

const style = css`
  padding: 20px 40px;
  display: flex;
  font-family: 'Text Me One', sans-serif;

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
      font-size: 1.2rem;
      
      svg {
        top: 6px;
        position: relative;
      }

      .darkModeBtn {
        border: none;
        background-color: transparent;
        color: var(--contrast);

        &:hover {
          color: var(--action);
        }
      }

      a {
        font-weight: bold;
        padding: 10px;
      }
    }
  }
`

const Header = ({ siteTitle }) => {
  const [darkMode, setDarkMode] = useState(JSON.parse(localStorage.getItem('darkMode')))

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
            <Link to="/blog">Blog</Link>
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
            <a href="mailto:danieldoblado@gmail.com">
              <Mail />
            </a>
          </li>
          <li>
            <Link to="/feed.xml">
              <Rss />
            </Link>
          </li>
          <li>
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
