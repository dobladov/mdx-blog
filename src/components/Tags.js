import React from 'react'
import { Link } from 'gatsby'
import { css } from '@emotion/core'

const style = css`
    list-style-type: none;
    padding: 0;
`

const Tags = ({ tags }) => {
  return (
    <ul css={style}>
      {tags.sort((a, b) => a.totalCount < b.totalCount).map(({ tag, totalCount }) => (
        <li key={tag}>
          <h2>
            <Link to={`/tags/${tag}`}>
              #{tag} ({totalCount})
            </Link>
          </h2>
        </li>
      ))}
    </ul>
  )
}

export default Tags