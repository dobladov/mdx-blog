import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import { css } from '@emotion/core'
import Layout from './layout'

const style = css`
    a {
        color: #F9FFEE;
    }
`

const PostLayout = ({ pageContext, children }) => (
  <Layout>
    <section css={style}>
      {console.log(pageContext)}
      <h1>{pageContext.frontmatter.title}</h1>
      {children}
    </section>
  </Layout>
)

export default PostLayout
