import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import { css } from '@emotion/core'
import { Twitter, GitHub, Rss } from 'react-feather'

const style = css`
  padding: 20px 40px;
  display: flex;
  font-family: 'Text Me One',sans-serif;

  h1 {
    flex: 1;
    margin: 0;
    display: flex;
    align-items: center;
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

      a {
        font-weight: bold;
        padding: 10px;
      }
    }
  }
`

const Header = ({ siteTitle }) => (
  <header css={style}>
    <h1 style={{ margin: 0 }}>
      <Link
        to="/"
        style={{
          color: 'white',
          textDecoration: 'none'
        }}
      >
        {siteTitle}
      </Link>
    </h1>
    <nav className="mainNav">
      <ul>
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
          <Link to="/feed.xml">
            <Rss />
          </Link>
        </li>
      </ul>
    </nav>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string
}

Header.defaultProps = {
  siteTitle: ''
}

export default Header
