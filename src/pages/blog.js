import React from 'react'
import PropTypes from 'prop-types'
import { graphql, Link } from 'gatsby'
import { css } from '@emotion/react'
import { Tag } from 'react-feather'
// import Img from 'gatsby-image'

import SEO from '../components/seo'
import Layout from '../components/layout'
import Tags from '../components/Tags'

const formatter = new Intl.DateTimeFormat('en', { month: 'long' })

const style = css`
  ul {
    max-width: 1000px;
    grid-area: content;
    list-style-type: none;
    padding: 0;
  }

  h2 {
    font-weight: 100;
  }

  h3 {
    margin: 0;
    font-size: 1.8rem;
  }

  aside {
    grid-area: side;

    .tagsContainer {
      display: flex;
      align-items: flex-start;

      svg {
        position: relative;
        top: 5px;
        min-width: 24px;
        margin-right: 10px;
      }
    }
  }

  > ul {
    list-style-type: none;

    .post {
      margin-bottom: 40px;

      .gatsby-image-wrapper {
        margin-right: 40px;
        border-radius: 2px;
        min-width: 350px;
      }
    }

    li:first-child h2 {
      margin-top: 0;
    }

    .time {
      display: flex;
      align-items: center;

      time {
        color: var(--subtle);
        font-size: 1.6rem;
      }

      svg {
        margin-right: 10px;
      }
    }
  }

  .hook {
    margin: 0;
    font-size: 1.4rem;
  }

  @media (min-width: 900px) {
    > ul {
      padding-left: 10px;
    }

    .post {
      display: flex;
      padding-left: 20px;
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
  posts.forEach(post => {
    if (!organizedPosts[post.fields.date.getFullYear()]) {
      organizedPosts[post.fields.date.getFullYear()] = []
    }
    organizedPosts[post.fields.date.getFullYear()].push(post)
  })

  console.log(organizedPosts)

  return (
    <Layout>
      <SEO title="Articles" description="All blog posts" />
      <section css={style} className="double">
        <h1 className="title">Articles</h1>
        <ul className="content unstyledList">
          {Object.entries(organizedPosts)
            .sort(([y1], [y2]) => +y2 - +y1)
            .map(([year, yearPosts]) => (
              <li key={year}>
                <h2>{year}</h2>
                <ul>
                  {yearPosts.map(({ id, excerpt, fields: { slug, date }, frontmatter: { title, hook } }) => (
                    <li key={id} className="post">
                      {/* {featuredImage && (
                        <div style={{ maxHeight: `150px`, marginBottom: `1.45rem` }} className="gatsby-image-wrapper">
                          <Img fixed={featuredImage.childImageSharp.fixed} style={{maxHeight: '100%'}} />
                        </div>
                      )} */}
                      <div>
                        <div className="time">
                          <time dateTime={date.toISOString()}>
                            {`${formatter.format(date)} ${date.getDate()}`}
                          </time>
                        </div>
                        <span>
                          <Link to={slug}>
                            <h3>
                              {title}
                            </h3>
                          </Link>
                          <p className="hook">{hook || excerpt}</p>
                        </span>
                      </div>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
        </ul>
        <aside>
          <div className="tagsContainer" >
            <Tag
              aria-hidden="true"
            />
            <Tags tags={tags} />
          </div>
        </aside>
      </section>
    </Layout>
  )
}
export default blog
export const pageQuery = graphql`
  query {
    allMdx(sort: {order: DESC, fields: [fields___date]}) {
      edges {
        node {
          id
          excerpt
          frontmatter {
            title
            date
            hook
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
