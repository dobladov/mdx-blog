import React from 'react'
import { graphql, Link } from 'gatsby'

import SEO from '../components/seo'
import Layout from '../components/layout'
import Tags from '../components/Tags'

const IndexPage = ({
  data: {
    allMdx: { group }
  }
}) => {
  return (
    <Layout>
      <SEO title="Blog tags" description="All tags" />
      <section className="double">
        <h1 className="title">Blog tags</h1>
        <Tags className="contnet" tags={group} />
      </section>
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
