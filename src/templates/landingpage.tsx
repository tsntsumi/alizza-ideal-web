import React from "react"
import ReactDOM from "react-dom"
import { graphql, PageProps } from "gatsby"
import Avatar from "../components/Avatar"
import Img from "gatsby-image"
import Layout from "../components/layout-lp"
import recommended from "remark-preset-lint-recommended"
import remarkHtml from "remark-html"
import { ArrowLeft, ArrowRight } from "react-feather"
import { Button, Offer, Cta } from "../components/ui"
import { LandingPagesQuery } from "./__generated__/LandingPagesQuery"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { remark } from "remark"

const components = {
    ArrowLeft: ArrowLeft,
    ArrowRight: ArrowRight,
    Avatar: Avatar,
    Cta: Cta,
    Offer: Offer,
    h1: props => <h4 {...props} class="text-color-1" />,
    h2: props => <h4 {...props} class="text-color-1" />,
    h3: props => <h4 {...props} class="text-color-1" />,
    h4: props => <h4 {...props} class="text-color-1" />,
    h5: props => <h4 {...props} class="text-color-1" />,
    h6: props => <h4 {...props} class="text-color-1" />,
}

export default function landingPages({
    data,
    location,
}: PageProps<LandingPagesQuery, {}>) {
    const cta =
        data.mdx.frontmatter.cta === null
            ? "今すぐ確認"
            : data.mdx.frontmatter.cta
    const credit = data.mdx.frontmatter.credits
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
            <div className="post-content w-full m-0 p-0 max-w-full px-4 lg:px-24 md:px-8 py-8 text-justify">
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
                                __html: data.mdx.frontmatter.credit,
                            }}
                        ></div>
                    </div>
                    <h4 className="font-black text-color-1 mt-0">
                        {data.mdx.frontmatter.title}
                    </h4>
                    <div className="post-content my-0 py-0 text-md text-justify w-full clear-left leading-none">
                        <MDXProvider components={components}>
                            <MDXRenderer>{description}</MDXRenderer>
                        </MDXProvider>
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
    query LandingPagesQuery($slug: String!) {
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
