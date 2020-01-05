import React from 'react'
import PropTypes from 'prop-types'

import { graphql, Link } from 'gatsby'
import { css } from '@emotion/core'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { Calendar, Clock, Tag } from 'react-feather'
import Layout from './layout'
import SEO from '../components/seo'
import ScrollUp from '../components/ScrollUp'
import Img from 'gatsby-image'

const formatter = new Intl.DateTimeFormat('en', { month: 'long' })

const style = css`
  .tags {
    display: inline-block;
    
    li {
      display: inline-block;
    }
  }

  .date {
    font-size: 1.5rem;
    display: flex;
    align-items: center;
  }
  
  .toc ul {
    padding-left: 20px;
  }

  .contains-task-list {
    list-style-type: none;
    padding: 0;
  }

  table {
    border-spacing: 0;
    border-collapse: collapse;
    text-align: left;

    th,
    td {
      padding: 6px;
      border-bottom: .05rem solid var(--text);
    }

    th {
      border-bottom: .05rem solid var(--text);
    }
  }

  p {
    text-align: justify;
  }

  .date,
  .timeToRead,
  .tagsContainer {
    display: flex;
    align-items: center;
    margin-bottom: 10px;

    .icon {
      margin-right: 10px;
    }
  }

  .hook {
    margin-top: 0;
    font-weight: 400;
    text-align: left;
    font-size: 1.5rem;
    line-height: 2rem;
    margin-bottom: 60px;
  }

  .extra {
    margin-top: 40px;
    font-size: .9rem;
    display: flex;
    justify-content: space-between;
  }
`

const toc = (items) => (
  <ul role="feed">
    {items.map(item => (
      <li key={item.link}>
        <a rel="toc" href={item.url}>{item.title}</a>
        {item.items && (
          toc(item.items)
        )}
      </li>
    ))}
  </ul>
)

const getFilePath = (fileAbsolutePath) => {
  const start = fileAbsolutePath.indexOf('content')
  return fileAbsolutePath.slice(start)
}

const PostLayout = ({ data: { site: { siteMetadata: { repositoryUrl } }, mdx } }) => {
  const date = new Date(mdx.fields.date)

  const featuredImage = (mdx.frontmatter.featuredImage &&
    mdx.frontmatter.featuredImage.childImageSharp &&
    mdx.frontmatter.featuredImage.childImageSharp.fluid) || null

  return (
    <Layout>
      <SEO title={mdx.frontmatter.title} description={mdx.excerpt} />
      <section css={style} className="double">
        <h1 className="title">{mdx.frontmatter.title}</h1>
        <article className="content">
          {mdx.frontmatter.hook && (
            <p className="hook">{mdx.frontmatter.hook}</p>
          )}

          {featuredImage && (
            <Img fluid={featuredImage} />
          )}

          <MDXRenderer>{mdx.body}</MDXRenderer>

          <div className="extra">
            <a rel="license" href="https://creativecommons.org/licenses/by-sa/4.0/">
              CC BY-SA 4.0
            </a>
            <span>
              Did I make a mistake? Please consider <a href={`${repositoryUrl}${getFilePath(mdx.fileAbsolutePath)}`}> sending a pull request</a>.
            </span>
          </div>

        </article>
        <aside>
          <div className="date">
            <Calendar aria-hidden="true" className="icon" />
            {`${date.getDate()} ${formatter.format(date)} ${date.getFullYear()}`}
          </div>
          <div className="timeToRead">
            <Clock aria-hidden="true" className="icon" />
            Time to read: {mdx.timeToRead} minutes
          </div>
          {mdx.frontmatter.tags && (
            <div className="tagsContainer">
              <Tag aria-hidden="true" className="icon" />
              <ul className="tags unstyledList">
                {mdx.frontmatter.tags.map((tag, i) => (
                  <li key={tag}>
                    <span aria-hidden="true">#</span>
                    <Link
                      to={`/tags/${tag}`}
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
            </div>
          )}

          {mdx.tableOfContents.items && (
            <div className="toc noLinksDecoration">
              {toc(mdx.tableOfContents.items)}
            </div>
          )}
        </aside>
      </section>
      <ScrollUp />
    </Layout>
  )
}

export const pageQuery = graphql`
  query BlogPostQuery($id: String) {
    site {
      siteMetadata {
        repositoryUrl
      }
    }
    mdx(id: { eq: $id }) {
      body
      fileAbsolutePath
      fields {
        slug
        date
      }
      frontmatter {
        title
        tags
        hook
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 1000, toFormat: WEBP, quality: 90) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      excerpt
      tableOfContents
      timeToRead
    }
  }
`

PostLayout.propTypes = {
  data: PropTypes.objectOf(PropTypes.any).isRequired
}

export default PostLayout
