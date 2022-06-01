// i18next-extract-mark-ns-start header-component
import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Link, Trans, useI18next } from "gatsby-plugin-react-i18next"
import styled from "styled-components"
import { Logo } from "../logo"

const HeaderStyles = styled.header`
  .header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    max-width: 100vw;
    min-width: 100vw;
    z-index: 100;
    margin: 0;
    height: var(--header-height);
    max-height: var(--header-height);
    min-height: var(--header-height);
    overflow: hide;
    padding: 0 6px 0 6px;
    background-color: var(--key-color);
    font-size: 1em;
  }

  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;
    min-height: 100%;
    max-height: 100%;
  }
`

const LogoStyles = styled.div`
  position: relative;
  z-index: 10;
  text-decoration: none;
  display: inline-block;
  margin: 0;
  top: 20px;
`

const Phone = styled.div`
  display: inline-block;
  vertical-align: middle;
  z-index: 10;
  margin-left: auto;
  font-size: 1em;
  font-weight: 800;
`

const Selector = styled.div`
  display: inline-block;
  margin: 0;
  margin-left: auto;
  vertical-align: middle;
  z-index: 10;
  font-size: 0.6em;
`

export const Header = () => {
  const siteMetadata = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            phone
            mobile
            title
            logo
          }
        }
      }
    `
  )

  const { originalPath } = useI18next()
  const { phone, title, logo } = siteMetadata.site.siteMetadata

  return (
    <HeaderStyles>
      <div className="header">
        <div className="container">
          <LogoStyles>
            <img src={logo} alt={title} width="64" height="64" />
          </LogoStyles>
          <Phone>
            <a href={`tel:${phone}`}>
              <Trans>TEL:</Trans> {phone}
            </a>
          </Phone>
          <Selector>
            {"[ "}
            <Link to={originalPath} language="en">
              English
            </Link>
            {" | "}
            <Link to={originalPath} language="ja">
              日本語
            </Link>
            {" ] "}
          </Selector>
        </div>
      </div>
    </HeaderStyles>
  )
}

export default Header
