import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import { css } from '@emotion/core'

const style = css`
  padding: 20px;
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

      a {
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
        {/* <li>
          <Link to="/projects">Projects</Link>
        </li> */}
        <li>
          <Link to="/tags">Tags</Link>
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
