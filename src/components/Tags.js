import React from 'react'
import PropTypes from 'prop-types'

import { Link } from 'gatsby'
import { css } from '@emotion/core'

const style = css`
    li {
      display: inline-block;
    }
`

const Tags = ({ tags, className }) => {
  return (
    <ul css={style} className={`unstyledList${className ? ` ${className}` : ''}`}>
      {tags.sort((a, b) => a.totalCount < b.totalCount).map(({ tag, totalCount }, i) => (
        <li key={tag}>
          #
          <Link rel="tag" to={`/tags/${tag}`}>
            {tag} ({totalCount})
          </Link>
          {(i < tags.length - 1) && (
            <>
              &#44;
              &nbsp;
            </>
          )}
        </li>
      ))}
    </ul>
  )
}

Tags.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.any).isRequired,
  className: PropTypes.string
}

Tags.defaultProps = {
  className: undefined
}

export default Tags
