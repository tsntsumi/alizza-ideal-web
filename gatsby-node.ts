import { createFilePath } from "gatsby-source-filesystem"
import { GatsbyNode, graphql } from "gatsby"
import path from "path"

export const onCreateNode: GatsbyNode["onCreateNode"] = async ({
    node,
    getNode,
    actions,
}) => {
    const { createNodeField } = actions
    if (node.internal.type === `Mdx`) {
        const slug = createFilePath({ node, getNode })
        const sourceName = getNode(node.parent).sourceInstanceName
        const prefix = sourceName === "basepages" ? "" : "/" + sourceName

        createNodeField({
            node,
            name: `slug`,
            value: `${prefix}${slug}`,
        })
        createNodeField({
            node,
            name: `sourceName`,
            value: sourceName,
        })
    }
}

export const createPages: GatsbyNode["createPages"] = async ({
    graphql,
    actions,
}) => {
    const { createPage } = actions

    return graphql<any>(`
        query GatsbyNodeQuery {
            all: allMdx {
                edges {
                    node {
                        fields {
                            slug
                            sourceName
                        }
                        frontmatter {
                            template
                        }
                    }
                }
            }
            blog: allMdx(filter: { fields: { sourceName: { eq: "blog" } } }) {
                edges {
                    node {
                        id
                    }
                }
            }
            portfolio: allMdx(
                filter: { fields: { sourceName: { eq: "portfolio" } } }
            ) {
                edges {
                    node {
                        id
                    }
                }
            }
            landingpage: allMdx(
                filter: { fields: { sourceName: { eq: "landingpage" } } }
            ) {
                edges {
                    node {
                        id
                    }
                }
            }
            limitPost: site {
                siteMetadata {
                    blogItemsPerPage
                    portfolioItemsPerPage
                    landingPageItemsPerPage
                }
            }
        }
    `).then(result => {
        result.data.all.edges.forEach(({ node }) => {
            let template =
                node.frontmatter.template === null
                    ? node.fields.sourceName
                    : node.frontmatter.template
            createPage({
                path: node.fields.slug,
                component: path.resolve("./src/templates/" + template + ".tsx"),
                context: {
                    slug: node.fields.slug,
                },
            })
        })

        const blogPosts = result.data.blog.edges
        const blogPostsPerPage =
            result.data.limitPost.siteMetadata.blogItemsPerPage
        const numBlogPages = Math.ceil(blogPosts.length / blogPostsPerPage)

        Array.from({ length: numBlogPages }).forEach((_, i) => {
            createPage({
                path: i === 0 ? `/blog` : `/blog/${i + 1}`,
                component: path.resolve("./src/templates/blog-list.tsx"),
                context: {
                    limit: blogPostsPerPage,
                    skip: i * blogPostsPerPage,
                    numPages: numBlogPages,
                    currentPage: i + 1,
                },
            })
        })

        const portfolioItems = result.data.portfolio.edges
        const portfolioItemsPerPage =
            result.data.limitPost.siteMetadata.portfolioItemsPerPage
        const numPortfolioItems = Math.ceil(
            portfolioItems.length / portfolioItemsPerPage
        )

        Array.from({ length: numPortfolioItems }).forEach((_, i) => {
            createPage({
                path: i === 0 ? `/portfolio` : `/portfolio/${i + 1}`,
                component: path.resolve("./src/templates/portfolio-list.tsx"),
                context: {
                    limit: portfolioItemsPerPage,
                    skip: i * portfolioItemsPerPage,
                    numPages: numPortfolioItems,
                    currentPage: i + 1,
                },
            })
        })

        const landingPageItems = result.data.landingpage.edges
        const landingPageItemsPerPage =
            result.data.limitPost.siteMetadata.landingPageItemsPerPage
        const numLandingPageItems = Math.ceil(
            landingPageItems.length / landingPageItemsPerPage
        )

        Array.from({ length: numLandingPageItems }).forEach((_, i) => {
            createPage({
                path: i === 0 ? `/landingpage` : `/landingpage/${i + 1}`,
                component: path.resolve("./src/templates/landingpage-list.tsx"),
                context: {
                    limit: landingPageItemsPerPage,
                    skip: i * landingPageItemsPerPage,
                    numPages: numLandingPageItems,
                    currentPage: i + 1,
                },
            })
        })
    })
}
