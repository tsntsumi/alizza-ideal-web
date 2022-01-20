import React from "react"
import Layout from "../components/layout-lp"
import { graphql, PageProps } from "gatsby"
import { getImage } from "gatsby-plugin-image"
import { remark } from "remark"
import recommended from "remark-preset-lint-recommended"
import remarkHtml from "remark-html"
import { GatsbyImage } from "gatsby-plugin-image"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { ArrowDown, ArrowDownCircle } from "react-feather"
import { ArrowLeft, ArrowRight } from "react-feather"
import { ArrowUp, ArrowUpCircle } from "react-feather"

import Sticky from "../components/Sticky"
import { Avatar } from "../components/Avatar"
import { Button, Offer, CtaButton } from "../components/ui"
import { FileImage } from "../components/file-image"
import { Row, Col } from "../components/shortcodes/index"
import { Squeeze } from "../components/squeeze"

const components = {
    ArrowDown: ArrowDown,
    ArrowDownCircle: ArrowDownCircle,
    ArrowLeft: ArrowLeft,
    ArrowRight: ArrowRight,
    ArrowUp: ArrowUp,
    ArrowUpCircle: ArrowUpCircle,
    Avatar: Avatar,
    Col: Col,
    CtaButton: (props) => (
        <div className="noindent">
            <CtaButton {...props} />
        </div>
    ),
    FileImage: FileImage,
    Figure: (props) => (
        <p className="noindent">
            <FileImage {...props} />
        </p>
    ),
    Offer: Offer,
    Row: Row,
    Squeeze: (props) => (
        <p className="noindent">
            <Squeeze {...props} />
        </p>
    ),
    Sticky: Sticky,
    NoWrap: (props) => <span className="whitespace-nowrap" {...props} />,
}

export default function landingpage({
    data,
    location,
}: PageProps<LandingPageQuery, {}>) {
    const credit = remark()
        .use(recommended)
        .use(remarkHtml)
        .processSync(data.mdx.frontmatter.credit || "")
        .toString()
    const desc = "<p>" + data.mdx.frontmatter.description + "</p>"
    const description = remark()
        .use(recommended)
        .use(remarkHtml)
        .processSync(data.mdx.frontmatter.description)
        .toString()
    const banner = getImage(data.mdx.frontmatter.banner)
    const seotitle = data.mdx.frontmatter.title
    const seodesc = data.mdx.frontmatter.description
    const seoimage = data.mdx.frontmatter.image.publicURL
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
                title: seotitle,
                description: seodesc,
                image: seoimage,
            }}
            location={location}
        >
            <div className="lp-content">
                <div id="headline">
                    <div id="desc">
                        <h1
                            dangerouslySetInnerHTML={{
                                __html: data.mdx.frontmatter.title.replaceAll(
                                    "。",
                                    "<br/>"
                                ),
                            }}
                        ></h1>
                        <div
                            dangerouslySetInnerHTML={{
                                __html: description,
                            }}
                        ></div>
                    </div>
                    {banner && (
                        <div id="banner">
                            <GatsbyImage
                                image={banner}
                                alt={data.mdx.frontmatter.title}
                            />
                            <div
                                className="text-xs align-right"
                                dangerouslySetInnerHTML={{
                                    __html: credit,
                                }}
                            ></div>
                        </div>
                    )}
                </div>
                <div id="content-body" className="text-justify text-base">
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

export const query = graphql`
    query LandingPageQuery(
        $slug: String!
        $relativeDirectory: String!
        $sourceInstanceName: String!
    ) {
        mdx: mdx(fields: { slug: { eq: $slug } }) {
            fields {
                sourceName
            }
            slug
            body
            frontmatter {
                title
                date(formatString: "DD MMMM YYYY")
                description
                credit
                image {
                    publicURL
                }
                banner {
                    publicURL
                    childImageSharp {
                        gatsbyImageData(
                            breakpoints: [98, 128, 256, 512]
                            placeholder: BLURRED
                            layout: CONSTRAINED
                            quality: 8
                            formats: [AUTO, WEBP, AVIF]
                        )
                        id
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
                            width: 640
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
