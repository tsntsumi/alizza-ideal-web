import React from "react"
import { MDXProvider } from "@mdx-js/react"
import { CodeBlock } from "./src/components/CodeBlock"

import "./src/style/global.css"

/* eslint-disable */
const component = {
    code: (props) => <CodeBlock {...props} />,
}

export const wrapRootElement = ({ element }) => {
    return <MDXProvider components={component}>{element}</MDXProvider>
}
