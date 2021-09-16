import React from "react"
import Highlight, { defaultProps } from "prism-react-renderer"
import theme from "prism-react-renderer/themes/github"
import Prism from "prism-react-renderer/prism"
import { mdx } from "@mdx-js/react"

export const CodeBlock = (props) => {
    const className = props.className || ""
    const matches = className.match(/language-(?<lang>.*)/)
    const language =
        matches && matches.groups && matches.groups.lang
            ? matches.groups.lang
            : ""

    return (
        <Highlight {...defaultProps} code={children} language={language}>
            {({ className, style, tokens, getLineProps, getTokenProps }) => (
                <pre
                    className={className}
                    style={{
                        ...style,
                        padding: "20px",
                        fontSize: "1rem",
                        fontFamily: "monospace",
                        paddingBottom: "0px",
                        marginLeft: "1.2rem",
                        marginRight: "1.2rem",
                    }}
                >
                    {tokens.map((line, index) => {
                        const lineProps = getLineProps({ line, key: index })
                        return (
                            <div key={index} {...lineProps}>
                                {line.map((token, key) => (
                                    <span
                                        key={key}
                                        {...getTokenProps({ token, key })}
                                    />
                                ))}
                            </div>
                        )
                    })}
                </pre>
            )}
        </Highlight>
    )
}

export default CodeBlock
