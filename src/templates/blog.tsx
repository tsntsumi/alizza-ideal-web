import React from "react"
import Layout from "../components/layout"
import Comments from "../components/comments"
import ItemProduct from "../components/item-product"
import Sticky from "../components/Sticky"
import recommended from "remark-preset-lint-recommended"
import remarkHtml from "remark-html"
import { ArrowDown, ArrowDownCircle } from "react-feather"
import { ArrowLeft, ArrowRight } from "react-feather"
import { ArrowUp, ArrowUpCircle } from "react-feather"
import { Avatar } from "../components/Avatar"
import { Button, Offer, CtaButton } from "../components/ui"
import { Calendar } from "react-feather"
import { CodeBlock } from "../components/CodeBlock"
import { FileImage } from "../components/file-image"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { Row, Col } from "../components/shortcodes/index"
import { Squeeze } from "../components/squeeze"
import { graphql, PageProps } from "gatsby"
import { remark } from "remark"
import { ContentsQuery, imageNode } from "./ContentsQuery"

const components = {
    ArrowDown: ArrowDown,
    ArrowDownCircle: ArrowDownCircle,
    ArrowLeft: ArrowLeft,
    ArrowRight: ArrowRight,
    ArrowUp: ArrowUp,
    ArrowUpCircle: ArrowUpCircle,
    Avatar: Avatar,
    Col: Col,
    CtaButton: CtaButton,
    ItemProduct: ItemProduct,
    Link: Link,
    Offer: Offer,
    Row: Row,
    Sticky: Sticky,
    code: CodeBlock,
    FileImage: FileImage,
}

export default function blog({ data, location }: PageProps<ContentsQuery, {}>) {
    const author = data.mdx.frontmatter.author ?? ""
    const credit = remark()
        .use(recommended)
        .use(remarkHtml)
        .processSync(data.mdx.frontmatter.credit ?? "")
        .toString()
    const description = remark()
        .use(recommended)
        .use(remarkHtml)
        .processSync(data.mdx.frontmatter.description ?? "")
        .toString()
    const banner = getImage(data.mdx.frontmatter.banner)
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
                image: data.mdx.frontmatter.image?.publicURL,
            }}
            location={location}
        >
            <div className="md:px-4 mt-12 py-6 md:w-11/12 mx-auto">
                <div className="mx-auto relative">
                    <GatsbyImage
                        image={banner}
                        alt={data.mdx.frontmatter.title}
                    />
                    <div
                        className="text-right text-xs"
                        dangerouslySetInnerHTML={{
                            __html: credit,
                        }}
                    />
                    <div className="flex items-center justify-center relative lg:absolute w-full h-full top-0 left-0">
                        <div className="hidden lg:block absolute w-full h-full bg-black opacity-50"></div>
                        <div className="px-4 py-8 lg:p-0 relative z-10 text-center text-color-default lg:text-white bg-bgalt lg:bg-transparent">
                            <h1 className="text-5xl font-bold text-primary">
                                {data.mdx.frontmatter.title}
                            </h1>
                            <p className="mt-1 flex items-center justify-center">
                                <Calendar />{" "}
                                <span className="ml-2">
                                    {data.mdx.frontmatter.date}
                                </span>
                            </p>
                            <p className="mt-1 flex items-center justify-center">
                                <span className="ml-2">{author}</span>
                            </p>
                            <div className="post-content mt-3 px-9 md:px-20 mx-2 text-justify">
                                <div
                                    dangerouslySetInnerHTML={{
                                        __html: description,
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="lg:w-3/4 md:w-11/12 sm:w-full p-3 mx-auto mt-12 text-justify post-content">
                    <MDXProvider components={components}>
                        <MDXRenderer images={images}>
                            {data.mdx.body}
                        </MDXRenderer>
                    </MDXProvider>
                </div>
                <div className="comments mt-8">
                    <Comments
                        title={data.mdx.frontmatter.title}
                        location={location}
                    />
                </div>
            </div>
        </Layout>
    )
}

export const query = graphql<ContentsQuery>`
    query BlogQuery(
        $slug: String!
        $relativeDirectory: String!
        $sourceInstanceName: String!
    ) {
        mdx(fields: { slug: { eq: $slug } }) {
            fields {
                sourceName
            }
            slug
            body
            frontmatter {
                author
                title
                date(formatString: "DD MMMM YYYY")
                description
                credit
                banner {
                    childImageSharp {
                        gatsbyImageData(
                            width: 640
                            placeholder: BLURRED
                            layout: CONSTRAINED
                            quality: 8
                        )
                    }
                }
                image {
                    publicURL
                    childImageSharp {
                        gatsbyImageData(
                            width: 640
                            placeholder: BLURRED
                            layout: CONSTRAINED
                            quality: 8
                        )
                    }
                }
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
