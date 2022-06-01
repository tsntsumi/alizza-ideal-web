import * as React from "react"
import { PerksStyles, PerkStyles } from "./styles"

export const Perks = ({ children, title }) => {
  return (
    <PerksStyles className="section section__padding">
      <div className="container container__tight">
        <h2>{title}</h2>
      </div>
      <div className="container container__tight">{children}</div>
    </PerksStyles>
  )
}

export const Perk = ({ children, title }) => {
  return (
    <PerkStyles>
      {children}
      {title && <h3>{title}</h3>}
    </PerkStyles>
  )
}

export default Perks
