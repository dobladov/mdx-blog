import React from 'react'
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
          <Link to={`/tags/${tag}`}>
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

export default Tags
