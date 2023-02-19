// i18next-extract-mark-ns-start kashakasha
import * as React from "react"
import HTMLComment from "react-html-comment"
import { graphql } from "gatsby"
import { useI18next } from "gatsby-plugin-react-i18next"
import { StaticImage } from "gatsby-plugin-image"
import { GlobalStyle } from "../../components/layout/styles"
import Seo from "../../components/seo"
import { FormStyles } from "../../components/applicationform/styles"

export const Head = ({ location, params, data, pageContext }) => {
  return (
    <>
      <Seo
        title={pageContext.title}
        pathname={location.pathname}
        lang={pageContext.language}
      />
      {"<!-- KLSフォーム埋め込みタグ -->"}
      <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
      <script src="https://kli.jp/external/sform/AsPe"></script>
      {"<!-- KLSフォーム埋め込みタグ -->"}
    </>
  )
}

const KashaKashaTrialEntry = ({ data, pageContext }) => {
  const { t } = useI18next()
  pageContext.title = t(
    "Googleマップ集客術　Googleマップアカウント開設個別体験会登録フォーム"
  )

  return (
    <>
      <GlobalStyle />
      <FormStyles>
        <StaticImage
          src="../../images/CMCA-trial-offer.png"
          id="offer-banner"
        />
        <div className="iframe-wrapper">
          <HTMLComment text="KLSフォーム埋め込みタグ" />
          <iframe
            title="kls"
            width="100%"
            className="kls-sform-AsPe"
            data-src="https://kli.jp/sf/AsPe/"
          ></iframe>
          <HTMLComment text="KLSフォーム埋め込みタグ" />
        </div>
      </FormStyles>
    </>
  )
}

export const query = graphql`
  query kashakashaTrialEntryQuery($language: String!) {
    locales: allLocale(
      filter: {
        language: { eq: $language }
        ns: { in: ["common", "kashakasha"] }
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

export default KashaKashaTrialEntry
