import * as React from "react"
import Button from "../button"
import { ClaimStyles } from "./styles"
import { Link } from "gatsby-plugin-react-i18next"

export const Claim = ({ children, title, link, linkText, float }) => {
  return (
    <ClaimStyles className="section" float={float}>
      <div className="container container__tight">
        {title && <h2>{title}</h2>}
        <div style={{ marginBottom: "60px" }}>{children}</div>
        {linkText && <Button text={linkText} to={link} />}
      </div>
    </ClaimStyles>
  )
}
