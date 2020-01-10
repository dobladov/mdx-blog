const emoji = require('remark-emoji')
const highlight = require('remark-highlight.js')

const siteUrl = 'https://odyssey.codes'
const title = 'Odyssey Codes'

module.exports = {
  siteMetadata: {
    title,
    description: 'I\'m a Front-end Developer currently based in Berlin 🇩🇪, with true passion for open-source and building better platforms.',
    author: '@odysseycodes',
    siteUrl,
    repositoryUrl: 'https://github.com/dobladov/mdx-blog/edit/master/'
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content/blog`,
        name: 'blog'
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content/assets`,
        name: 'assets'
      }
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /.svg$/
        }
      }
    },
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        extensions: ['.mdx', '.md'],
        plugins: [
          'gatsby-remark-images'
        ],
        gatsbyRemarkPlugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 1000,
              quality: 90,
              withWebp: true
            }
          },
          {
            resolve: 'gatsby-remark-copy-linked-files'
          },
          {
            resolve: 'gatsby-remark-smartypants'
          },
          {
            resolve: 'gatsby-remark-autolink-headers'
          }
        ],
        remarkPlugins: [highlight, emoji]
      }
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Daniel Doblado',
        short_name: 'DobladoV',
        developer: {
          name: 'Daniel Doblado',
          url: 'https://github.com/dobladov'
        },
        lang: 'en-US',
        start_url: '/',
        background_color: 'hsl(0, 0%, 95%)',
        theme_color: 'hsl(180, 3%, 23%)',
        display: 'minimal-ui',
        icon: 'content/assets/logo256.png'
      }
    },
    'gatsby-plugin-emotion',
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: siteUrl,
        sitemap: `${siteUrl}/sitemap.xml`,
        env: {
          development: {
            policy: [{ userAgent: '*', disallow: ['/'] }]
          },
          production: {
            policy: [
              { userAgent: 'ia_archiver', disallow: '/' },
              { userAgent: '*', disallow: '/resume' }
            ]
          }
        }
      }
    },
    {
      resolve: 'gatsby-plugin-feed-mdx',
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMdx } }) => {
              return allMdx.edges.map(edge => {
                return Object.assign({}, edge.node.frontmatter, {
                  description: edge.node.excerpt,
                  date: edge.node.frontmatter.date,
                  url: site.siteMetadata.siteUrl + edge.node.fields.slug,
                  guid: site.siteMetadata.siteUrl + edge.node.fields.slug,
                  custom_elements: [{ 'content:encoded': edge.node.html }]
                })
              })
            },
            query: `
              {
                allMdx(
                  sort: { order: DESC, fields: [frontmatter___date] },
                ) {
                  edges {
                    node {
                      excerpt
                      html
                      fields {
                        slug
                      }
                      frontmatter {
                        title
                        date
                      }
                    }
                  }
                }
              }
            `,
            output: '/rss.xml',
            title: `${title} RSS`,
            match: '^/blog/'
          }
        ]
      }
    },
    'gatsby-plugin-sitemap',
    'gatsby-plugin-react-helmet'
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ]
}
