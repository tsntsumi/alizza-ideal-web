// i18next-extract-mark-ns-start kashakasha
import * as React from "react"
import HTMLComment from "react-html-comment"
import { graphql } from "gatsby"
import { useI18next, Trans } from "gatsby-plugin-react-i18next"
import { StaticImage } from "gatsby-plugin-image"
import { GlobalStyle } from "../../components/layout/styles"
import Seo from "../../components/seo"
import { FormStyles, Credits } from "../../components/applicationform/styles"

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
      <script src="https://kli.jp/external/fform/WqfU"></script>
      {"<!-- KLSフォーム埋め込みタグ -->"}
    </>
  )
}

const KashaKashaShukyakuPage = ({ data, pageContext }) => {
  const { t } = useI18next()
  pageContext.title = t("Googleマップ集客術")

  return (
    <>
      <GlobalStyle />
      <FormStyles>
        <div className="lp-container">
          <div className="lp-content">
            <h1>
              <Trans>小さなお店のひとりオーナー・経営者の方へ</Trans>
            </h1>
            <div className="banner-image">
              <StaticImage
                src="../../images/KashaKasha-Map-Shukyaku.png"
                alt={t("スマホでカシャカシャ・ネット集客術")}
              />
            </div>
          </div>
        </div>
        <div className="iframe-wrapper" style={{ top: "-100px" }}>
          <HTMLComment text="KLSフォーム埋め込みタグ" />
          <iframe
            title="kls"
            width="100%"
            className="kls-fform-WqfU"
            data-src="https://kli.jp/ff/WqfU/"
          ></iframe>
          <HTMLComment text="KLSフォーム埋め込みタグ" />
        </div>
        <Credits className="lp-content">
          <span>authors: </span>
          <span>
            <a href="https://www.freepik.com/free-vector/flash-sale-yellow-banner-template_15244383.htm">
              Image by starline
            </a>{" "}
            <span>on Freepik</span>
          </span>
          ,
          <span>
            <a href="http://www.freepik.com">
              Designed by rawpixel.com / Freepik
            </a>
          </span>
          ,
          <span>
            <a href="https://www.vecteezy.com/free-vector/web">
              Web Vectors by Vecteezy
            </a>
          </span>
          ,
          <span>
            <a href="https://www.vecteezy.com/free-vector/address-logo">
              Address Logo Vectors by Vecteezy
            </a>
          </span>
          ,
          <span>
            <a href="https://www.vecteezy.com/free-vector/cartoon">
              Cartoon Vectors by Vecteezy
            </a>
          </span>
          .
        </Credits>
      </FormStyles>
    </>
  )
}

export default KashaKashaShukyakuPage

export const query = graphql`
  query KashaKashaShukyakuQuery($language: String!) {
    locales: allLocale(
      filter: {
        language: { in: [$language] }
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
