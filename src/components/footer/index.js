// i18next-extract-mark-ns-start translation
import * as React from "react"
import styled from "styled-components"
import { Trans, Link, useI18next } from "gatsby-plugin-react-i18next"

export const FooterStyles = styled.footer`
  margin-top: 0;
  font-size: var(--footnote);
  font-weight: reset;
  background-color: var(--key-color);
  color: darkorange;
  border-top: 4px solid red;

  a {
    color: white;
    font-size: inherit;
  }
`

const CopyrightStyle = styled.div`
  font-size: 7pt;
  font-weight: 500;
  disply: inline-block;
`

export const Footer = () => {
  const { language } = useI18next
  return (
    <FooterStyles>
      <div className="footer">
        <CopyrightStyle>
          Copyright &copy; 2022, TSUTSUMI Kikuo (
          <a href="https://www.alizza-ideal.com">Alizza Ideal</a>
          ). All rights reserved. [{" "}
          <Link to="/legal" language={language}>
            <Trans>特定商取引法</Trans>
          </Link>{" "}
          |{" "}
          <Link to="/policy" language={language}>
            <Trans>個人情報保護</Trans>
          </Link>{" "}
          ]
        </CopyrightStyle>
      </div>
    </FooterStyles>
  )
}
