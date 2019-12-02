import React from "react"
import { css } from '@emotion/core'
import { Link } from 'gatsby'

import Layout from "../components/layout"
import SEO from "../components/seo"

const style = css`
  max-width: 1000px;
  margin: 0 auto;
  font-size: 2.3rem;
  font-size: calc(28px + 0.25vw);


  h1 {
    margin: 0;
  }
`

const IndexPage = () => (
  <Layout>
    <SEO
      title="Hello!"
    />
    <section css={style}>
      <h1 className="title">Hello!</h1>
      <p>I'm a Front-end Developer currently based in Berlin 🇩🇪, with true passion for open-source and building better platforms.</p>
      <p>Sometimes I <a target="_blank" href="https://github.com/dobladov/">develop</a> some <Link to="/projects">projects</Link> or <Link to="/blog">write</Link> about them.</p>
    </section>
  </Layout>
)

export default IndexPage
