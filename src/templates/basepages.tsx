import React from "react"
import { graphql, PageProps } from "gatsby"
import Avatar from "../components/Avatar"
import Layout from "../components/layout"
import recommended from "remark-preset-lint-recommended"
import remarkHtml from "remark-html"
import { ArrowLeft, ArrowRight } from "react-feather"
import { BasePagesQuery } from "./__generated__/BasePagesQuery"
import { Button, Offer, Cta } from "../components/ui"
import { CodeBlock } from "../components/CodeBlock"
import { Link } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { remark } from "remark"

const components = {
    ArrowLeft: ArrowLeft,
    ArrowRight: ArrowRight,
    Avatar: Avatar,
    Button: Button,
    Cta: Cta,
    code: CodeBlock,
    Link: Link,
    Offer: Offer,
    h1: props => <h1 {...props} className="text-color-1" />,
    h2: props => <h2 {...props} className="text-color-1" />,
    h3: props => <h3 {...props} className="text-color-1" />,
    h4: props => <h4 {...props} className="text-color-1" />,
    h5: props => <h5 {...props} className="text-color-1" />,
    h6: props => <h6 {...props} className="text-color-1" />,
}

export default function basePages({
    data,
    location,
}: PageProps<BasePagesQuery, {}>) {
    const description = remark()
        .use(recommended)
        .use(remarkHtml)
        .processSync(data.mdx.frontmatter.description)
        .toString()
    return (
        <Layout
            seo={{
                title: data.mdx.frontmatter.title,
                description: data.mdx.frontmatter.description,
                image: data.mdx.frontmatter.image?.publicURL,
            }}
            location={location}
        >
            <div className="boxed">
                <div className="title py-12 text-center">
                    <h2 className="font-black text-5xl text-color-1">
                        {data.mdx.frontmatter.title}
                    </h2>
                </div>
                <div className="post-content px-4 lg:px-24 md:px-8 pb-12 text-justify">
                    <MDXProvider components={components}>
                        <MDXRenderer>{data.mdx.body}</MDXRenderer>
                    </MDXProvider>
                </div>
            </div>
        </Layout>
    )
}

export const query = graphql`
    query BasePagesQuery($slug: String!) {
        mdx(fields: { slug: { eq: $slug } }) {
            body
            frontmatter {
                title
                image {
                    publicURL
                }
                description
            }
        }
    }
`
