// i18next-extract-mark-ns-start index
import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { ImageDict } from "../components/imagedict"

export const Head = ({ location, params, data, pageContext }) => {
  const title = "Home" || pageContext.title

  return (
    <Seo
      title={title}
      pathname={location.pathname}
      lang={pageContext.language}
    />
  )
}

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <h1>移転しました</h1>
      <p>サイトを引っ越しました</p>
      <p>
        引越し先は{" "}
        <a href="https://gmap.alizza-ideal.com">gmap.alizza-ideal.com</a>{" "}
        です。引き続き、ご愛顧の程よろしくおねがいします。
      </p>
    </Layout>
  )
}

export const query = graphql`
  query homePageQuery($language: String!) {
    images: allAirtable(
      filter: {
        table: { eq: "SiteContents" }
        data: { Images: { id: { ne: null } } }
      }
    ) {
      edges {
        node {
          table
          id
          data {
            Name
            Status
            Images {
              localFiles {
                absolutePath
                base
                url
                childImageSharp {
                  gatsbyImageData(
                    breakpoints: [360, 720, 1024]
                    jpgOptions: { progressive: false }
                    formats: [JPG]
                    quality: 50
                    layout: CONSTRAINED
                    placeholder: BLURRED
                  )
                }
              }
            }
          }
        }
      }
    }

    locales: allLocale(
      filter: { language: { eq: $language }, ns: { in: ["common", "index"] } }
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

export default IndexPage
