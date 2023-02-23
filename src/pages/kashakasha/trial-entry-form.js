// i18next-extract-mark-ns-start kashakasha
import * as React from "react"
import { graphql } from "gatsby"
import { Trans, useI18next } from "gatsby-plugin-react-i18next"
import "moment/locale/ja"
import { GlobalStyle } from "../../components/layout/styles"
import { LandingPageStyles } from "../../components/layout/landingpage-styles"
import Seo from "../../components/seo"

export const Head = ({ location, params, data, pageContext }) => {
  return (
    <Seo
      title={pageContext.title}
      pathname={location.pathname}
      lang={pageContext.language}
    />
  )
}

const KashaKashaTrialEntryForm = ({ data, pageContext, location }) => {
  const { t } = useI18next()
  pageContext.title = t(
    "Googleマップ集客術　Googleマップアカウント開設個別体験会登録フォーム"
  )

  return (
    <>
      <GlobalStyle />
      <LandingPageStyles>
        <h1 style={{ padding: "0.75em 0em" }}>
          <span
            style={{
              color: "yellow",
              whiteSpace: "nowrap",
              fontWeight: 900,
              fontSize: "1.6em",
            }}
          >
            <Trans>Googleマップ集客術</Trans>
          </span>
          <br />
          <span
            style={{ color: "yellow", whiteSpace: "nowrap", fontSize: "0.8em" }}
          >
            <Trans>Googleマップアカウント開設</Trans>
          </span>
          <span
            style={{ color: "yellow", whiteSpace: "nowrap", fontSize: "0.8em" }}
          >
            <Trans>個別体験会登録フォーム</Trans>
          </span>
        </h1>
        <div style={{ width: "100%", height: "100vh" }}>
          <kls-form-embeded-tag>
            <iframe
              width="100%"
              class="kls-sform-AsPe"
              data-src="https://kli.jp/sf/AsPe/"
            ></iframe>
          </kls-form-embeded-tag>
        </div>
      </LandingPageStyles>
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

export default KashaKashaTrialEntryForm
