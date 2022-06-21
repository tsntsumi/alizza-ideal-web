// i18next-extract-mark-ns-start 404
import * as React from "react"
import { graphql } from "gatsby"
import { Trans, useI18next } from "gatsby-plugin-react-i18next"
import styled from "styled-components"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Button from "../components/button"
import { Logo } from "../components/logo"
import { MdArrowBack } from "react-icons/md"

const NotFoundPageStyles = styled.section`
  position: static;
  height: calc(100vh - var(--header-height) / 2);
  overflow-y: scroll;
  text-align: center;
  margin: 0;
  padding: 4rem 1rem 2rem 1rem;
  font-size: calc(var(--notFoundTitle) / 8);
  text-align: center;
  --notFoundTitle: var(--bannerTitle);

  @media (min-width: 100px) {
    --notFoundTitle: calc(var(--bannerTitle) * 2);
  }

  @media (min-width: 360px) {
    --notFoundTitle: calc(var(--bannerTitle) * 4);
  }

  @media (min-width: 414px) {
    --notFoundTitle: calc(var(--bannerTitle) * 5);
  }

  @media (min-width: 768px) {
    --notFoundTitle: calc(var(--bannerTitle) * 6);
  }

  h1 {
    font-size: var(--notFoundTitle);
    font-weight: 900;
    color: pink;
    padding: 0;
    margin: 0;
    word-break: keep-all;
    word-wrap: break-word;
    overflow: hide;
  }
  button {
    position: relative;
    top: calc(-0.3 * var(--notFoundTitle));
    width: unset;
    background-color: pink;
    color: var(--pirmary);
  }
`

const Baloon = styled.div`
  width: calc(var(--notFoundTitle) * 0.4);
  height: calc(var(--notFoundTitle) * 0.4);
  line-height: calc(var(--notFoundTitle) * 0.4);
  position: relative;
  display: inline-block;
  top: calc(var(--notFoundTitle) * -1);
  left: calc(0vw - var(--notFoundTitle) * 0.8);
  virtical-align: middle;
  border-radius: 50%;
  background-color: aliceblue;
  color: var(--primary);
  font-size: calc(var(--notFoundTitle) / 8);
  font-weight: 900;
  margin: 0;
  padding: 0;
  overflow: hidden;
`

const Sorry = styled.p`
  position: relative;
  top: calc(-0.3 * var(--notFoundTitle));
  width: unset;
  text-align: center;
  color: var(--key-dark-color);
`

const NotFoundPage = () => {
  const { t } = useI18next()
  return (
    <Layout>
      <Seo title="404: Not found" />
      <NotFoundPageStyles>
        <Logo to="/" />
        <h1>404</h1>
        <Baloon>Oops!</Baloon>
        <Sorry>
          <Trans>このページは移動したか、もう無くなってしまいました...</Trans>
        </Sorry>
        <div>
          <Button to="/" iconLeft={<MdArrowBack />} text={t("ホームに戻る")} />
        </div>
      </NotFoundPageStyles>
    </Layout>
  )
}

export const query = graphql`
  query ($language: String!) {
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

export default NotFoundPage
