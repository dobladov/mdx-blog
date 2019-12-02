import React from 'react'
import { graphql, Link } from 'gatsby'
import { css } from '@emotion/core'
import { MDXRenderer } from 'gatsby-plugin-mdx'

import Layout from './layout'
import SEO from '../components/seo'


const formatter = new Intl.DateTimeFormat('en', { month: 'long' })

const style = css`
  .tags {
    li {
      display: inline-block;
    }
  }

  article {
    font-size: 1.4rem;
  }

  .date {
    font-size: 1.5rem;
  }
  
  .toc ul {
    padding-left: 20px;
  } 
`

const toc = (items) => (
  <ul>
    {items.map(item => (
      <li key={item.link}>
        <a href={item.url}>{item.title}</a>
        {item.items && (
          toc(item.items)
        )}
      </li>
    ))}
  </ul>
)

const PostLayout = ({ data: { mdx } }) => {
  const date = new Date(mdx.fields.date)

  return (
    <Layout>
      <SEO title={mdx.frontmatter.title} description={mdx.excerpt} />
      <section css={style} className="double">
        <h1 className="title">{mdx.frontmatter.title}</h1>
        <article className="content">
          <MDXRenderer>{mdx.body}</MDXRenderer>
        </article>
        <aside>
          <div className="date">
            {`${date.getDate()} ${formatter.format(date)} ${date.getFullYear()}`}
          </div>
          <div>
              Time to read: {mdx.timeToRead} minutes
          </div>
          {mdx.frontmatter.tags && (
            <ul className="tags unstyledList">
              {mdx.frontmatter.tags.map((tag, i) => (
                <li>
                  #
                  <Link
                    to={`/tags/${tag}`}
                    key={tag}
                  >
                    {tag}
                  </Link>
                  {(i < mdx.frontmatter.tags.length - 1) && (
                    <>
                      &#44;
                      &nbsp;
                    </>
                  )}
                </li>
              ))}
            </ul>
          )}

          {mdx.tableOfContents.items && (
            <div className="toc">
              {toc(mdx.tableOfContents.items)}
            </div>
          )}
        </aside>
      </section>
    </Layout>
  )
}

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
        tags
      }
      excerpt
      tableOfContents
      timeToRead
    }
  }
`

export default PostLayout
