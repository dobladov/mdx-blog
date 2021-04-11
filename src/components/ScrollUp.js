import React, { useState, useEffect } from 'react'
import { ChevronsUp } from 'react-feather'
import { css } from '@emotion/react'

const style = css`
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: var(--main-bg);
  border-radius: 50%;
  border: 1px solid var(--main-bg-contrast);
`

const progressStyle = css`
  position: fixed;
  top: 0;
  left: 0;
  height: 4px;
  background-color: var(--contrast);
`

const ScrollUp = props => {
  const [showUp, setShowUp] = useState(true)
  const [readPercentage, setReadPercentage] = useState(0)

  useEffect(() => {
    window.addEventListener('scroll', (e) => {
      const currentScroll = window.scrollY

      if (currentScroll > 100) {
        setShowUp(true)
      } else {
        setShowUp(false)
      }

      const scrollPercent = `${currentScroll / window.scrollMaxY * 100}%`
      setReadPercentage(scrollPercent)
    })
    setShowUp(false)
  }, [])

  return showUp
    ? (
    <>
      <a
        href="#"
        title="Go Up"
        aria-hidden="true"
      >
        <ChevronsUp
          css={style}
          width="60px"
          height="60px"
        />
      </a>

      <div
        css={progressStyle}
        className="progress"
        style={{ width: readPercentage }}
      ></div>
    </>
      )
    : null
}

export default ScrollUp
