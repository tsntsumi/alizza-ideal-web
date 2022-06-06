// i18next-extract-mark-ns-start footer-component
import * as React from "react"
import styled from "styled-components"

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
`

export const Footer = () => {
  return (
    <FooterStyles>
      <div className="footer">
        <CopyrightStyle>
          Copyright &copy; 2022, TSUTSUMI Kikuo (
          <a href="https://www.alizza-ideal.com">Alizza Ideal</a>
          ). All rights reserved.
        </CopyrightStyle>
      </div>
    </FooterStyles>
  )
}
