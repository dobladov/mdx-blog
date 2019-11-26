import React from 'react'
import { graphql, Link } from 'gatsby'
import { css } from '@emotion/core'
import Layout from '../components/layout'

const style = css`
    list-style-type: none;
    padding: 0;
`

const IndexPage = ({
  data: {
    allMdx: { group }
  }
}) => {
  return (
    <Layout>
      <ul css={style}>
        {group.map(({ tag, totalCount }) => (
          <li key={tag}>
            <h2>
              <Link to={`/tags/${tag}`}>
                #{tag} ({totalCount})
              </Link>
            </h2>
          </li>
        ))}
      </ul>
    </Layout>
  )
}
export default IndexPage
export const pageQuery = graphql`
  query {
    allMdx {
      group(field: frontmatter___tags) {
        tag: fieldValue
        totalCount
      }
    }
  }
`
