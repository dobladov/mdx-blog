import React, { useState, useEffect } from 'react'
import { ChevronsUp } from 'react-feather'
import { css } from '@emotion/core'

const style = css`
  position: fixed;
  bottom: 20px;
  right: 20px;
`

const ScrollUp = props => {
  const [showUp, setShowUp] = useState(true)

  useEffect(() => {
    window.addEventListener('scroll', (e) => {
      if (window.scrollY > 100) {
        setShowUp(true)
      } else {
        setShowUp(false)
      }
    })
    setShowUp(false)
  }, [])

  return showUp ? (
    <a
      href="#"
      title="Go Up"
      aria-hidden="true"
    >
      <ChevronsUp css={style} />
    </a>
  ) : null
}

export default ScrollUp
