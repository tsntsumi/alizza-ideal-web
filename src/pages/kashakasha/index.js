// i18next-extract-mark-ns-start kashakasha
import * as React from "react"
import { graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { Trans, useI18next } from "gatsby-plugin-react-i18next"
import { GlobalStyle } from "../../components/layout/styles"
import { LandingPageStyles } from "../../components/layout/landingpage-styles"
import { Credits } from "../../components/applicationform/styles"
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

const KashaKashaShukyakuPage = ({ data, pageContext }) => {
  const { t } = useI18next()
  pageContext.title = t("Googleマップ集客術　オンラインプログラム登録フォーム")

  return (
    <>
      <GlobalStyle />
      <LandingPageStyles>
        <h1 style={{ padding: "0.75em 0em" }}>
          <Trans>小さなお店のひとりオーナー・経営者の方へ</Trans>
        </h1>
        <div className="banner-image">
          <StaticImage
            src="../../images/KashaKasha-Map-Shukyaku.png"
            alt={t("スマホでカシャカシャ・ネット集客術")}
          />
        </div>
        <div className="container">
          <center>
            <div
              dangerouslySetInnerHTML={{
                __html:
                  '\
<div class="line-it-button" data-lang="ja" data-type="friend" data-env="REAL"   data-lineid="@014gbllc" style="display: none;"></div>\n\
<script src="https://www.line-website.com/social-plugins/js/thirdparty/loader.min.js" async="async" defer="defer"></script>\n',
              }}
            />
            <p>
              <Trans>LINEでお友だち追加して</Trans>
              <br />
              <Trans>オンラインプログラムをもらう</Trans>
            </p>
          </center>
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
      </LandingPageStyles>
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
