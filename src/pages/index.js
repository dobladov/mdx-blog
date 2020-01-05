import React from 'react'
import { css } from '@emotion/core'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

const style = css`
  max-width: 1000px;
  margin: 0 auto;
  font-size: 2.3rem;
  font-size: calc(28px + 0.25vw);

  h1 {
    margin: 0;
    line-height: 100%;
  }

  .important {
    color: var(--important);
    font-size: calc(30px + 0.25vw);
  }
`

const IndexPage = () => (
  <Layout>
    <SEO
      title="Hello!"
      description="I&apos;m a Front-end Developer currently based in Berlin 🇩🇪, with true passion for Open-source and building better platforms."
    />
    <section css={style}>
      <h1 className="title">Hello!</h1>

      <p>My name is <b>Daniel Doblado</b>, originally from Spain, I&apos;m a Front-end Developer currently based in <b>Berlin 🇩🇪</b>, with true passion for Open-source and building better platforms.</p>
      <p>From time to time I <a target="_blank" rel="noopener noreferrer" href="https://github.com/dobladov/">develop</a> some <Link to="/projects">projects</Link>.</p>
      {/* or <Link to="/blog">write</Link> about them. */}
      <p className="important">I&apos;m looking for a new full-time position in Berlin or remote.</p>
      <p> Have a look at my <Link to="/resume" >resume</Link>.</p>

      <p>Say Hi! <a href="mailto:danieldoblado@gmail.com">danieldoblado@gmail.com</a> </p>
    </section>
  </Layout>
)

export default IndexPage
