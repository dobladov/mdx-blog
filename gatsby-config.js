const slug = require('remark-slug')
const emoji = require('remark-emoji')
const highlight = require('remark-highlight.js')

module.exports = {
  siteMetadata: {
    title: 'Odyssey Codes',
    description: 'I&apos;m a Front-end Developer currently based in Berlin 🇩🇪, with true passion for open-source and building better platforms.',
    author: '@dobladev'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`
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
        icon: 'src/images/logo256.png' // This path is relative to the root of the site.
      }
    },
    'gatsby-plugin-emotion',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        remarkPlugins: [highlight, slug, emoji]
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'posts',
        path: `${__dirname}/src/posts`
      }
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://www.example.com',
        sitemap: 'https://www.example.com/sitemap.xml',
        env: {
          development: {
            policy: [{ userAgent: '*', disallow: ['/'] }]
          },
          production: {
            policy: [{ userAgent: '*', allow: '/' }]
          }
        }
      }
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ]
}
