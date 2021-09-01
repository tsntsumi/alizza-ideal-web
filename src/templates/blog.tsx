import React from "react"
import { MDXProvider } from "@mdx-js/react"
import { graphql, PageProps } from "gatsby"
import Avatar from "../components/Avatar"
import Comments from "../components/comments"
import Img from "gatsby-image"
import ItemProduct from "../components/item-product"
import Layout from "../components/layout"
import recommended from "remark-preset-lint-recommended"
import remarkHtml from "remark-html"
import { ArrowLeft, ArrowRight } from "react-feather"
import { BlogQuery } from "./__generated__/BlogQuery"
import { Button, Offer, Cta } from "../components/ui"
import { Calendar } from "react-feather"
import { CodeBlock } from "../components/CodeBlock"
import { Link } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { Row, Col } from "../components/shortcodes/index"
import { remark } from "remark"

const components = {
    Offer: Offer,
    Cta: Cta,
    ArrowLeft: ArrowLeft,
    ArrowRight: ArrowRight,
    Avatar: Avatar,
    code: CodeBlock,
    Link: Link,
    Row: Row,
    Col: Col,
    ItemProduct: ItemProduct,
    h1: props => <h4 {...props} class="text-color-1" />,
    h2: props => <h4 {...props} class="text-color-1" />,
    h3: props => <h4 {...props} class="text-color-1" />,
    h4: props => <h4 {...props} class="text-color-1" />,
    h5: props => <h4 {...props} class="text-color-1" />,
    h6: props => <h4 {...props} class="text-color-1" />,
}

export default function blog({ location, data }: PageProps<BlogQuery, {}>) {
    const author = data.mdx.frontmatter.author ?? ""
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
                image: data.mdx.frontmatter.banner.publicURL,
            }}
            location={location}
        >
            <div className="md:px-4 mt-12 py-6 md:w-11/12 mx-auto">
                <div className="mx-auto relative">
                    <Img
                        fluid={
                            data.mdx.frontmatter.banner.childImageSharp.fluid
                        }
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
                        <MDXRenderer>{data.mdx.body}</MDXRenderer>
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

export const query = graphql`
    query BlogQuery($slug: String!) {
        mdx(fields: { slug: { eq: $slug } }) {
            body
            frontmatter {
                author
                title
                date(formatString: "DD MMMM YYYY")
                description
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
