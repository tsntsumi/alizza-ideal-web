// i18next-extract-mark-ns-start index
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
        <Perk title={t} key={`perk-${i}`} image={images.shift()}>
          <div
            style={{
              fontSize: "8px",
              color: "lightGley",
              textAlign: "right",
            }}
          >
            <a href="https://www.vecteezy.com/free-vector">
              Vectors by Vecteezy
            </a>
          </div>
        </Perk>
      ))}
    </Perks>
  )
}

const IndexPage = ({ data }) => {
  const { t, language } = useI18next()
  const heroImages = SelectImages("Heros", data)
  const suffers = [t("お悩み1"), t("お悩み2"), t("お悩み3")]
  const prospectors = [
    t("見込み客１"),
    t("見込み客２"),
    t("見込み客３"),
    t("見込み客４"),
  ]
  const voiceImages = SelectImages("Voices", data)
  const isolveitImages = SelectImages("I Solve It", data)
  const guaranteeImages = SelectImages("Guarantees", data)
  const reasonImages = SelectImages("Reasons", data)

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
        <p>
          <Trans>
            あなたは、もうブログや SNS や、ホームページの
            SEOを気にする必要はありません。
          </Trans>
        </p>
        <ul>
          <li>
            <Trans>あなたのお店のローカル SEOと、</Trans>
          </li>
          <li>
            <Trans>Facebook や Google や YouTube 広告と、</Trans>
          </li>
          <li>
            <Trans>クラウドシステムの仕掛けを使って、</Trans>
          </li>
        </ul>
        <p>
          <Trans>
            お客さんが自然と繰り返し集まってくるようになり、今よりもガンガン儲かるようになります。
          </Trans>
        </p>
        <p>
          <em>
            <Trans>しかも９０日以内で！</Trans>
          </em>
        </p>
        <p>
          <Trans>
            つまり、あなたがお客さんを集めなくても、お客さんが集まってくるようになります。
          </Trans>
        </p>
        <p>
          <Trans>
            いわば、あなたは余分な費用をかけずに、ネット上に営業担当を雇うようなものです。
          </Trans>
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

      <Perks title={t("お客様に選ばれる理由")}>
        <Perk
          title={t(
            "お客さんの心をつかむキャッチコピーで、あなたの商品をアピール"
          )}
          image={reasonImages.shift()}
        >
          <div className="photoCredit">Photo by TSUTSUMI Kikuo</div>
        </Perk>
        <Perk
          title={t(
            "Googleの意図をくみとった店舗向け地域 SEO 対策で、あなたのお店を検索結果上位に表示"
          )}
          image={reasonImages.shift()}
        >
          <div className="photoCredit">Photo by TSUTSUMI Kikuo</div>
        </Perk>
        <Perk
          title={t("あなたの商品を引き立てる写真、動画を撮影")}
          image={reasonImages.shift()}
        >
          <div className="photoCredit">
            Photo by{" "}
            <a href="https://unsplash.com/@wenhong?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
              Evan Qu on Unsplash
            </a>
          </div>
        </Perk>
      </Perks>

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
            でも始めてみたら、たった１週間で、２年ぶりに新しいお客さんが来てくれました。
          </Trans>
        </p>
        <p>
          <Trans>
            それに、写真をみてくれた人数や、
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
      <Perks title={t("安心の３つの保証")}>
        <Perk title={t("９０日間集客保証")} image={guaranteeImages.shift()}>
          <div className="photoCredit">Photo and Illust by TSUTSUMI Kikuo</div>
          <p>
            <Trans>９０日以内に集客できなければ返金します。</Trans>
          </p>
        </Perk>
        <Perk
          title={t("３００リスト獲得保保証")}
          image={guaranteeImages.shift()}
        >
          <div className="photoCredit">
            Photo by{" "}
            <a href="https://unsplash.com/photos/3Mhgvrk4tjM?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink">
              {" "}
              Stephen Phillips - Hostreviews.co.uk
            </a>
          </div>
          <p>
            <Trans>
              ３０日以内に見込み客リストが３００件集まらなければ、獲得するまで無料で集客にコミットします。
            </Trans>
          </p>
        </Perk>
        <Perk
          title={t("お客さんが集まる仕掛け２０万円相当を提供")}
          image={guaranteeImages.shift()}
        >
          <div className="photoCredit">
            Photo by{" "}
            <a href="https://unsplash.com/@arkanperdana?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
              Arkan Perdana on Unsplash
            </a>
          </div>
          <p>
            <Trans>
              お客さんが集まるようになるクラウドシステムを、あなたの代わりにわたしが購入して提供いたします。
            </Trans>
          </p>
        </Perk>
      </Perks>
      <Claim title={t("本サイト限定キャンペーンのお知らせ")}>
        <h3>
          <Trans>
            今ここで申し込んでくれるなら、広告・宣伝が３０日間無料！
          </Trans>
        </h3>
        <p>
          <Trans>
            ネット広告を、３０日の間、わたしが制作・運用いたします。
          </Trans>
          <Trans>しかも、制作費、運用費はこちらで負担します。</Trans>
        </p>
        <p>
          <Trans>
            さらに、ネット広告から見込み客リストを取得するための
            LP（ランディングページ）も、費用を請求することなく制作いたします。
          </Trans>
        </p>
        <p>
          <Trans>
            ご請求させていただくのは、３０日たって成果がでたとき以降に継続する場合だけ。もちろん、３０日以降に継続するかどうかはご自由にお決めください。
          </Trans>
        </p>
        <p>
          <Trans>
            つまり、あなたは３０日間、あなたのお店のネット広告・宣伝を無料で試すことができます。それでもし、わたしを気に入っていただければ、ご継続していただけると嬉しく思います。
          </Trans>
        </p>
        <p>
          <Trans>
            ただし、３０日間無料でお試しいただくには、ひとつだけ条件があります。
          </Trans>
        </p>
        <p>
          <Trans>
            それは、広告・宣伝の結果を、わたしの成果と実績として使用させていただくこと。このページにも掲載しているお客様の声として、可能な範囲で掲載させていただきます。
          </Trans>
        </p>
        <p>
          <Trans>それだけです。</Trans>
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
        <p>
          <Trans>あなたとお会いできるのを楽しみにしています。</Trans>
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
        ns: { in: ["translation", "index"] }
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

export default IndexPage
