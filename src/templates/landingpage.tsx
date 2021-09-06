import React from "react"
import ReactDOM from "react-dom"
import { graphql, PageProps } from "gatsby"
import Avatar from "../components/Avatar"
import Img from "gatsby-image"
import Layout from "../components/layout-lp"
import recommended from "remark-preset-lint-recommended"
import remarkHtml from "remark-html"
import Sticky from "../components/Sticky"
import { ArrowLeft, ArrowRight } from "react-feather"
import { ArrowDown, ArrowDownCircle } from "react-feather"
import { ArrowUp, ArrowUpCircle } from "react-feather"
import { Button, Offer, CtaButton } from "../components/ui"
import { Squeeze } from "../components/squeeze"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { remark } from "remark"
import { Row, Col } from "../components/shortcodes/index"

const components = {
    ArrowDown: ArrowDown,
    ArrowDownCircle: ArrowDownCircle,
    ArrowUp: ArrowUp,
    ArrowUpCircle: ArrowUpCircle,
    ArrowLeft: ArrowLeft,
    ArrowRight: ArrowRight,
    Avatar: Avatar,
    Col: Col,
    Row: Row,
    CtaButton: CtaButton,
    Offer: Offer,
    Sticky: Sticky,
    Squeeze: Squeeze,
    Img: Img,
    h1: props => <h1 {...props} className="text-color-1" />,
    h2: props => <h2 {...props} className="text-color-1" />,
    h3: props => <h3 {...props} className="text-color-1" />,
    h4: props => <h4 {...props} className="text-color-1" />,
    h5: props => <h5 {...props} className="text-color-1" />,
    h6: props => <h6 {...props} className="text-color-1" />,
}

export default function landingpage({
    data,
    location,
}: PageProps<LandingPageQuery, {}>) {
    const credit = remark()
        .use(recommended)
        .use(remarkHtml)
        .processSync(data.mdx.frontmatter.credit ?? "")
        .toString()
    const desc = "<p>" + data.mdx.frontmatter.description + "</p>"
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
            <div className="post-content w-full m-0 p-0 max-w-full px-2 lg:px-8 md:px-4 py-8 text-justify">
                <div name="Head Line" className="post-content w-full">
                    <div className="float-right w-full md:w-1/2 ml-8">
                        <Img
                            fluid={
                                data.mdx.frontmatter.banner.childImageSharp
                                    .fluid
                            }
                        />
                        <div
                            className="text-xs text-right"
                            dangerouslySetInnerHTML={{
                                __html: credit,
                            }}
                        ></div>
                    </div>
                    <h4 className="font-black text-color-1 mt-0">
                        {data.mdx.frontmatter.title}
                    </h4>
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
                        <MDXRenderer>{data.mdx.body}</MDXRenderer>
                    </MDXProvider>
                </div>
            </div>
        </Layout>
    )
}

export const query = graphql`
    query LandingPageQuery($slug: String!) {
        mdx(fields: { slug: { eq: $slug } }) {
            body
            frontmatter {
                title
                description
                credit
                banner {
                    publicURL
                    childImageSharp {
                        fluid(maxWidth: 1920) {
                            srcSet
                            ...GatsbyImageSharpFluid
                        }
                        id
                    }
                }
            }
        }
    }
`
