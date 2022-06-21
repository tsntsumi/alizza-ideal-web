// i18next-extract-mark-ns-start homepage-thanks
import * as React from "react"
import { graphql } from "gatsby"
import { Trans, Link, useI18next } from "gatsby-plugin-react-i18next"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import { Banner } from "../../components/banner"
import { OutboundLink } from "gatsby-plugin-google-gtag"
import { LinkButtonStyles } from "../../components/button/styles"

const HPThanksPage = ({ data }) => {
  const { t } = useI18next()

  const images = data.Images.edges
    .map(e => e.node.data.Images.localFiles.map(img => img))
    .flat()
    .filter((e, i) => !!e)
  return (
    <Layout>
      <Seo title="Thank you for your inquiry" />
      <Banner
        title={t("お問い合わせありがとうございます")}
        image={images.pop()}
      >
        <h2>
          <Trans>まもなく、メールにて確認メールをお送りいたします。</Trans>
        </h2>
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
    Images: allAirtable(
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
            Images {
              localFiles {
                base
                url
                childImageSharp {
                  gatsbyImageData(
                    formats: [AUTO, WEBP, AVIF]
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

    locales: allLocale(filter: { language: { eq: $language } }) {
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
