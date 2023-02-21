// i18next-extract-mark-ns-start kashakasha
import * as React from "react"
import { graphql } from "gatsby"
import { Trans, useI18next } from "gatsby-plugin-react-i18next"
import moment from "moment"
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

const ThanksKashakashaTrialPage = ({ location, data, pageContext }) => {
  const { t } = useI18next()
  pageContext.title = t(
    "Googleマップ集客術　Googleマップアカウント開設個別体験会登録確認ページ"
  )
  const email = location.state?.email
  const start = location.state?.start
  moment.locale("ja")
  const starttime = moment(start)

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

        <div>LINE ID: {email && `${email} 様`}</div>
        <div>開催日時：{starttime?.format("L (dd) LT")}</div>

        <h2 style={{ textAlign: "justify" }}>
          <Trans>
            後ほど、参加登録確認のメッセージをLINEへお送りいたします。
          </Trans>
        </h2>
        <hr />
        <div className="container">
          <p>
            <Trans>
              もし、１時間以上たっても確認メッセージが届かない場合、
            </Trans>
            <Trans>LINEでメッセージして下さい。</Trans>
          </p>
          <p>
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
