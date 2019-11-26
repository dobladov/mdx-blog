import React from 'react'
import { graphql, Link } from 'gatsby'
import { css } from '@emotion/core'
import Layout from '../components/layout'

const formatter = new Intl.DateTimeFormat('en', { month: 'short' })

const style = css`
  list-style-type: none;
`

const IndexPage = ({
  data: {
    allMdx: { edges }
  }
}) => {
  const posts = edges.map(edge => {
    const post = edge.node
    post.fields.date = new Date(post.fields.date)
    return post
  })

  const organizedPosts = {}
  posts.sort((a, b) => a.fields.date - b.fields.date).forEach(post => {
    if (!organizedPosts[post.fields.date.getFullYear()]) {
      organizedPosts[post.fields.date.getFullYear()] = []
    }
    organizedPosts[post.fields.date.getFullYear()].push(post)
  })

  return (
    <Layout>
      <ul css={style}>
        {Object.entries(organizedPosts).map(([year, yearPosts]) => (
          <li key="year">
            <h2>{year}</h2>
            <ul>
              {yearPosts.map(({ id, fields: { slug, date }, fileAbsolutePath, frontmatter: { title } }) => (
                <li key={id}>
                  <span>
                    {`${formatter.format(date)} ${date.getDate()}`}
                  </span>
                  &nbsp;
                  <span>
                    <Link to={slug}>
                      {title}
                    </Link>
                  </span>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </Layout>
  )
}
export default IndexPage
export const pageQuery = graphql`
  query {
    allMdx(sort: {order: DESC, fields: [frontmatter___title]}) {
      edges {
        node {
          id
          fileAbsolutePath
          frontmatter {
            title
            date
          }
          fields {
            slug
            date
          }
          excerpt
          tableOfContents
          timeToRead
        }
      }
    }
  }
`
