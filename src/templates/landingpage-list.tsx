import React from "react"
import Layout from "../components/layout"
import { graphql, PageProps } from "gatsby"
import LandingPageItem from "../components/item-landingpage"
import Pagination from "../components/pagination"

export default function landingPagelist({ data, pageContext, location }) {
    const landingPageItems = data.allMdx.edges.map((item) => (
        <LandingPageItem data={item.node} key={item.node.id} />
    ))

    return (
        <Layout
            seo={{
                title: "Landing Page",
            }}
            location={location}
        >
            <div className="container mx-auto py-12">
                <div className="title py-12 text-center">
                    <h2 className="font-black text-5xl text-color-1">
                        Landing Page
                    </h2>
                </div>
                <div className="flex flex-wrap">{landingPageItems}</div>
                <Pagination pageContext={pageContext} type="landingPage" />
            </div>
        </Layout>
    )
}

export const query = graphql`
    query LandingPageListQuery($skip: Int!, $limit: Int!) {
        allMdx(
            filter: { fields: { sourceName: { eq: "landingpage" } } }
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
