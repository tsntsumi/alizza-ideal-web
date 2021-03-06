// i18next-extract-mark-ns-start blog
import React from "react"
import { Container, Grid, Box } from "@chakra-ui/react"
import { graphql } from "gatsby"
import List from "../../components/list"
import Layout from "../../components/layout"
import Seo from "../../components/seo"

export default function BlogIndexPage({ data }) {
  const { posts } = data
  return (
    <Layout>
      <Seo title="Blogs" />
      <Container maxW="container.xl" mt="90px" mb="1em">
        <Box px={4} mt={4}>
          <Grid
            templateColumns={{
              base: `repeat(1, 1fr)`,
              sm: `repeat(3, 1fr)`,
              xl: `repeat(4, 1fr)`,
            }}
            gap={{
              base: 4,
              xl: 6,
            }}
          >
            {posts.edges.map((e, index) => {
              const loading = index <= 4 ? "eager" : "lazy"
              return <List node={e.node} loading={loading} key={index} />
            })}
          </Grid>
        </Box>
      </Container>
    </Layout>
  )
}

export const query = graphql`
  query BlogIndexQuery($language: String!) {
    posts: allMdx(
      sort: { fields: frontmatter___date, order: DESC }
      filter: { fields: { locale: { eq: $language }, source: { eq: "blog" } } }
    ) {
      edges {
        node {
          frontmatter {
            date(fromNow: true)
            slug
            title
            description
            tags
            banner {
              childImageSharp {
                gatsbyImageData(formats: AUTO, width: 256)
              }
            }
          }
        }
      }
    }
    tags: allMdx(
      filter: { fields: { locale: { eq: "ja" }, source: { eq: "blog" } } }
      sort: { fields: frontmatter___tags, order: ASC }
    ) {
      edges {
        node {
          frontmatter {
            tags
          }
        }
      }
      distinct(field: frontmatter___tags)
    }
    locales: allLocale(
      filter: {
        language: { in: [$language] }
        ns: { in: ["translation", "blog"] }
      }
    ) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`
