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
import { SqueezeForm, SubmitEmailToAirtable } from "../components/squeezeform"

class ImageDict {
  constructor(data) {
    this.dict = this.imageDictionary(data)
  }

  imageOf(name) {
    const images = this.dict[name]
    if (!images || images.length === 0) {
      return null
    }
    return getImage(images.shift())
  }

  imageDictionary(data) {
    const images = data.images.edges.reduce((p, c) => {
      p[c.node.data.Name] = c.node.data.Images.localFiles.map(img => img)
      return p
    }, {})
    return images
  }
}

const IndexPage = ({ data }) => {
  const { t, language } = useI18next()
  const images = new ImageDict(data)

  return (
    <Layout>
      <Seo title="Home" />
      <Banner
        title={t("ローカルSEOで、お客様が集まるお店に")}
        image={images.imageOf("Heros")}
      >
        <p>
          <Trans>
            あなたのお店が、こんなお店になれるとしたらどうでしょうか？
          </Trans>
          <Trans>しかも、お金も時間もほとんどかけずに！？</Trans>
        </p>
        <ul>
          <li>
            <Trans>
              地元で〇〇といえばあなたのお店と呼ばれる地域ダントツのお店
            </Trans>
          </li>
          <li>
            <Trans>
              無理してお客様を集めようとしなくても、ひとりでに集まってくるお店
            </Trans>
          </li>
          <li>
            <Trans>
              いままでお客様を集めていた時間で、お客様により満足してもらえる時間がとれるお店
            </Trans>
          </li>
          <li>
            <Trans>お客様の満足度が上がるから、毎月の売上が安定するお店</Trans>
          </li>
          <li>
            <Trans>
              売上が安定するから、あなたもスタッフも大事な人と過ごす時間が充実する店
            </Trans>
          </li>
        </ul>
        <p>
          <Trans>
            もし、あなたのお店をこんな理想のお店にしたいなら、
            ローカルSEOの専門家、わたくし堤紀久夫が、あなたのお店をプロデュースします。
          </Trans>
        </p>
      </Banner>

      <Perks title={t("ネット集客でこんなことに困っていませんか？")}>
        <Perk
          key="suffer1"
          image={images.imageOf("Suffers")}
          name="a suffer"
          credit={
            <a href="https://www.vecteezy.com/free-vector">
              Vectors by Vecteezy
            </a>
          }
        >
          <h3>
            <Trans>口コミサイトに登録したけど、リピートにつながらない</Trans>
          </h3>
          <p>
            <Trans>
              口コミサイトから流れてくる人の多くは、〇〇な人ばかり。
            </Trans>
            <Trans>
              リピートにつながらないばかりか、利益までガタ落ちしているお店が増えてます。
            </Trans>
          </p>
        </Perk>
        <Perk
          key="suffer2"
          image={images.imageOf("Suffers")}
          name="Suffer"
          credit={
            <a href="https://www.vecteezy.com/free-vector">
              Vectors by Vecteezy
            </a>
          }
        >
          <h3>
            <Trans>インスタグラムを始めたけど、売り上げにつながらない</Trans>
          </h3>
          <p>
            <Trans>日本全国で多くのお店がインスタグラムを始めています。</Trans>
            <Trans>でも、売り上げにつながっているところはまれです。</Trans>
            <Trans>それには理由があるんです。</Trans>
          </p>
        </Perk>
        <Perk
          key="suffer3"
          image={images.imageOf("Suffers")}
          name="Suffer"
          credit={
            <a href="https://www.vecteezy.com/free-vector">
              Vectors by Vecteezy
            </a>
          }
        >
          <h3>
            <Trans>ネットで集客しなきゃ……。わかってるけど始められない</Trans>
          </h3>
          <p>
            <Trans>でも、ちょっと待ってください。</Trans>
            <Trans>
              昨年、ネット集客を始めたばっかりに、
              倒産してしまった優良会社もあるんです。
            </Trans>
          </p>
          <p>
            <Trans>準備なしにネット集客を始めるのは危険です。</Trans>
          </p>
        </Perk>
      </Perks>

      <Banner
        title={t("そのお悩み、わたしが解決します")}
        image={images.imageOf("I Solve It")}
      >
        <h3>
          <Trans>
            もし、そのような悩みをお抱えなら、
            ローカルSEOの専門家・堤がそのお悩みを解決します。
          </Trans>
        </h3>
        <p>
          <Trans>
            地元密着型の店舗オーナー様にピッタリのローカルSEOで、
            あなたの商圏のお客様にアプローチ。
          </Trans>
        </p>
        <p>
          <Trans>
            しかも、広告費をほとんどかけずに、３ヶ月以内に売上がアップします。
          </Trans>
        </p>
        <p>
          <Trans>
            ３ヶ月間、あなたの目標を達成するまで集客にコミットします。
          </Trans>
        </p>
      </Banner>

      <Perks title={t("お客様に選ばれる理由")}>
        <Perk
          image={images.imageOf("Reasons")}
          credit="Photo by TSUTSUMI Kikuo"
        >
          <h3>
            <Trans>お客さんの心をつかむキャッチコピー</Trans>
          </h3>
          <p>
            <Trans>あなたの商品やお店をアピールするための、</Trans>
            <Trans>お客さんの心をつかむキャッチコピーを書く方法。</Trans>
          </p>
        </Perk>
        <Perk
          image={images.imageOf("Reasons")}
          name="reason"
          credit="Photo by TSUTSUMI Kikuo"
        >
          <h3>
            <Trans>Googleの意図を汲みとったローカル SEO 対策</Trans>
          </h3>
          <p>
            <Trans>
              あなたのお店が検索結果上位にランクインするためのローカルSEO対策。
            </Trans>
          </p>
        </Perk>
        <Perk
          image={images.imageOf("Reasons")}
          name="Suffer #1"
          credit={
            <span>
              Photo by
              <a href="https://unsplash.com/@wenhong?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
                Evan Qu on Unsplash
              </a>
            </span>
          }
        >
          <h3>
            <Trans>あなたの商品を引き立てる写真と動画の撮影</Trans>
          </h3>
          <p>
            <Trans>スマホでもできる、カンタン撮影のノウハウ。</Trans>
          </p>
        </Perk>
      </Perks>

      <Claim
        title={t("お客様の声")}
        image={images.imageOf("Voices")}
        name="Client Photo"
        float="left"
      >
        <p>
          <Trans>
            最初は、どうせやるだけ無駄かなと思ってました。
            口コミサイトにも登録して毎月課金してたので。
          </Trans>
        </p>
        <p>
          <Trans>
            でも始めてみたら、たった１週間で、
            ２年ぶりに新しいお客さんが来てくれました。
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
            もう、このお店はたたんで、実家の母とのんびり暮らそうかなと
            思っていたところでした。
          </Trans>
        </p>
        <p>
          <Trans>
            お客さんの反応が実感できたことで、がぜんとやる気がでてきました。
          </Trans>
        </p>
        <p>
          <Trans>
            登録していた口コミサイトの方は、知らない間にクーポンを発行されたりしたので、やめちゃいました。
          </Trans>
        </p>
        <div className="profile">
          <p>
            <Trans>ネイルサロン経営</Trans>
          </p>
          <p>
            <Trans>A.O. 様（４０代・女性）</Trans>
          </p>
        </div>
      </Claim>
      <Claim
        title={t("安心の集客保証 ― 「９０日間」集客にコミットします")}
        image={images.imageOf("Guarantees")}
        name="Guarantees"
        float="left"
      >
        <h3>
          <Trans>
            もし、サポート開始から９０日後にご満足いただけなかったとしたら、
            正式に購入していただいたものとはみなしません。
          </Trans>
        </h3>
        <p>
          <Trans>先に料金をお支払いいただきますが、それは預り金です。</Trans>
        </p>
        <p>
          <Trans>
            お客様の目的が達成できてこそのサービスだと考えるからです。
          </Trans>
        </p>
        <h3>
          <Trans>
            以下を実感していただけなければ、お客様のお金を預かる資格はありません。
          </Trans>
        </h3>
        <p>
          <Trans>全額返金いたします。</Trans>
          <Trans>とくに理由はお聞きしません。</Trans>
          <Trans>一言「実感できなかった」とお知らせください。</Trans>
        </p>
        <ul>
          <li>
            <Trans>
              新規のお客様がサポート開始前より増え、集客の悩みから解放された。
            </Trans>
          </li>
          <li>
            <Trans>
              リピートしてくれるお客様が増え、気持ちに余裕ができた。
            </Trans>
          </li>
          <li>
            <Trans>
              売上が安定し、大事な人と過ごす時間が増え、毎日が充実した。
            </Trans>
          </li>
        </ul>
        <p>
          <Trans>
            以上を９０日後に実感していただけなかったなら、１００％返金いたします。
          </Trans>
        </p>
      </Claim>

      <Claim title={t("本サイト限定キャンペーンのお知らせ")}>
        <h3>
          <center>
            <Trans>今ここで申し込んでくれるなら、初回相談が完全無料！！</Trans>
          </center>
        </h3>

        <p>
          <Trans>
            ここまで読んでいただいたあなたも、
            ローカルSEOでお客様がひとりでに集まる、理想のお店にしたいと思いませんか？
          </Trans>
        </p>
        <p>
          <Trans>
            今ここで、この下のフォームからお申し込みいただけたなら……
          </Trans>
        </p>
        <p>
          <Trans>
            通常は 60 分 30,000円で提供している、
            個別相談を無料で行わせていただきます！
          </Trans>
        </p>

        <p>
          <Trans>この下のフォームからお申し込みください。</Trans>
        </p>
      </Claim>

      <Claim
        title="ローカルSEO対策こそ最先端のネット集客"
        image={images.imageOf("I Solve It")}
        float="right"
      >
        <p>
          <Trans>
            ローカルSEO対策は、MEO対策といったい何が違うのか
            と疑問に思われたかもしれません。
          </Trans>
          <Trans>実はわたしもそうでした。</Trans>
        </p>
        <p>
          <Trans>
            ローカルSEO対策とは、MEO対策と違って、
            最適化対策の対象がGoogleマップに限定されません。
          </Trans>
        </p>
        <p>
          <Trans>ホームページ、ブログ、SNS投稿もそうです。</Trans>
          <Trans>チラシやポスターもそうです。</Trans>
          <Trans>それだけでなく、お店の外観や内装までも対象です。</Trans>
        </p>
        <p>
          <Trans>なぜでしょうか？</Trans>
        </p>
        <p>
          <Trans>
            ここでいう「ローカル」とは、地方とか田舎という意味ではありません。
          </Trans>
        </p>
        <p>
          <Trans>
            「ローカル」は、「グローバル」（全体、全域、広域）に対応する単語なんです。
            したがって、いうなれば「あなたのお店のある周辺とか地域」または、
            「あなたのお店がある地元」のことです。
          </Trans>
        </p>
        <p>
          <Trans>
            これまで行われてきた「SEO対策」は、
            ネットのWebサイトを検索する検索エンジン（サーチ・エンジン）の
            最適化（おプチマイズ）を目的にします。
          </Trans>
        </p>
        <div className="image">
          <GatsbyImage
            image={images.imageOf("I Solve It")}
            alt="Target of SEO, Local SEO"
          />
        </div>
        <p>
          <Trans>
            そして、GoogleはGoogleマップのストリートビューのために集めた写真と、
            Google検索のためにネット上のSNSやブログなどから取り出した情報を、
            人工知能（AI）を使って分析・マッチングして検索できるようにしたんです。
          </Trans>
        </p>
        <p>
          <Trans>
            それらを検索するエンジンを最適化するのがローカルSEO対策なのです。
          </Trans>
        </p>
        <p>
          <Trans>
            したがって、ローカルSEO対策が最適化するのは、
            Googleマップに限ったものではありません。
          </Trans>
        </p>
        <p>
          <Trans>
            ホームページ、ブログ、SNS投稿、チラシやポスター、
            お店の外観や内装などのブランディングにいたるまで、
            最適化を行います。
          </Trans>
        </p>
        <p>
          <Trans>実に最先端のデジタルな集客手法なのです。</Trans>
        </p>
        <div className="profile">
          <p>
            <Trans>ローカルSEOエージェント</Trans>
          </p>
          <p>
            <Trans>堤　紀久夫</Trans>
          </p>
        </div>
      </Claim>

      <Claim
        title={t("60分間の無料個別相談")}
        image={images.imageOf("Voices")}
        float="left"
      >
        <ul>
          <li>
            <Trans>うちの店は何から始めたらいい？</Trans>
          </li>
          <li>
            <Trans>ローカルSEOを始めるタイミングは？</Trans>
          </li>
          <li>
            <Trans>本当にやりきれるか心配</Trans>
          </li>
        </ul>
        <p>
          <Trans>そんな不安、心配、疑問を６０分でスッキリさせましょう。</Trans>
        </p>
        <p>
          <Trans>
            迷っていることを誰かに話すだけでも、
            考えが整理されて頭の中がクリアになりますよ。
          </Trans>
        </p>
        <p>
          <Trans>ご相談はこちら</Trans>
        </p>
        <SqueezeForm
          cta={t("無料相談に申し込む")}
          namelabel={t("お名前")}
          emaillabel={t("メールアドレス")}
          tag="homepage"
          language={language}
          action={SubmitEmailToAirtable}
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
