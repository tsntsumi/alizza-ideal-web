// i18next-extract-mark-ns-start thanks
import * as React from "react"
import { graphql } from "gatsby"
import { Trans, useI18next } from "gatsby-plugin-react-i18next"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import { Banner } from "../../components/banner"
import { Claim } from "../../components/claim"
import { ImageDict } from "../../components/imagedict"
import {
  SqueezeForm,
  SubmitInquiryToAirtable,
} from "../../components/squeezeform"

const ZeroYenThanksPage = ({ data }) => {
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
            <Trans>後半に特別無料サービスのごご案内があります</Trans>
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
            <a href="mailto:kikuo+zeroyen@alizza-ideal.com">
              {" "}
              kikuo+zeroyen@alizza-ideal.com
            </a>{" "}
            までメールにてお問い合わせください。
          </Trans>
          <Trans>よろしくおねがいします。</Trans>
        </p>
      </Banner>
      <Claim
        title={t("始め方がわからない方へ無料で登録設定いたします")}
        image={dict.imageOf("I Solve It")}
        name="free gbp open support"
        float="left"
      >
        <p>
          <Trans>
            以下のような方が方がいらっしゃいましたら、どうぞお気軽にお申し込みください。
          </Trans>
          <Trans>
            あなたのお店をGoogleビジネスプロフィールへ無料で登録し初期設定をいたします。
          </Trans>
        </p>
        <p>
          <Trans>
            わたしは多くの方々に、Googleビジネスプロフィールの効果を実感していただきたいと思っています。
          </Trans>
        </p>
        <ul>
          <li>
            <Trans>何から手を付けたらいいかわからない</Trans>
          </li>
          <li>
            <Trans>パソコンをもっていない</Trans>
          </li>
          <li>
            <Trans>登録したはいいけど放置したまま</Trans>
          </li>
          <li>
            <Trans>登録したあと何をすればいいか途方に暮れている</Trans>
          </li>
        </ul>
        <h2>
          <Trans>お申し込みは簡単</Trans>
        </h2>
        <p>
          <Trans>
            下のお申し込みフォームに、お名前または屋号とメールアドレスを入力してボタンを押すだけです。
          </Trans>
          <Trans>追ってメールにてご連絡いたします。</Trans>
        </p>
        <SqueezeForm
          acceptInquiry={false}
          namelabel={t("お名前または屋号")}
          action={SubmitInquiryToAirtable}
          tag="gbpopen"
          nextpage="#"
          cta={t("今すぐ無料で申し込む")}
        />
      </Claim>
    </Layout>
  )
}

export const query = graphql`
  query costcoThanksQuery($language: String!) {
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
      filter: { language: { eq: $language }, ns: { in: ["common", "thanks"] } }
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

export default ZeroYenThanksPage
