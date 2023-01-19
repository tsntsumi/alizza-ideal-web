// i18next-extract-mark-ns-start index
import * as React from "react"
import { graphql } from "gatsby"
import { Trans, useI18next } from "gatsby-plugin-react-i18next"
import { GatsbyImage, StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { Banner } from "../components/banner"
import { Claim } from "../components/claim"
import { Perks, Perk } from "../components/perks"
import { SqueezeForm, SubmitEmailToAirtable } from "../components/squeezeform"
import { ImageDict } from "../components/imagedict"

const IndexPage = ({ data }) => {
  const { t, language } = useI18next()
  const images = new ImageDict(data)

  return (
    <Layout>
      <Seo title="Home" />
      <Banner
        title={t("小さなお店のひとりオーナー・経営者の方へ")}
        image={images.imageOf("Heros")}
        position="center"
      >
        <StaticImage
          src="../images/KashaKasha-Map-Shukyaku.png"
          alt={t("スマホでカシャカシャするだけのネット集客術")}
        />
      </Banner>

      <Claim
        title={t("Googleマップ集客術は、こんな人にオススメです")}
        name="recommends"
        float="right"
      >
        <ul>
          <li>
            <Trans>
              新型コロナの変異種がまた流行したり、ハイパーインフレになっても、毎月きちんと売上を上げたい人
            </Trans>
          </li>
          <li>
            <Trans>
              毎日、あなたの時間をたくさん集客に使っているのに、成果を実感できていない人
            </Trans>
          </li>
          <li>
            <Trans>
              多くの広告費をかけなくても、新規のお客さんが来るようにしたい人
            </Trans>
          </li>
          <li>
            <Trans>
              せっかくホームページを作ったのに、まったく問い合わせがない人
            </Trans>
          </li>
          <li>
            <Trans>
              ほとんど何もしなくても、問い合わせや予約が入るようにしたい人
            </Trans>
          </li>
          <li>
            <Trans>
              ビューティーサロン、ヘアサロン、飲食店、治療院、不動産仲介業、行政書士、税理士など、店舗や事務所がある専門家の方
            </Trans>
          </li>
          <li>
            <Trans>
              電話営業してきたMEO対策会社と契約したのに、来店数も売上も延びなかった人
            </Trans>
          </li>
          <li>
            <Trans>地域でナンバーワンのお店になりたい人</Trans>
          </li>
        </ul>
      </Claim>

      <Banner
        title={t("Googleマップ集客術では、こんなことを知ることができます")}
        image={images.imageOf("I Solve It")}
        position="left"
      >
        <ul>
          <li>
            あなたも商圏で一人勝ち! 小さくても繁盛店がやっている方法とは？
          </li>
          <li>あなたの時間もお金もかけずに、 勝手にお客が集まる方法とは？</li>
          <li>なぜ、口コミサイトにお金を払っても集客できないのか？</li>
          <li>なぜ、インスタグラムよりGoogleマップなのか？</li>
          <li>
            悪い口コミを書かれても、逆にお客が集まってしまう口コミ対策とは?
          </li>
          <li>
            迷惑なお客が集まってしまう！みんなやっているけど、やってはいけない集客方法とは？
          </li>
        </ul>
      </Banner>

      <Perks title={t("Googleマップ集客術であなたに起こること")}>
        <Perk
          image={images.imageOf("Reasons")}
          credit="Photo by TSUTSUMI Kikuo"
        >
          <h3>
            勝手にお客さんが集まるから、月末になって売上が足りないと慌てることがなくなる
          </h3>
        </Perk>
        <Perk
          image={images.imageOf("Reasons")}
          credit="Photo by TSUTSUMI Kikuo"
        >
          <h3>
            マップで検索１位になるだけでなく、実際に来店するお客さんが増えて、売上がアップする
          </h3>
        </Perk>
        <Perk
          image={images.imageOf("Reasons")}
          credit="Photo by TSUTSUMI Kikuo"
        >
          <h3>
            ブログ、SNS投稿、チラシ、DM配布など、あなたの時間もお金も使わなくてよくなる
          </h3>
        </Perk>
        <Perk
          image={images.imageOf("Reasons")}
          credit="Photo by TSUTSUMI Kikuo"
        >
          <h3>余裕を持ってお客さんにサービスできるようになる</h3>
        </Perk>
        <Perk
          image={images.imageOf("Reasons")}
          credit="Photo by TSUTSUMI Kikuo"
        >
          <h3>お客さんが満足してくれてファンになり、リピート率がアップする</h3>
        </Perk>
        <Perk
          image={images.imageOf("Reasons")}
          credit="Photo by TSUTSUMI Kikuo"
        >
          <h3>
            お客さんだけでなく、あなたの大切な人にも時間とお金を使えるようになる
          </h3>
        </Perk>
      </Perks>

      <Claim title={t("自己紹介")} name="self introduce" float="right">
        <ul>
          <li>小さなお店のためのGoogleマップ集客の専門家</li>
          <li>副業の販売不振からインターネット・マーケティングを習得</li>
          <li>前職はインターネットやウェブ関連のプログラマー</li>
          <li>大学では経営学とソフトウェア工学および人工知能を専攻</li>
          <li>
            現在は、小さなお店のオーナーに、ゼロ円で集客できる「Googleマップ集客術」を広めている
          </li>
        </ul>
        <div className="image">
          <GatsbyImage image={images.imageOf("Heros")} alt="self introduce" />
        </div>
        <div style={{ clear: "both" }} />
      </Claim>

      <Claim
        title={t("なぜGoogleマップ集客は成果が上がるのか")}
        name="Proof"
        float="none"
      >
        <h3>
          <Trans>理由１：お客さんの行動から</Trans>
        </h3>
        <ul>
          <li>
            <Trans>お店を探している 86%の人は、Googleマップを使っている</Trans>
          </li>
          <li>
            <Trans>
              ４大地図アプリのユーザーは、99.4%がGoogleマップを使っている
            </Trans>
          </li>
          <li>
            <Trans>Googleマップを活用しているお店は、たった6%</Trans>
          </li>
          <li>
            <Trans>Instagramでお店を探している人は、１０%未満</Trans>
          </li>
        </ul>
        <div className="image">
          <StaticImage
            src="../images/Customer-vs-Owner.png"
            alt="Customer vs Owner"
          />
        </div>
        <h3>
          <Trans>理由２：口コミサイトの問題点から</Trans>
        </h3>
        <ul>
          <li>
            <Trans>
              口コミサイトは、お客さんが信頼しなくなって使われなくなりつつある
            </Trans>
          </li>
          <li>
            <Trans>
              口コミサイトは、登録しても追加料金を払わないと検索上位に出ないことが多い
            </Trans>
          </li>
          <li>
            <Trans>
              口コミサイトでクーポンを発行して集客しても、クレームが多くリピートもしないクーポン難民が集まってしまい、時間とお金を浪費する
            </Trans>
          </li>
        </ul>
        <div className="image">
          <StaticImage
            src="../images/Reliability of Review Sites.png"
            alt="Reliability of Review Sites"
          />
          <div className="footnote" style={{ textAlign: "right" }}>
            (株)テーブルチェック調べ
          </div>
        </div>
        <h3>
          <Trans>理由３：Google検索の表示から</Trans>
        </h3>
        <div className="float-right">
          <StaticImage
            src="../images/local-search-listing.png"
            alt="Local Search Listing"
          />
        </div>
        <ul>
          <li>
            <Trans>
              ❶検索するとGoogleマップの情報が一番上に表示される（Google広告があれば、広告が一番上）
            </Trans>
          </li>
          <li>
            <Trans>
              ❷検索結果からルートボタン１タップでお店までのナビを表示できる
            </Trans>
          </li>
          <li>
            <Trans>
              ❸口コミサイトのページは、マップのお店より下に表示される
            </Trans>
          </li>
          <li>
            <Trans>❹ホームページは、一番下に表示される。</Trans>
            <Trans>スクロールしないと見えない</Trans>
          </li>
          <li>
            <Trans>
              検索した人は、検索結果の１番目から３番目しか見ない傾向がある
            </Trans>
          </li>
          <li>
            <Trans>
              お店から６キロ以内にいる人の 80%は、検索後１日以内に来店する
            </Trans>
          </li>
        </ul>
        <h3>
          <Trans>
            結論：小さなお店の１人オーナー・経営者には、Googleマップ集客が１番である
          </Trans>
        </h3>
        <ul>
          <li>
            <Trans>あなたのお金がかからない</Trans>
          </li>
          <li>
            <Trans>あなたの時間もかからない</Trans>
          </li>
          <li>
            <Trans>検索上位に表示されやすい</Trans>
          </li>
          <li>
            <Trans>お客さんはGoogleマップで探してる</Trans>
          </li>
          <li>
            <Trans>まだ使っているお店が少ない</Trans>
          </li>
        </ul>
        <p>
          <strong>
            <Trans>つまり、今なら商圏のお客さんをひとりじめできる！</Trans>
          </strong>
        </p>
      </Claim>

      <Claim
        title={t("お客様の声")}
        image={images.imageOf("Voices")}
        name="Client Photo"
        float="left"
      >
        <h3>
          <Trans>
            ネイルサロンを経営するひとりオーナーネイリストのA.O.
            様（４０代・女性）
          </Trans>
        </h3>
        <p>
          <Trans>最初は、どうせやるだけ無駄かなと思ってました。</Trans>
          <Trans>
            口コミサイトにも登録して毎月課金してたので、これ以上やってもだめだと思ってました。
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
            いままで、ポスターを貼ったりFacebookに写真を投稿しても、なんの反応もなかったので、
            だれもお店のことを知らないんじゃないかって不安に思ってました。
          </Trans>
        </p>
        <p>
          <Trans>
            始める直前まで、もう、このお店はたたんで、実家の母とのんびり暮らそうかなと
            思っていたところでした。
          </Trans>
        </p>
        <p>
          <Trans>
            お客さんの反応が実感できたことで、がぜんとやる気がでてきたんです。
          </Trans>
        </p>
        <p>
          <Trans>
            登録していた口コミサイトの方は、知らない間にクーポンを発行されたりしたので、やめちゃいました。
          </Trans>
        </p>
      </Claim>

      <Claim
        title={t("安心の集客保証「９０日間」集客にコミット")}
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
          <Trans>
            ただ単に「実感できなかったので返金してもらいたい」とお知らせください。
          </Trans>
        </p>
        <ul>
          <li>
            <Trans>
              新規のお客様が以前より増え、集客の悩みから解放されたと感じた。
            </Trans>
          </li>
          <li>
            <Trans>お客様が満足してくれることが多くなったと感じた。</Trans>
          </li>
          <li>
            <Trans>
              リピートしてくれるお客様が増え、気持ちに余裕ができたと感じた。
            </Trans>
          </li>
          <li>
            <Trans>
              売上が安定し、大事な人と過ごす時間が増え、１日終わりに充実している感じた。
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
            <Trans>
              今ここで申し込んでくれるなら、初回個別集客相談が完全無料！！
            </Trans>
          </center>
        </h3>

        <p>
          <Trans>
            ここまで読んでいただいたあなたも、
            Googleマップ集客術を学んで、お客様がひとりでに集まり、
            商圏のお客さんに愛されるお店にしたいと思いませんか？
          </Trans>
        </p>
        <p>
          <Trans>
            今ここで、この下のフォームからお申し込みいただけたなら……
          </Trans>
        </p>
        <p>
          <Trans>
            通常は 60 分 5,000円で提供している、
            個別集客相談を無料で行わせていただきます！
          </Trans>
        </p>

        <p>
          <Trans>この下のフォームからお申し込みください。</Trans>
        </p>
        <SqueezeForm
          cta={t("今すぐ無料相談に申し込む")}
          withoutName={true}
          emaillabel={"メールアドレスを入力"}
          acceptInquiry={false}
          action={SubmitEmailToAirtable}
          nextpage="/thanks/homepage-thanks"
          tag="homepage"
        />
      </Claim>

      <Claim
        title="堤からのメッセージ"
        image={images.imageOf("I Solve It")}
        float="right"
      >
        <h3>
          <Trans>わたしも売上で悩んでいました</Trans>
        </h3>
        <p>
          <Trans>数年前、結婚を機に副業を始めたんです。</Trans>
          <Trans>
            ハンドメイド作品を制作したのですが、全く売れることはありませんでした。
          </Trans>
        </p>
        <p>
          <Trans>
            ハンドメイドを選んだのは、子供の頃から絵を書いたり工作したりとものを作るのが大好きだったからです。
          </Trans>
        </p>
        <p>
          <Trans>
            しかし、売れるどころか、作品のページすら誰にも見てもらえませんでした。
          </Trans>
          <Trans>
            実際に手にとって貰えれば、質感とか、品質のよさとかわかってもらえるのにと思いました。
          </Trans>
          <Trans>しかし、店舗を構える余裕はありませんでした。</Trans>
        </p>
        <p>
          <Trans>
            そこで、インターネット・マーケティングの勉強を始めたのです。
          </Trans>
        </p>
        <p>
          <Trans>
            すると、大学で習った経営学とは、全く異なる方法論を知ることができました。
          </Trans>
          <Trans>小さなお店に最適なマーケティングの方法です。</Trans>
          <Trans>
            多くの小さなお店は、見様見真似で大きな企業向けのマーケティングを行ってしまっています。
          </Trans>
        </p>
        <p>
          <Trans>
            小さなお店は、小さなお店に最適で効果のある集客行うべきなんです。
          </Trans>
        </p>
        <p>
          <Trans>
            そして、Googleマップ集客術では、
            そんな小さなお店に最適な方法をお伝えしています。
          </Trans>
        </p>
        <p>
          <Trans>
            これまで多くの人が、ホームページがいい、
            いやこれからはブログだ、いやSNSだ、 Instagram だ、 今度こそ TicTok
            で、と流行り廃りの多い集客法を
            流浪の民のごとく、あれやこれやと試されています。
          </Trans>
          <Trans>あなたは、いかがですか？</Trans>
        </p>

        <p>
          <Trans>
            できうれば、Googleマップ集客術で、
            さまよえる集客の旅を終えられんことを願っています。
          </Trans>
          <Trans>わたしのように、 無駄な回り道は避けられますように。</Trans>
        </p>

        <div className="profile">
          <p>
            <Trans>小さなお店のGoogleマップ集客の専門家</Trans>
          </p>
          <p>
            <Trans>堤　紀久夫</Trans>
          </p>
        </div>
      </Claim>

      <Claim
        title={t("弊サイト限定、60分間の無料個別集客相談")}
        image={images.imageOf("Voices")}
        float="left"
      >
        <ul className="next-to-float">
          <li>
            <Trans>うちの店は何から始めたらいい？</Trans>
          </li>
          <li>
            <Trans>うちの店でも効果あるの？</Trans>
          </li>
          <li>
            <Trans>自分だけでできないの？</Trans>
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
          <Trans>無料の集客相談はこちら</Trans>
        </p>
        <SqueezeForm
          cta={t("無料集客相談に申し込む")}
          withoutName={true}
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
