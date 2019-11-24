import React from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
// import { dracula } from 'react-syntax-highlighter/dist/esm/styles/hljs'
import { duotoneDark } from 'react-syntax-highlighter/dist/esm/styles/prism'

const Code = ({ children, language }) => {
  return (
    <SyntaxHighlighter language="javascript" style={duotoneDark}>
      {children}
    </SyntaxHighlighter>
  )
}

export default Code
