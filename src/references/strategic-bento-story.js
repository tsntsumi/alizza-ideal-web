// i18next-extract-mark-ns-start translation
import * as React from "react"
import styled from "styled-components"
import { useI18next } from "gatsby-plugin-react-i18next"

const SectionStyles = styled.section``

export const AbstractOfStrategicBentoStory = () => {
  const { language } = useI18next()

  if (language === "ja") {
    return (
      <SectionStyles>
        <p>
          この
          <ruby>
            物語
            <rp>（</rp>
            <rt>ストーリー</rt>
            <rp>）</rp>
          </ruby>
          の主人公である　堤紀久夫　(57) は、 ３３年間勤めたコンピューター会社を
          <ruby>
            事情があって
            <rp>（</rp>
            <rt>パワハラにあって</rt>
            <rp>）</rp>
          </ruby>
          辞めることになり、 退職金を元手にビジネスを始めることになりました。
        </p>
        <p>
          選んだのは、いまは暗闇のように先の見えないといわれる飲食ビジネス。
        </p>
        <p>
          イヤハヤ、いかなる事態が
          <ruby>
            出来
            <rp>（</rp>
            <rt>しゅったい</rt>
            <rp>）</rp>
          </ruby>
          することになりますことやら・・・。
        </p>
      </SectionStyles>
    )
  } else if (language === "en") {
    return (
      <SectionStyles>
        <p>
          The main character of this story, Kikuo Tsutsumi (57), left the
          computer company where he had worked for 33 years{" "}
          <ruby>
            due to circumstances <rp>(</rp>
            <rt>because of power harassment</rt>
            <rp>)</rp>
          </ruby>
          . He decided to use his retirement money to start a business.
        </p>
        <p>
          He chose the food and beverage business, which is said to be as dark
          as the future.
        </p>
        <p>I don’t know, what kind of situation will end up...</p>
      </SectionStyles>
    )
  } else if (language === "tl") {
    return (
      <SectionStyles>
        <p>
          Ang pangunahing tauhan ng kuwentong ito, si Kikuo Tsutsumi (57), ay
          umalis sa kumpanya ng kompyuter kung saan siya nagtrabaho sa loob ng
          33 taon{" "}
          <ruby>
            dahil sa mga pangyayari<rp>(</rp>
            <rt>dahil sa power harassment</rt>
            <rp>)</rp>
          </ruby>
          . Nagpasya siyang gamitin ang kanyang pera sa pagreretiro upang
          magsimula ng isang negosyo.
        </p>
        <p>
          Pinili niya ang negosyong pagkain at inumin, na sinasabing kasing
          dilim ng hinaharap.
        </p>
        <p>Hindi ko alam, anong klaseng sitwasyon ang hahantong...</p>
      </SectionStyles>
    )
  } else {
    return <></>
  }
}

export default AbstractOfStrategicBentoStory
