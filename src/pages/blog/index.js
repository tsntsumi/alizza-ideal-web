import React from "react"
import { Container, Grid, Box } from "@chakra-ui/react"
import { graphql } from "gatsby"
import List from "../../components/list"
import Layout from "../../components/layout"
import Seo from "../../components/seo"

export default function BlogIndexPage({ data }) {
  return (
    <Layout>
      <Seo title="Blogs" />
      <Container maxW="container.xl" mt="90px">
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
            {data.allMdx.edges.map((e, index) => {
              const loading = index <= 4 ? "eager" : "lazy"
              console.log("node.id = ", e.node.id)
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
    allMdx(
      filter: {
        fields: { locale: { in: [$language, ""] } }
        frontmatter: { slug: { glob: "/blog/*" } }
      }
    ) {
      edges {
        node {
          id
          excerpt(pruneLength: 64)
          frontmatter {
            date(fromNow: true)
            slug
            tags
            title
          }
        }
      }
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
