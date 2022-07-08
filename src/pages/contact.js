// i18next-extract-mark-ns-start contact
import * as React from "react"
import { graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { Trans, useI18next } from "gatsby-plugin-react-i18next"
import Layout from "../components/layout"
import Contact from "../components/contact"
import Seo from "../components/seo"
import SimpleBanner from "../components/simplebanner"
import styled from "styled-components"

const ContactPage = ({ data }) => {
  const { t } = useI18next()
  return (
    <>
      <Layout>
        <ContactPageStyles>
          <Seo title="Get in touch" />
          <SimpleBanner title={t("Get in touch")}>
            <StaticImage
              className="banner__image"
              src="../../static/i-programmer-chair.jpg"
              alt="Contact me"
            />
          </SimpleBanner>
          <Contact />
          <Remark>
            <div className="section container container__tight">
              <hr />
              <div>
                <Trans>電話番号</Trans>: <code>+81 90 4225 8826</code>
              </div>
              <ul>
                <li>
                  <Trans>
                    基本的にお電話でのお問い合わせ、ご質問は承っておりません。
                  </Trans>
                  <Trans>留守番電話にメッセージをお残しください。</Trans>
                  <Trans>こちらから折り返しお電話いたします。</Trans>
                </li>
              </ul>
            </div>
          </Remark>
        </ContactPageStyles>
      </Layout>
    </>
  )
}

const ContactPageStyles = styled.section`
  text-align: justify;
  align-items: flex-start;
  background-color: var(--key-dark-color);
`

const Remark = styled.div`
  .container {
    max-width: 750px;
    box-sizing: content-box;
    margin-left: auto;
    margin-right: auto;
    color: white;
    padding-left: var(--borderSpacing);
    padding-right: var(--borderSpacing);

    ul {
      margin-left: 1em;
    }
  }
`

export default ContactPage

export const query = graphql`
  query contactQuery($language: String!) {
    locales: allLocale(
      filter: {
        language: { in: [$language] }
        ns: { in: ["translation", "contact"] }
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
