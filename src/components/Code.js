import React from 'react'
import PropTypes from 'prop-types'

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
// import { dracula } from 'react-syntax-highlighter/dist/esm/styles/hljs'
import { duotoneDark } from 'react-syntax-highlighter/dist/esm/styles/prism'

const Code = ({ children, language }) => {
  return (
    <SyntaxHighlighter language={language} style={duotoneDark}>
      {children}
    </SyntaxHighlighter>
  )
}

Code.propTypes = {
  children: PropTypes.node.isRequired,
  language: PropTypes.string
}

Code.defaultProps = {
  language: undefined
}

export default Code
