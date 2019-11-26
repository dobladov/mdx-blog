import React from 'react'
import { Link } from 'gatsby'
import Layout from './layout'

const formatter = new Intl.DateTimeFormat('en', { month: 'short' })

const tag = ({ pageContext: { tag, nodes } }) => {
  return (
    <Layout>
      <h2>#{tag}</h2>
      <ul>
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
    </Layout>
  )
}

export default tag
