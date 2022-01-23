import React from "react"
import Layout from "../components/layout"
import { graphql, PageProps } from "gatsby"
import BlogItem from "../components/item-blog"
import Pagination from "../components/pagination"
import { ContentsListQuery, imageNode } from "./ContentsQuery"

export default function blogList({ data, pageContext, location }) {
    const blogItems = data.allMdx.edges.map((item) => (
        <BlogItem data={item.node} key={item.node.id} />
    ))

    return (
        <Layout
            seo={{
                title: "Blog",
            }}
            location={location}
        >
            <div className="container mx-auto py-12">
                <div className="title py-12 text-center">
                    <h2 className="font-black text-5xl text-color-1">Blog</h2>
                </div>
                <div className="flex flex-wrap">{blogItems}</div>
                <Pagination pageContext={pageContext} type="blog" />
            </div>
        </Layout>
    )
}

export const query = graphql<ContentsListQuery>`
    query BlogListQuery($skip: Int!, $limit: Int!) {
        allMdx(
            filter: { fields: { sourceName: { eq: "blog" } } }
            sort: { fields: [frontmatter___date], order: DESC }
            limit: $limit
            skip: $skip
        ) {
            edges {
                node {
                    id
                    frontmatter {
                        title
                        description
                        date(formatString: "DD MMMM YYYY")
                        image {
                            publicURL
                            childImageSharp {
                                gatsbyImageData(
                                    breakpoints: [98, 128, 256, 512]
                                    placeholder: BLURRED
                                    layout: CONSTRAINED
                                    quality: 8
                                )
                            }
                        }
                    }
                    fields {
                        slug
                    }
                }
            }
        }
    }
`
