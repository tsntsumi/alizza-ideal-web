import * as React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { PerksStyles, PerkStyles } from "./styles"

export const Perks = ({ children, title }) => {
  return (
    <PerksStyles className="section section__padding">
      <div className="container container__tight">
        <h2>{title}</h2>
      </div>
      <div className="perks container container__tight">{children}</div>
    </PerksStyles>
  )
}

export const Perk = ({ children, title, image }) => {
  return (
    <PerkStyles>
      {image && <GatsbyImage image={getImage(image)} alt={`Perk Image`} />}
      {title && <h3>{title}</h3>}
      <div className="perk">{children}</div>
    </PerkStyles>
  )
}

export default Perks
