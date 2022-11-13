import * as React from "react"
import { ClaimStyles } from "./styles"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

export const Claim = ({ children, title, image, name, float }) => {
  return (
    <ClaimStyles className="section section__padding" float={float}>
      <div className="container container__tight">
        {title && <h2>{title}</h2>}
      </div>
      <div className="container container__tight">
        <GatsbyImage image={getImage(image)} alt={name} />
      </div>
      <div className="container container__tight">{children}</div>
    </ClaimStyles>
  )
}
