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
        }
      }
    }
  `)

  tagsQuery.data.allMdx.group.forEach(async tagGroup => {
    const { tag } = tagGroup

    // For each tag create a page with the containing posts
    const tagsQuery = await graphql(`
      query {
        allMdx(filter: {frontmatter: {tags: {eq: "${tag}"}}}) {
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
    `)

    createPage({
      path: `/tags/${tag}`,
      component: path.resolve('./src/components/tag.js'),
      context: { tag, nodes: tagsQuery.data.allMdx.nodes }
    })
  })
}

exports.onPostBuild = async ({ graphql }) => {
  const pathsQuery = await graphql(`
    query  {
      allSitePage {
        edges {
          node {
            path
          }
        }
      }
    }
  `)

  pathsQuery.data.allSitePage.edges.forEach(edge => {
    console.log(edge.node.path)
  })

  const urls = pathsQuery.data.allSitePage.edges.filter(edge => !edge.node.path.includes('404')).map(edge => (
    `
    <url>
    <loc>https://${edge.node.path}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.5</priority>
    </url>
    `
  ))

  const sitemap = `
    <?xml-stylesheet type="text/xsl" href="/sitemap.xsl"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${urls.join('\n')}
    </urlset>
  `

  const sitemapStyle = `
    <xsl:stylesheet version="2.0" 
      xmlns:html="http://www.w3.org/TR/REC-html40"
      xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
      xmlns:sitemap="http://www.sitemaps.org/schemas/sitemap/0.9"
      xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
    >
      <xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes"/>
      <xsl:template match="/">
        <html xmlns="http://www.w3.org/1999/xhtml">
          <head>
            <title>Sitemap | </title>
            <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
            
            <style type="text/css">
            </style>
          </head>
          <body>
            <div class="wrapper">
              <h1>
                <a href="/">
                  XML Sitemap
                </a>
              </h1>
              <table id="sitemap" cellpadding="3">
                <thead>
                  <tr>
                    <th width="75%">
                      URL (<xsl:value-of select="count(sitemap:urlset/sitemap:url)"/> total)
                    </th>
                    <th width="5%">Priority</th>
                    <th width="5%">Images</th>
                    <th width="5%">Change Freq.</th>
                    <th width="10%">Last Change</th>
                  </tr>
                </thead>
                <tbody>
                  <xsl:variable name="lower" select="'abcdefghijklmnopqrstuvwxyz'"/>
                  <xsl:variable name="upper" select="'ABCDEFGHIJKLMNOPQRSTUVWXYZ'"/>
                  <xsl:for-each select="sitemap:urlset/sitemap:url">
                    <tr>
                      <td>
                        <xsl:variable name="itemURL">
                          <xsl:value-of select="sitemap:loc"/>
                        </xsl:variable>
                        <a href="{$itemURL}">
                          <xsl:value-of select="sitemap:loc"/>
                        </a>
                      </td>
                      <td>
                        <xsl:value-of select="concat(sitemap:priority*100,'%')"/>
                      </td>
                      <td>
                        <xsl:value-of select="count(image:image)"/>
                      </td>
                      <td>
                        <xsl:value-of select="concat(translate(substring(sitemap:changefreq, 1, 1),concat($lower, $upper),concat($upper, $lower)),substring(sitemap:changefreq, 2))"/>
                      </td>
                      <td>
                        <xsl:value-of select="concat(substring(sitemap:lastmod,0,11),concat(' ', substring(sitemap:lastmod,12,5)))"/>
                      </td>
                    </tr>
                  </xsl:for-each>
                </tbody>
              </table>
            </div>
          </body>
        </html>
      </xsl:template>
    </xsl:stylesheet>
    `

  fs.writeFile('public/sitemap.xml', sitemap, (err) => {
    if (err) throw err
    console.log('The file has been saved!')
  })

  fs.writeFile('public/sitemap.xsl', sitemapStyle, (err) => {
    if (err) throw err
    console.log('The file has been saved!')
  })
}

//
