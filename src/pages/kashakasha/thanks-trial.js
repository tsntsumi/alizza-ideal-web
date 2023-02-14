// i18next-extract-mark-ns-start kashakasha
import * as React from "react"
import { graphql } from "gatsby"
import { Trans, useI18next } from "gatsby-plugin-react-i18next"
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

const ThanksKashakashaTrialPage = ({ location, data, pageContext }) => {
  const { t } = useI18next()
  pageContext.title = t(
    "Googleマップ集客術　Googleマップアカウント開設個別体験会登録確認ページ"
  )
  console.log("location", location)
  console.log("pageContext", pageContext)

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
            <Trans>個別体験会ご登録ありがとうございます</Trans>
          </span>
        </h1>
        <h2 style={{ textAlign: "justify" }}>
          <Trans>まもなく、参加登録のご確認メールをお送りいたします。</Trans>
        </h2>
        <hr />
        <div className="container">
          <div className="link">{location?.state?.email} 様</div>
          <p>
            <Trans>
              もし、３〜５分ほどたっても届かない場合、
              メールの迷惑メールフォルダやスパムフォルダに保存されている可能性があります。
            </Trans>
            <Trans>まず迷惑メールフォルダを確認してみてください。</Trans>
          </p>
          <p>
            <Trans>その中にも見つからない場合は、</Trans>
            <a
              href="mailto:kikuo+trial@alizza-ideal.com"
              style={{
                color: "blue",
                textDecoration: "underline",
                fontFamily: "monospace",
              }}
            >
              kikuo+trial@alizza-ideal.com
            </a>
            <Trans>までメールにてお問い合わせください。</Trans>
            <Trans>よろしくおねがいします。</Trans>
          </p>
          <p style={{ textAlign: "right" }}>堤紀久夫 from Alizza Ideal</p>
        </div>
      </LandingPageStyles>
    </>
  )
}

export const query = graphql`
  query thanksKashakashaTrialQuery($language: String!) {
    locales: allLocale(
      filter: {
        language: { eq: $language }
        ns: { in: ["common", "kashakasha", "thanks"] }
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

export default ThanksKashakashaTrialPage
