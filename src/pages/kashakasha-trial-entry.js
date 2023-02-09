// i18next-extract-mark-ns-start kashakasha
import * as React from "react"
import { useState } from "react"
import { graphql, Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { Trans, useI18next } from "gatsby-plugin-react-i18next"
import styled from "styled-components"
import { GlobalStyle } from "../components/layout/styles"
import Seo from "../components/seo"

export const Head = ({ location, params, data, pageContext }) => {
  return (
    <Seo
      title={pageContext.title}
      pathname={location.pathname}
      lang={pageContext.language}
    />
  )
}

const KashaKashaTrialEntry = ({ data, pageContext }) => {
  const { t } = useI18next()
  pageContext.title = t(
    "Googleマップ集客術　Googleマップアカウント開設個別体験会登録フォーム"
  )
  return (
    <>
      <GlobalStyle />
      <PageStyles>
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
          <Trans>🔻タップして再生！🔻</Trans>
        </h3>
        <YTVideo />
        <StaticImage
          src="../images/GMCA-open-account-trial.png"
          alt="open account trial"
        />
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
      </PageStyles>
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
        videoId="kpEoUcvEVfA"
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
      <center className="applicate-button">
        <Link to="/kashakasha-map-shukyaku">
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
      <div class="container">
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
    <div class="container">
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
      <ul class="note">
        <li>
          <Trans>
            体験会は、お一人づつ個別に開催させていただいているため、時間的・体力的に限界がありますので、
            予告なく終了することがございます。この機会を逃さないよう、お早めにお申し込み下さい
          </Trans>
        </li>
      </ul>
    </div>
  )
}

const ExclusiveOffersForParticipants = () => {
  return (
    <div className="container">
      <p>
        <Trans>
          体験会にご参加いただいた方には、以下の電子書籍「【集客の素】３点セット」をお渡しいたします
        </Trans>
      </p>
      <ol>
        <li>
          <Trans>Googleに好かれる店舗情報の「登録チェックリスト」</Trans>
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
      <StaticImage
        src="../images/GMCA-elements-to-cxaq.png"
        alt="Exclusive offers"
      />
      <div style={{ clear: "both" }} />
    </div>
  )
}

const PageStyles = styled.section`
  #video-container {
    position: relative;
    width: 100%;
    padding: 56.25% 0 0 0;
    margin: 0;
    img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  }

  #youtube-video {
    position: absolute;
    display: none;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
  }

  .trial-offer {
    padding: 0.75em;
    background-color: #3e88bf;
    color: white;
    @media (min-width: 800px) {
      font-size: 2em;
    }
  }

  .zero-yen {
    font-weight: 900;
    color: yellow;
  }
  .zero {
    font-size: 1.5em;
  }
  .limited {
    font-size: 1.2em;
  }

  .applicate-button {
    background-color: orange;
    border: 4px solid orange;
    border-radius: 1.2em;
    font-size: 0.8em;
    font-weight: bold;
    padding: 0.4em;
    cursor: pointer;
    .zero-yen {
      color: darkred;
    }
    &:hover {
      background: white;
      color: orange;
      border: 4px solid orange;
    }
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
  h1,
  h2,
  h3 {
    padding: 0.3em;
    margin: 0;
    color: white;
    font-size: 1.2em;
    text-align: center;
  }
  h1,
  h2 {
    background-color: #1e426d;
  }
  h2,
  h3 {
    padding: 1em 0.3em;
  }
  h3 {
    background-color: #4797c7;
  }
  @media (min-width: 450px) {
    h1,
    h2,
    h3 {
      font-size: 1.8em;
    }
  }
  .container {
    color: black;
    margin: 1.2em auto;
    ul,
    ol {
      margin: 1em 0.4em;
    }
    .zero {
      color: darkred;
      font-weight: 800;
    }
  }
  .note {
    color: blue;
    font-size: 0.8em;
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

export const query = graphql`
  query kashakashaTrialEntryQuery($language: String!) {
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

export default KashaKashaTrialEntry
