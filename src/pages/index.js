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

const layoutStyle = css`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

const wrapperStyle = css`
  flex: 1;
  min-height: 100%;
  display: flex;
  align-items: center;
  
  main {
    flex: 1;
    margin: 0 auto;
  }
`

const IndexPage = () => (
  <Layout
    css={layoutStyle}
    wrapperStyle={wrapperStyle}
  >
    <SEO
      title="Hello!"
      description="I&apos;m a Web Developer currently based in Berlin 🇩🇪, with true passion for Open-source and building better platforms."
    />
    <section css={style}>
      <h1 className="title">Hello!</h1>

      <p>My name is <b>Daniel Doblado</b>, originally from Spain, I&apos;m a Web Developer currently based in <b>Berlin 🇩🇪</b>, with true passion for Open-source and building better platforms.</p>
      <p>From time to time I <a target="_blank" rel="noopener noreferrer" href="https://github.com/dobladov/">develop</a> some <Link to="/projects">projects</Link> or <Link to="/blog">write</Link> about them. </p>
      {/* <p> Have a look at my <Link to="/resume" >resume</Link>.</p> */}

      <p>Say Hi! <a href="mailto:danieldoblado@gmail.com">danieldoblado@gmail.com</a> </p>
    </section>
  </Layout>
)

export default IndexPage
