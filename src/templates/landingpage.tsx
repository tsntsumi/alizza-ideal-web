import React from "react"
import Layout from "../components/layout-lp"
import ReactDOM from "react-dom"
import Sticky from "../components/Sticky"
import recommended from "remark-preset-lint-recommended"
import remarkHtml from "remark-html"
import { ArrowDown, ArrowDownCircle } from "react-feather"
import { ArrowLeft, ArrowRight } from "react-feather"
import { ArrowUp, ArrowUpCircle } from "react-feather"
import { Button, Offer, CtaButton } from "../components/ui"
import { FileImage } from "../components/file-image"
import { GatsbyImage } from "gatsby-plugin-image"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { Row, Col } from "../components/shortcodes/index"
import { Squeeze } from "../components/squeeze"
import { getImage } from "gatsby-plugin-image"
import { graphql, PageProps } from "gatsby"
import { remark } from "remark"

const components = {
    ArrowDown: ArrowDown,
    ArrowDownCircle: ArrowDownCircle,
    ArrowUp: ArrowUp,
    ArrowUpCircle: ArrowUpCircle,
    ArrowLeft: ArrowLeft,
    ArrowRight: ArrowRight,
    Avatar: props => (
        <FileImage
            name={props.name || "avatar.png"}
            type={props.type || "images"}
            post={props.post || ""}
        />
    ),
    Col: Col,
    Row: Row,
    CtaButton: CtaButton,
    Offer: Offer,
    Sticky: Sticky,
    Squeeze: Squeeze,
    FileImage: props => <FileImage {...props} />,
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

    return (
        <Layout
            seo={{
                title: data.mdx.frontmatter.title,
                description: data.mdx.frontmatter.description,
                image: data.mdx.frontmatter.image?.publicURL,
            }}
            location={location}
        >
            <div className="post-content w-full m-0 p-0 max-w-full px-2 lg:px-8 md:px-4 py-8 text-justify">
                <div name="Head Line" className="post-content w-full">
                    <div className="float-right w-full md:w-1/2 ml-8">
                        <GatsbyImage
                            image={banner}
                            alt={data.mdx.frontmatter.title}
                        />

                        <div
                            className="text-xs text-right"
                            dangerouslySetInnerHTML={{
                                __html: credit,
                            }}
                        ></div>
                    </div>
                    <h1 className="font-black text-color-1 mt-0">
                        {data.mdx.frontmatter.title}
                    </h1>
                    <div className="post-content my-0 py-0 text-md text-justify w-full clear-left leading-none">
                        <div
                            dangerouslySetInnerHTML={{
                                __html: description,
                            }}
                        />
                    </div>
                </div>
                <div className="post-content clear-both pb-12 text-justify">
                    <MDXProvider components={components}>
                        <MDXRenderer
                            type={data.mdx.fields.sourceName}
                            post={data.mdx.slug?.replace(/\/$/, "")}
                        >
                            {data.mdx.body}
                        </MDXRenderer>
                    </MDXProvider>
                </div>
            </div>
        </Layout>
    )
}

export const query = graphql`
    query LandingPageQuery($slug: String!) {
        mdx(fields: { slug: { eq: $slug } }) {
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
                            width: 1920
                            placeholder: BLURRED
                            formats: [AUTO, WEBP, AVIF]
                        )
                        id
                    }
                }
            }
        }
    }
`