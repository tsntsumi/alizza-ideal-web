import * as React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
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

export const Perk = ({ children, title, image, name, credit }) => {
  return (
    <PerkStyles>
      <div className="image">
        {image && <GatsbyImage image={image} alt={name} />}
        <div className="photoCredit">{credit && credit}</div>
      </div>
      <div className="container">
        {title && <h3>{title}</h3>}
        {children}
      </div>
    </PerkStyles>
  )
}

export default Perks
