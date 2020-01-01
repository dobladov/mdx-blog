const fs = require('fs')
const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === 'Mdx') {
    const value = createFilePath({ node, getNode })
    const { birthtime } = fs.statSync(node.fileAbsolutePath)

    createNodeField({
      node,
      name: 'slug',
      value: node.frontmatter.slug || `/blog${value}`
    })

    createNodeField({
      node,
      name: 'date',
      value: node.frontmatter.date || birthtime.toISOString()
    })
  }
}

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  // Create MDX pages
  const result = await graphql(`
    query {
      allMdx {
        edges {
          node {
            id
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query')
  }

  const posts = result.data.allMdx.edges

  posts.forEach(({ node }, index) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve('./src/components/posts.js'),
      context: { id: node.id }
    })
  })

  // Get all tags
  const tagsQuery = await graphql(`
    query {
      allMdx {
        group(field: frontmatter___tags) {
          tag: fieldValue
          totalCount
          nodes {
            id
            fields {
              slug
              date
            }
            frontmatter {
              title
            }
          }
        }
      }
    }
  `)

  tagsQuery.data.allMdx.group.forEach(tagGroup => {
    const { tag } = tagGroup

    createPage({
      path: `/tags/${tag}`,
      component: path.resolve('./src/components/tag.js'),
      context: tagGroup
    })
  })
}
