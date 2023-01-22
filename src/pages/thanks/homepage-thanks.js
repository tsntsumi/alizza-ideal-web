// i18next-extract-mark-ns-start thanks
import * as React from "react"
import { graphql } from "gatsby"
import { Trans, useI18next } from "gatsby-plugin-react-i18next"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import { Banner } from "../../components/banner"

const HPThanksPage = ({ data }) => {
  const { t } = useI18next()

  const images = data.images.edges
    .map(e => e.node.data.Images.localFiles.map(img => img))
    .flat()
    .filter((e, i) => !!e)
  return (
    <Layout>
      <Seo title="Thank you for your inquiry" />
      <Banner
        title={t("お問い合わせありがとうございます")}
        image={images.pop()}
        position="left"
      >
        <h2>
          <Trans>まもなく、メールにて確認メールをお送りいたします。</Trans>
        </h2>
        <hr />
        <p>
          <Trans>
            もし、３〜５分ほどたっても届かない場合、メールの迷惑フォルダやスパムフォルダに保存されている可能性があります。
          </Trans>
          <Trans>まず迷惑フォルダを確認してみてください。</Trans>
        </p>
        <p>
          <Trans>その中にも見つからない場合は、</Trans>
          <Trans>
            もう一度メールアドレスを入力しなおして、お問い合わせください。
          </Trans>
          <Trans>よろしくおねがいします。</Trans>
        </p>
      </Banner>
    </Layout>
  )
}

export const query = graphql`
  query costcoThanksQuery($language: String!) {
    images: allAirtable(
      filter: {
        table: { eq: "SiteContents" }
        data: { Name: { eq: "HPThanks" } }
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
      filter: { language: { eq: $language }, ns: { in: ["common", "thanks"] } }
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

export default HPThanksPage
