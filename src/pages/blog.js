import React from 'react'
import { graphql, Link } from 'gatsby'

// import PostLink from '../components/post-link'
import Layout from '../components/layout'
const IndexPage = ({
  data: {
    allMdx: { edges }
  }
}) => {
  const posts = edges.map(edge => edge.node)

  return (
    <Layout>
      {posts.map(({ id, fileAbsolutePath, frontmatter: { title } }) => (
        <h1 key={id}>
          <Link to={fileAbsolutePath.split('/').slice(-1)[0].split('.')[0]}>
            {title}
          </Link>
        </h1>
      ))}
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
          }
          excerpt
          tableOfContents
          timeToRead
        }
      }
    }
  }
`
