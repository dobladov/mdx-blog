import React from 'react'
import { graphql } from 'gatsby'
import { css } from '@emotion/core'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import Layout from './layout'
import SEO from '../components/seo'

const style = css`
  .postTitle {
    font-size: 3.7em;
    font-weight: 200;
    margin-top: 0;
    font-family: 'Text Me One', sans-serif;
  }

  article {
    max-width: 1000px;
  }

  a {
    color: #F9FFEE;
  }
`

const toc = (items) => (
  <ul>
    {items.map(item => (
      <li>
        <a href={item.url}>{item.title}</a>
        {item.items && (
          toc(item.items)
        )}
      </li>
    ))}
  </ul>
)

const PostLayout = ({ data: { mdx } }) => (
  <Layout>
    <SEO title={mdx.frontmatter.title} description={mdx.excerpt} />
    <section css={style}>
      <h1 className="postTitle">{mdx.frontmatter.title}</h1>
      <article>
        <MDXRenderer>{mdx.body}</MDXRenderer>
      </article>
      <aside>
        {toc(mdx.tableOfContents.items)}
      </aside>
    </section>
  </Layout>
)

export const pageQuery = graphql`
  query BlogPostQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      fields {
        slug
        date
      }
      frontmatter {
        title
      }
      excerpt
      tableOfContents
      timeToRead
    }
  }
`

export default PostLayout
