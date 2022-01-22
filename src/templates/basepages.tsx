import React from "react"
import Layout from "../components/layout"
import { graphql, PageProps } from "gatsby"
import recommended from "remark-preset-lint-recommended"
import remarkHtml from "remark-html"
import { ArrowDown, ArrowDownCircle } from "react-feather"
import { ArrowLeft, ArrowRight } from "react-feather"
import { ArrowUp, ArrowUpCircle } from "react-feather"
import { Avatar } from "../components/Avatar"
import { Button, Offer, CtaButton } from "../components/ui"
import { CodeBlock } from "../components/CodeBlock"
import { FileImage } from "../components/file-image"
import { Link } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { remark } from "remark"
import { ContentsQuery } from "./ContentsQuery"

const components = {
    ArrowDown: ArrowDown,
    ArrowDownCircle: ArrowDownCircle,
    ArrowUp: ArrowUp,
    ArrowUpCircle: ArrowUpCircle,
    ArrowLeft: ArrowLeft,
    ArrowRight: ArrowRight,
    Avatar: Avatar,
    Button: Button,
    CtaButton: CtaButton,
    code: CodeBlock,
    Link: Link,
    FileImage: FileImage,
}

export default function basePages({
    data,
    location,
}: PageProps<ContentsQuery, {}>) {
    const description = remark()
        .use(recommended)
        .use(remarkHtml)
        .processSync(data.mdx.frontmatter.description)
        .toString()
    const images = data.allFile.edges.reduce((acc, edge) => {
        acc[edge.node?.base] = {
            image: edge.node.childImageSharp?.gatsbyImageData,
            base: edge.node?.base,
            name: edge.node?.name,
            ext: edge.node?.ext,
            publicURL: edge.node?.publicURL,
        }
        return acc
    }, {})

    return (
        <Layout
            seo={{
                title: data.mdx.frontmatter.title,
                description: data.mdx.frontmatter.description,
                image:
                    data.mdx.frontmatter.image?.publicURL ||
                    data.mdx.frontmatter.banner?.publicURL,
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
                        <MDXRenderer images={images}>
                            {data.mdx.body}
                        </MDXRenderer>
                    </MDXProvider>
                </div>
            </div>
        </Layout>
    )
}

export const query = graphql<ContentsQuery>`
    query BasePagesQuery(
        $slug: String!
        $relativeDirectory: String!
        $sourceInstanceName: String!
    ) {
        mdx(fields: { slug: { eq: $slug } }) {
            body
            frontmatter {
                title
                image {
                    publicURL
                }
                banner {
                    publicURL
                }
                description
            }
        }
        allFile: allFile(
            filter: {
                ext: { ne: ".mdx" }
                sourceInstanceName: { in: [$sourceInstanceName, "images"] }
                relativeDirectory: { in: [$relativeDirectory, ""] }
            }
        ) {
            edges {
                node {
                    relativeDirectory
                    sourceInstanceName
                    childImageSharp {
                        gatsbyImageData(
                            breakpoints: [98, 128, 256, 512]
                            placeholder: BLURRED
                            layout: CONSTRAINED
                            quality: 8
                        )
                    }
                    base
                    name
                    ext
                    publicURL
                }
            }
        }
    }
`
