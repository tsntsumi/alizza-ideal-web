// i18next-extract-mark-ns-start contact
import * as React from "react"
import { graphql } from "gatsby"
import { useI18next } from "gatsby-plugin-react-i18next"
import { StaticImage } from "gatsby-plugin-image"
import { GlobalStyle } from "../components/layout/styles"
import { Footer } from "../components/footer"
import styled from "styled-components"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { SqueezeForm, SubmitInquiryToAirtable } from "../components/squeezeform"

const NetClientInvitationPage = ({ data }) => {
  const { t } = useI18next()
  return (
    <>
      <GlobalStyle />
      <NetClientInvitationPageStyles>
        <Seo title={t("Get in touch")} />
        <div>
          <h1>
            GoogleマップのMEOを始めたけどお客様が来ないとお悩みの店舗オーナー様へ
          </h1>
          <p>
            <center>水戸商工会議所の商い情報宅配便からようこそ！</center>
          </p>
          <div className="float-image">
            <StaticImage
              src="../images/gbp-extreme-start-guid.png"
              alt="Extreme Start Guid Book"
            />
          </div>
          <div className="tagline">
            <span className="meo">
              スマホだけで始められるGoogleビジネスプロフィールの
            </span>
            <span className="evolved">進化型MEOを</span>
            <span className="entrust">丸々まるっとまるごとおまかせして、</span>
            <span className="littleshop">小さなお店だからこそできる</span>
            <span className="winner">商圏ひとり勝ちの</span>
            <span className="netinvite">ネット招客</span>を
            <span className="anyone">始めたい人はもういませんか？</span>
            <div className="notcollect">
              集客じゃなくて<span className="invite">招客！！</span>
              あなたは待って招き入れるだけ
            </div>
            <div className="booklet">
              今なら、詳細を知りたい方にはGoogleビジネスプロフィールを始めるための
              電子書籍を差し上げています。
              あなたは、商圏ダントツになるための初期設定を済ませてますか？
            </div>
          </div>
        </div>
        <div className="squeeze-form">
          <SqueezeForm
            cta={"詳細を問合せて電子書籍を手に入れる"}
            withoutName={true}
            emaillabel={"メールアドレス"}
            acceptInquiry={false}
            action={SubmitInquiryToAirtable}
            tag={"maruttomito"}
            nextpage="/thanks/mito-chamber-members"
          />
        </div>
      </NetClientInvitationPageStyles>
      <Footer />
    </>
  )
}

const NetClientInvitationPageStyles = styled.section`
  text-align: justify;
  align-items: flex-start;
  background-color: var(--key-dark-color);
  margin: 0;
  padding: 1em;
  .float-image {
    width: 45%;
    float: right;
    padding: 0;
    margin: 0.5em;
    border: solid 1pt lightblue;
  }
  h1 {
    padding: 1em;
    font-size: 14pt;
  }
  .tagline {
    margin: 0;
    padding: 0 15px;
  }
  .meo {
    font-size: 1em;
  }
  .evolved {
    color: orange;
    font-weight: bold;
    font-size: 1.12em;
  }
  .entrust {
    font-size: 1.4em;
  }
  .littleshop {
    font-size: 1em;
  }
  .winner {
    color: orange;
    font-weight: bold;
    font-size: 1.8em;
  }
  .netinvite {
    color: orange;
    font-weight: bold;
    font-size: 2em;
  }
  .invite {
    color: orange;
    font-weight: bold;
    font-size: 1.4em;
  }
  .booklet {
  }
  .squeeze-form {
    clear: both;
    width: 100%;
    margin: 0;
    padding: 0;
    p {
      font-size: 11pt;
      padding: 0;
      margin: 0;
    }
  }
`

export default NetClientInvitationPage

export const query = graphql`
  query NetClientInvitationQuery($language: String!) {
    locales: allLocale(
      filter: {
        language: { in: [$language] }
        ns: { in: ["translation", "contact"] }
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
