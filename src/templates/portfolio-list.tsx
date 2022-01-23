import React, { useEffect } from "react"
import Layout from "../components/layout"
import { graphql, PageProps } from "gatsby"
import PortfolioItem from "../components/item-portfolio"
import Pagination from "../components/pagination"
import { ContentsListQuery, imageNode } from "./ContentsListQuery"

export default function portfolioList({ data, pageContext, location }) {
    useEffect(() => {
        window.dispatchEvent(new CustomEvent("scroll"))
    }, [])

    const portfolioItems = data.allMdx.edges.map((item, i) => (
        <PortfolioItem
            data={item.node}
            key={item.node.id}
            even={(i + 1) % 2 === 0}
        />
    ))

    return (
        <Layout
            seo={{
                title: "Portfolio",
            }}
            location={location}
        >
            <div className="py-12 px-4 lg:px-0">
                <div className="title py-8 text-center">
                    <h2 className="font-black text-5xl text-color-1">
                        Portfolio
                    </h2>
                </div>
                <div className="flex flex-wrap">{portfolioItems}</div>
                <div className="mt-8 lg:mt-24">
                    <Pagination pageContext={pageContext} type="portfolio" />
                </div>
            </div>
        </Layout>
    )
}

export const query = graphql`
    query PortfolioListQuery($skip: Int!, $limit: Int!) {
        allMdx(
            filter: { fields: { sourceName: { eq: "portfolio" } } }
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
                    fields {
                        slug
                    }
                }
            }
        }
    }
`
