import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import { css } from '@emotion/core'

const style = css`
  background-color: hsl(0, 0%, 11%);
  background: hsl(0, 0%, 13%);
  background: -webkit-linear-gradient(to right, hsl(0, 0%, 11%), hsl(0, 0%, 13%));
  background: linear-gradient(to right, hsl(0, 0%, 11%), hsl(0, 0%, 13%));

  padding: 20px;
  display: flex;

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
        <li>
          <Link to="/projects">Projects</Link>
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
