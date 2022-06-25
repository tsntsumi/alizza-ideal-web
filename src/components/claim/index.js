import * as React from "react"
import Button from "../button"
import { ClaimStyles } from "./styles"

export const Claim = ({ children, title, link, linkText, float }) => {
  return (
    <ClaimStyles className="section section__padding" float={float}>
      <div className="container container__tight">
        {title && <h2>{title}</h2>}
        <div>{children}</div>
        {linkText && <Button text={linkText} to={link} />}
      </div>
    </ClaimStyles>
  )
}
