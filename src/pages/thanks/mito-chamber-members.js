// i18next-extract-mark-ns-start thanks
import * as React from "react"
import { graphql } from "gatsby"
import { Trans, useI18next } from "gatsby-plugin-react-i18next"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import { Banner } from "../../components/banner"
import { ImageDict } from "../../components/imagedict"
import { Button } from "../../components/button"

const ThanksMitoChamberMemberPage = ({ data }) => {
  const { t } = useI18next()
  const dict = new ImageDict(data)

  return (
    <Layout>
      <Seo title="Thank you for your inquiry" />
      <Banner
        title={t("ご登録ありがとうございます")}
        image={dict.imageOf("HPThanks")}
      >
        <div>
          <center>
            <Trans>まだ閉じないで！</Trans>
          </center>
        </div>
        <div style={{ padding: "0.25em 5%" }}>
          <strong>
            <Trans>後半に特別サービスのごご案内があります</Trans>
          </strong>
        </div>
        <h2>
          <Trans>まもなく、メールにて確認メールをお送りいたします。</Trans>
        </h2>
        <hr />
        <p>
          <Trans>
            もし、３〜５分ほどたっても届かない場合、
            メールの迷惑メールフォルダやスパムフォルダに保存されている可能性があります。
          </Trans>
          <Trans>まず迷惑メールフォルダを確認してみてください。</Trans>
        </p>
        <p>
          <Trans>その中にも見つからない場合は、</Trans>
          <Trans>
            <a href="mailto:kikuo@alizza-ideal.com"> kikuo@alizza-ideal.com</a>{" "}
            までメールにてお問い合わせください。
          </Trans>
          <Trans>よろしくおねがいします。</Trans>
        </p>
      </Banner>
      <Banner
        title={t("電子書籍ではなく、印刷した冊子がほしい方へ")}
        image={dict.imageOf("I Solve It")}
      >
        <p>
          <Trans>
            もし、電子書籍で読むのは辛い。紙に印刷した冊子を送ってほしい方はいませんか？
          </Trans>
          <Trans>
            送料・手数料の780円で、簡易印刷したA４サイズの小冊子を郵送いたします。
          </Trans>
        </p>

        <h2>
          <Trans>お申し込みは簡単</Trans>
        </h2>
        <p>
          <Trans>下のリンクからお支払い方法を選択できます。</Trans>
        </p>
        <p></p>
        <div>
          <a href="https://buy.stripe.com/7sIaHa0PYe2h1by14i">今すぐ申し込む</a>
          <center>
            <Button
              to="https://buy.stripe.com/7sIaHa0PYe2h1by14i"
              text="今すぐ申し込む"
              type="button"
              bgColor="orange"
            />
          </center>
        </div>
      </Banner>
    </Layout>
  )
}

export const query = graphql`
  query ThanksMitoChamberMemberQuery($language: String!) {
    images: allAirtable(filter: { table: { eq: "SiteContents" } }) {
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
      filter: {
        language: { eq: $language }
        ns: { in: ["translation", "thanks"] }
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

export default ThanksMitoChamberMemberPage
