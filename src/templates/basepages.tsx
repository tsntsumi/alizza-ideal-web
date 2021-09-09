import React from "react"
import { graphql, PageProps } from "gatsby"
import Layout from "../components/layout"
import recommended from "remark-preset-lint-recommended"
import remarkHtml from "remark-html"
import { ArrowLeft, ArrowRight } from "react-feather"
import { BasePagesQuery } from "./__generated__/BasePagesQuery"
import { Button, Offer, CtaButton } from "../components/ui"
import { CodeBlock } from "../components/CodeBlock"
import { FileImage } from "../components/file-image"
import { Link } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { remark } from "remark"
import { Avatar } from "../components/Avatar"

const components = {
    ArrowLeft: ArrowLeft,
    ArrowRight: ArrowRight,
    Avatar: ({ name, type, post, ...props }) => {
        return (
            <Avatar
                name={name || "avatar.png"}
                type={type || "images"}
                post={post || ""}
                {...props}
            />
        )
    },
    Button: Button,
    CtaButton: CtaButton,
    code: CodeBlock,
    Link: Link,
    Offer: Offer,
    FileImage: props => <FileImage {...props} />,
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
