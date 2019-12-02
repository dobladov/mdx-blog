import React from 'react'
import { Link } from 'gatsby'

import SEO from '../components/seo'
import Layout from './layout'

const formatter = new Intl.DateTimeFormat('en', { month: 'short' })

const tag = ({ pageContext: { tag, nodes } }) => {
  return (
    <Layout>
      <SEO title={`Posts with label #${tag}`} description={`All blog posts tagged #${tag}`} />
      <section className="double">
        <h1 className="title">Posts with tag #{tag}</h1>
        <ul className="content">
          {nodes.map(node => (
            <li key={node.id}>
              <span>
                {`${formatter.format(new Date(node.fields.date))} ${new Date(node.fields.date).getDate()}`}
              </span>
                    &nbsp;
              <Link to={node.fields.slug}>
                {node.frontmatter.title}
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}

export default tag
