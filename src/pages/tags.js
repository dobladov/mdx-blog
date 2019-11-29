import React from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../components/layout'
import Tags from '../components/Tags'

const IndexPage = ({
  data: {
    allMdx: { group }
  }
}) => {
  return (
    <Layout>
      <Tags tags={group} />
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
