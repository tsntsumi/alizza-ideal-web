// i18next-extract-mark-ns-start home-page
import * as React from "react"
import { graphql } from "gatsby"
import { Trans, useI18next } from "gatsby-plugin-react-i18next"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { Banner } from "../components/banner"
import { Claim } from "../components/claim"
import { Perks, Perk } from "../components/perks"
import { SqueezeForm, SubmitToAirtable } from "../components/squeezeform"

const SelectImages = (name, data) => {
  return data.images.edges
    .filter(e => e.node.data.Name === name)
    .map(e => e.node.data.Images.localFiles.map(img => img))
    .flat()
    .filter(e => !!e)
}

const PerksBlock = ({ name, title, texts, data }) => {
  const images = SelectImages(name, data)

  if (!texts || texts === []) {
    return <></>
  }

  return (
    <Perks title={title}>
      {texts.map((t, i) => (
        <Perk title={t} key={`perk-${i}`}>
          {images && (
            <GatsbyImage image={getImage(images.shift())} alt={`Image ${i}`} />
          )}
        </Perk>
      ))}
    </Perks>
  )
}

const IndexPage = ({ data }) => {
  const { t, language } = useI18next()
  const heroImages = SelectImages("Heros", data)
  const suffers = [t("お悩み1"), t("お悩み2"), t("お悩み3")]
  const reasons = [t("理由1"), t("理由2"), t("理由3")]
  const guarantees = [t("保証１"), t("保証２"), t("保証３")]
  const prospectors = [
    t("見込み客１"),
    t("見込み客２"),
    t("見込み客３"),
    t("見込み客４"),
  ]
  const voiceImages = SelectImages("Voices", data)
  const isolveitImages = SelectImages("I Solve It", data)

  return (
    <Layout>
      <Seo title="Home" />
      <Banner title={t("ベネフィット")} image={heroImages.shift()}>
        <p>
          <Trans>キャッチフレーズ</Trans>
        </p>
      </Banner>

      <PerksBlock
        name="Suffers"
        title={t("あなたは、こんなお悩みがありませんか？")}
        texts={suffers}
        data={data}
      />

      <Banner
        title={t("そのお悩み、解決できます")}
        image={isolveitImages.pop()}
      >
        <h4>
          <Trans>あなたの悩みを解決する仕掛けとは</Trans>
        </h4>
        <ul>
          <li key="b1">
            <Trans>ブログやSNSを頑張らずに</Trans>
          </li>
          <li key="b2">
            <Trans>ホームページも作らずに</Trans>
          </li>
          <li key="b3">
            <Trans>９０日以内で</Trans>
          </li>
        </ul>
        <p>
          <Trans>Google ビジネスプロフィールを中心に組み立てる、</Trans>
          <Trans>お客さんが、自然に、繰り返し、集まる仕掛けです。</Trans>
        </p>
      </Banner>

      <Claim title={t("こんな方々が、特に成果を出しています。")}>
        <div
          style={{
            width: "auto",
            minWidth: "98%",
            marginRight: "0",
            marginLeft: "0",
            display: "flex",
            flex: "1 1",
            alignItems: "center",
            justifyContent: "center",
            verticalAlign: "start",
          }}
        >
          <ul
            style={{
              minWidth: "40%",
              maxWidth: "40%",
              margin: "0 1em",
              padding: "0 1em 0 4px",
            }}
          >
            {prospectors.map((pros, i) => (
              <li key={`effective-${i}`}>{pros}</li>
            ))}
          </ul>

          <ul
            style={{
              minWidth: "40%",
              maxWidth: "40%",
              margin: "auto 1em",
              padding: "0 0 0 1em",
            }}
          >
            <li key="1">
              <Trans>コロナ禍と景気の影響による売上の低迷を挽回したい方</Trans>
            </li>
            <li key="2">
              <Trans>挽回するだけでなく、さらに上を目指したい方</Trans>
            </li>
            <li key="3">
              <Trans>
                商品・サービスに自信があるし、いつも研鑽に励んでいる方
              </Trans>
            </li>
            <li key="4">
              <Trans>でも、集客する時間をなかなか作れない方</Trans>
            </li>
          </ul>
        </div>
      </Claim>

      <PerksBlock
        name="Reasons"
        title={t("お客様に選ばれる理由")}
        texts={reasons}
        data={data}
      />

      <Claim title={t("お客様の声")} float="left">
        <GatsbyImage image={getImage(voiceImages.pop())} alt="Client Image" />
        <p>
          <Trans>
            最初は、ポータルサイトにも登録してたし、
            どうせやるだけ無駄かなと思ってました。
          </Trans>
        </p>
        <p>
          <Trans>
            でも、はじめてみたら、写真をみてくれた人数や、
            道順を表示してくれた人数がわかるようになったんです。
          </Trans>
          <Trans>
            いままで、お客さんの反応がわからなかったので、
            だれもお店のことを知らないんじゃないかって不安に思ってました。
          </Trans>
        </p>
        <p>
          <Trans>
            もう、このお店はたたんで、実家の母とのんびり暮らそうかなと思っていたところでした。
          </Trans>
        </p>
        <p>
          <Trans>
            お客さんの反応が実感できたことで、がぜんとやる気がでてきました。
          </Trans>
        </p>
        <p>
          <Trans>
            それに、はじめてから１週間で、２年ぶりに新しいお客さんが来てくれました。
          </Trans>
        </p>
        <p>
          <Trans>
            登録していたポータルサイトの方は、知らない間にクーポンを発行されたりしたので、やめちゃいました。
          </Trans>
        </p>
        <div className="clients_profile">
          <p>
            <Trans>ネイルサロン経営</Trans>
          </p>
          <p>
            <Trans>A.O. 様（４０代・女性）</Trans>
          </p>
        </div>
      </Claim>

      <PerksBlock
        name="Guarantees"
        title={t("安心の３つの保証")}
        texts={guarantees}
        data={data}
      />

      <Claim title={t("本サイト限定キャンペーンのお知らせ")}>
        <h3>
          <Trans>
            今ここで申し込んでくれるなら、広告・宣伝が３０日間無料！
          </Trans>
        </h3>
        <p>
          <Trans>
            ネット広告の制作と運用を、３０日の間、わたしが運用いたします。
          </Trans>
          <Trans>しかも、制作費、運用費はこちらで負担します。</Trans>
        </p>
        <p>
          <Trans>さらに、ネット広告からリストを取得するための</Trans>{" "}
          <Trans>
            LP（ランディングページ）も費用を請求することなく制作いたします。
          </Trans>
        </p>
        <p>
          <Trans>
            ただし、広告・宣伝の成果は、わたしの実績として使用させていただきます。
          </Trans>
        </p>

        <p>
          <span
            style={{ color: "red", fontWeight: "400", fontSize: "var(--h4)" }}
          >
            <Trans>
              先着３人までの特別キャンペーンです。お問い合わせはお早めに。
            </Trans>
          </span>
        </p>

        <SqueezeForm
          cta={t("今すぐ問い合わせる")}
          namelabel={t("会社名と担当者名")}
          emaillabel={t("メールアドレス")}
          tag="homepage"
          language={language}
          action={SubmitToAirtable}
          nextpage="/thanks/homepage-thanks"
        />
      </Claim>

      <div style={{ fontSize: "8px", color: "lightGley" }}>
        <a href="https://www.vecteezy.com/free-vector">Vectors by Vecteezy</a>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query homePageQuery($language: String!) {
    images: allAirtable(
      filter: {
        table: { eq: "SiteContents" }
        data: { Images: { id: { ne: null } } }
      }
    ) {
      edges {
        node {
          table
          id
          data {
            Name
            Status
            Images {
              localFiles {
                base
                url
                childImageSharp {
                  gatsbyImageData(
                    breakpoints: [360, 720, 1024]
                    jpgOptions: { progressive: true }
                    formats: [AUTO, WEBP, AVIF]
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

    locales: allLocale(filter: { language: { eq: $language } }) {
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

export default IndexPage
