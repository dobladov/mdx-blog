import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import SEO from '../components/seo'
import Layout from '../components/layout'
import Tags from '../components/Tags'

const tags = ({
  data: {
    allMdx: { group }
  }
}) => {
  return (
    <Layout>
      <SEO title="Blog tags" description="All tags" />
      <section className="double">
        <h1 className="title">Blog tags</h1>
        <Tags className="content" tags={group} />
      </section>
    </Layout>
  )
}
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

tags.propTypes = {
  data: PropTypes.objectOf(PropTypes.any).isRequired
}

export default tags
