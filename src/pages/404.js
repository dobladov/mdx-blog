import React from 'react'
import { css } from '@emotion/core'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import AhShit from '../../content/assets/AhShit.png'

const style = css`
  max-width: 1000px;
  margin: 0 auto;

  img {
    position: absolute;
    bottom: 0;
    right: 0;
    z-index: -1;
    max-height: 90vh;
  }

  h2 {
    font-size: 3rem;
    font-weight: 400;
  }

  p {
    font-size: 2rem;
  }
`

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <div
      css={style}
    >
      <h1 className="title">NOT FOUND</h1>
      <h2>You picked the wrong <b>URL</b>, fool!</h2>
      <p>AY, AY AY AY! Go back to <Link to="/">home</Link>, chill, chill!</p>
      <img
        src={AhShit}
        alt="Ah shit here we go again."
      />
    </div>
  </Layout>
)

export default NotFoundPage
