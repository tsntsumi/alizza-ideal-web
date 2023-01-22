// i18next-extract-mark-ns-start kashakasha
import * as React from "react"
import { graphql } from "gatsby"
import { useI18next, Trans } from "gatsby-plugin-react-i18next"
import { StaticImage } from "gatsby-plugin-image"
import { GlobalStyle } from "../components/layout/styles"
import { Footer } from "../components/footer"
import styled from "styled-components"
import Seo from "../components/seo"
import { SqueezeForm, SubmitInquiryToAirtable } from "../components/squeezeform"

const KashaKashaShukyakuPage = ({ data }) => {
  const { t } = useI18next()
  return (
    <>
      <GlobalStyle />
      <KashaKashaShukyakuPageStyles>
        <Seo title={t("スマホでカシャカシャ・ネット集客術")} />
        <div className="lp-container">
          <div className="lp-content">
            <h1>
              <Trans>小さなお店のひとりオーナー・経営者の方へ</Trans>
            </h1>
            <div className="banner-image">
              <StaticImage
                src="../images/KashaKasha-Map-Shukyaku.png"
                alt={t("スマホでカシャカシャ・ネット集客術")}
              />
            </div>
          </div>
          <div className="squeeze-form lp-content">
            <SqueezeForm
              cta={t("今すぐ無料で受け取る")}
              withoutName={true}
              emaillabel={"メールアドレスを入力"}
              acceptInquiry={false}
              action={SubmitInquiryToAirtable}
              tag={"kashakasha"}
              nextpage="/thanks/homepage-thanks"
            />
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
        </div>
      </KashaKashaShukyakuPageStyles>
      <Footer />
    </>
  )
}

const KashaKashaShukyakuPageStyles = styled.section`
  .lp-container {
    height: 98vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  }

  text-align: justify;
  align-items: flex-start;
  color: darkgrey;
  background-color: white;
  margin: 0;
  padding: 0;
  font-size: 11pt;
  height: 100%;
  min-height: 100%;
  @media (min-width: 1000px) {
    margin: 0 200px 0 200px;
  }
  .banner-image {
    width: 100%;
    padding: 0;
    margin: 0;
    border: none;
  }
  h1 {
    padding: 0.3em;
    margin: 0;
    color: white;
    font-size: 1.2em;
    background-color: darkblue;
    text-align: center;
  }
  @media (min-width: 450px) {
    h1 {
      font-size: 1.8em;
    }
  }
  .lp-content {
    height: auto;
    padding: 0;
    margin: 0;
  }
  .squeeze-form {
    clear: both;
    padding: 0;
    width: 100%;
    font-size: 1.6em;
    font-weight: 900;
    & section {
      box-shadow: 0 0 5px 5px rgba(0, 0, 0, 0.1);
    }
    p {
      font-size: 10pt;
      padding: 0;
      margin: 0;
    }
    input#email {
      border: 3px solid darkblue;
      background-color: white;
      outline: none;
    }
    button {
      background-color: darkorange;
      font-size: 11pt;
      font-weight: 800;
      border-radius: var(--p);
    }
  }
`

const Credits = styled.div`
  font-size: 6px;
  color: grey;
  padding: 0.3em;
`

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
