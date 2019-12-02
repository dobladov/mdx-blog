import React from 'react'
import PropTypes from 'prop-types'
import { graphql, Link } from 'gatsby'
import { css } from '@emotion/core'

import SEO from '../components/seo'
import Layout from '../components/layout'
import Tags from '../components/Tags'

const formatter = new Intl.DateTimeFormat('en', { month: 'short' })

const style = css`
  ul {
    max-width: 1000px;
    grid-area: content;
  }

  h1 {
    font-size: 3.7em;
    font-weight: 200;
    margin-top: 0;
    font-family: 'Text Me One', sans-serif;
    grid-area: title;
  }

  aslide {
    grid-area: side;
  }

  > ul {
    padding-left: 40px;
    
    li:first-child h2 {
      margin-top: 0;
    }
  }
`

const blog = ({
  data: {
    allMdx: { edges },
    tags: { group: tags }
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
      <SEO title="Recent Blog Posts" description="All blog posts" />
      <section css={style} className="double">
        <h1 className="title">Recent Blog Posts</h1>
        <ul className="content unstyledList">
          {Object.entries(organizedPosts).map(([year, yearPosts]) => (
            <li key={year}>
              <h2>{year}</h2>
              <ul>
                {yearPosts.map(({ id, fields: { slug, date }, frontmatter: { title } }) => (
                  <li key={id}>
                    <time dateTime={date.toISOString()}>
                      {`${formatter.format(date)} ${date.getDate()}`}
                    </time>
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
        <aside>
          <Tags tags={tags} />
        </aside>
      </section>
    </Layout>
  )
}
export default blog
export const pageQuery = graphql`
  query {
    allMdx(sort: {order: DESC, fields: [frontmatter___title]}) {
      edges {
        node {
          id
          frontmatter {
            title
            date
          }
          fields {
            slug
            date
          }
        }
      }
    }

    tags: allMdx {
      group(field: frontmatter___tags) {
        tag: fieldValue
        totalCount
      }
    }
  }
`

blog.propTypes = {
  data: PropTypes.objectOf(PropTypes.any).isRequired
}
