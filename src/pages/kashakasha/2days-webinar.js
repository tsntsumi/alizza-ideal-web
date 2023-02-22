// i18next-extract-mark-ns-start kashakasha
import * as React from "react"
import { useState } from "react"
import { graphql, Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { Trans, useI18next } from "gatsby-plugin-react-i18next"
import { GlobalStyle } from "../../components/layout/styles"
import { LandingPageStyles } from "../../components/layout/landingpage-styles"
import Seo from "../../components/seo"
import YouTube from "react-youtube"

export const Head = ({ location, params, data, pageContext }) => {
  return (
    <Seo
      title={pageContext.title}
      pathname={location.pathname}
      lang={pageContext.language}
    />
  )
}

const KashaKashaDeBestShop = ({ data, pageContext }) => {
  const { t } = useI18next()
  pageContext.title = t(
    "スマホでカシャカシャするだけで地域No.1店を目指せる！Googleマップ集客術"
  )
  return (
    <>
      <GlobalStyle />
      <LandingPageStyles>
        <h1 id="target-call">
          <span style={{ whiteSpace: "nowrap" }}>
            <Trans>小さなお店の１人オーナー・経営者の方へ</Trans>
          </span>
          <span style={{ whiteSpace: "nowrap", fontSize: "0.8em" }}>
            <Trans>スマホでカシャカシャするだけで</Trans>
          </span>
          <span style={{ whiteSpace: "nowrap", fontSize: "0.8em" }}>
            <Trans>地域No.1店を目指せる！</Trans>
          </span>
        </h1>
        <h2>
          <span
            style={{
              color: "yellow",
              whiteSpace: "nowrap",
              fontWeight: 900,
              fontSize: "1.6em",
            }}
          >
            <Trans>Googleマップ集客術</Trans>
          </span>
          <span style={{ color: "yellow", whiteSpace: "nowrap" }}>
            <Trans>《２日間限定セミナー》</Trans>
          </span>
        </h2>
        <h3 id="start-to-click" style={{ color: "yellow", fontWeight: "800" }}>
          <Trans>🔻動画をタップして再生！🔻</Trans>
        </h3>
        <YTVideo />
        <div
          style={{
            textAlign: "center",
            margin: 0,
            padding: 0,
          }}
        >
          <StaticImage
            src="../../images/GMCA-open-account-trial.png"
            alt="open account trial"
          />
        </div>
        <TrialSessionButton />
        <h2>
          <span style={{ color: "yellow", whiteSpace: "nowrap" }}>
            <Trans>Googleマップ・アカウント開設個別体験会</Trans>
          </span>
        </h2>
        <TrialSessionFlow />
        <h2>
          <Trans>参加費用について</Trans>
        </h2>
        <TrialSessionPricing />
        <TrialSessionButton />
        <h2>
          <Trans>参加者限定特典のご紹介</Trans>
        </h2>
        <ExclusiveOffersForParticipants />
        <div style={{ clear: "both" }} />
        <TrialSessionButton />
      </LandingPageStyles>
    </>
  )
}

const YTVideo = () => {
  const [player, setPlayer] = useState()
  const playButtonUrl = "/GMCA_Play_Button.gif"
  const trialImageUrl = "/GMCA_trial_session.gif"

  const onPlayerReady = event => {
    setPlayer(event.target)
  }

  const onPlayerStateChange = event => {
    const ENDED = 0
    if (event.data === ENDED) {
      const img = document.getElementById("play-vedo-button")
      img.src = trialImageUrl
      img.style.display = "block"
      const v = document.getElementById("youtube-video")
      v.style.display = "none"
    }
  }

  const options = {
    playerVars: {
      autoplay: 0,
      enablejsapi: 1,
      iv_load_policy: 3,
      modestbranding: 1,
      origin: "https://www.alizza-ideal.com",
      playsinline: 0,
      rel: 0,
    },
  }

  return (
    <div id="video-container">
      <img
        id="play-vedo-button"
        src={playButtonUrl}
        alt="GMCA Play"
        onClick={e => {
          if (e.target.src === playButtonUrl) {
            return
          }
          e.target.src = trialImageUrl
          const tc = document.getElementById("target-call")
          const v = document.getElementById("youtube-video")
          const sc = document.getElementById("start-to-click")
          v.style.display = "block"
          tc.style.display = "none"
          sc.style.display = "none"
          e.target.style.display = "none"
          player?.playVideo()
        }}
      />
      <YouTube
        id="youtube-video"
        videoId="OwjLx7dh3WQ"
        opts={options}
        onReady={onPlayerReady}
        onStateChange={onPlayerStateChange}
      />
    </div>
  )
}

const TrialSessionButton = () => {
  return (
    <div className="trial-offer">
      <center>
        <Trans>通常５,０００円</Trans>{" "}
        <span style={{ fontSize: "0.6em" }}>
          <Trans>のところ</Trans>
        </span>
      </center>
      <center className="limited">
        <Trans>今だけ</Trans>
        <span className="zero-yen">
          <ruby>
            <span className="zero">
              <Trans>０</Trans>
            </span>
            <rp>（</rp>
            <rt>
              <Trans>ゼロ</Trans>
            </rt>
            <rp>）</rp>
          </ruby>
          <Trans>円</Trans>
        </span>
      </center>
      <center>
        <div className="button-34">
          <Link to="/kashakasha/trial-entry-form">
            <span className="zero-yen">
              <Trans>無料</Trans>
            </span>
            <Trans>Gooleマップアカウント開設個別体験会に申し込んで</Trans>
            <br />
            <span className="zero-yen">
              <Trans>「集客の素」</Trans>
            </span>
            <Trans>３点セットを手に入れる</Trans>
          </Link>
        </div>
      </center>
    </div>
  )
}

const TrialSessionFlow = () => {
  return (
    <>
      <h3>
        <Trans>お申し込みから体験会までの流れ</Trans>
      </h3>
      <div className="container">
        <ol>
          <li>
            <Trans>申込みボタンを押して、お申込み画面を開く</Trans>
          </li>
          <li>
            <Trans>案内にしたがって日時を選択する</Trans>
          </li>
          <li>
            <Trans>
              送られてきたリンクをクリックして、１対１の個別体験会を開始！（６０分程度）
            </Trans>
          </li>
        </ol>
      </div>
    </>
  )
}

const TrialSessionPricing = () => {
  return (
    <div className="container">
      <p>
        <Trans>通常５，０００円のところ</Trans>
      </p>
      <p>
        <Trans>今だけ期間限定で、初回</Trans>
        <ruby>
          <span className="zero">
            <Trans>０円</Trans>
          </span>
          <rp>（</rp>
          <rt>
            <Trans>無料</Trans>
          </rt>
          <rp>）</rp>
        </ruby>
        <Trans>でご参加いただけます。</Trans>
      </p>
      <center>
        <Trans>つまり</Trans>
      </center>
      <center>
        <Trans>通常５，０００円　➔　</Trans>
        <ruby>
          <span className="zero">
            <Trans>０円</Trans>
          </span>
          <rp>（</rp>
          <rt>
            <Trans>無料</Trans>
          </rt>
          <rp>）</rp>
        </ruby>
      </center>
      <ul className="note">
        <li>
          <Trans>
            体験会は、お一人づつ個別に開催させていただいているため、時間的・体力的に限界があります。
            そのため、予告なく終了することがございます。この機会を逃さないよう、お早めにお申し込み下さい
          </Trans>
        </li>
      </ul>
    </div>
  )
}

const ExclusiveOffersForParticipants = () => {
  return (
    <>
      <div className="container">
        <p>
          <Trans>
            体験会にご参加いただいた方には、以下の電子書籍「【集客の素】３点セット」をお渡しいたします
          </Trans>
        </p>
        <ol>
          <li>
            <Trans>Googleに好かれる店舗情報の「登録チェックリスト」</Trans>
            <br />
            <Trans>
              チェックリストの３１の項目をすべて登録するだけで、表示順位がアップします。
            </Trans>
          </li>
          <li>
            <Trans>
              ミスをなくしてライバルを突き離す「やってはいけないGoogleマップ集客方法」
            </Trans>
          </li>
          <li>
            <Trans>
              お客さんを買う気にさせる「ＰＯＰデザインテンプレート集」
            </Trans>
          </li>
        </ol>
      </div>
      <StaticImage
        style={{
          textAlign: "center",
          margin: 0,
          padding: 0,
        }}
        src="../../images/GMCA-elements-to-cxaq.png"
        alt="Exclusive offers"
      />
      <div style={{ clear: "both" }} />
    </>
  )
}

export const query = graphql`
  query kashakashaDeBestShopQuery($language: String!) {
    locales: allLocale(
      filter: {
        language: { eq: $language }
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

export default KashaKashaDeBestShop
