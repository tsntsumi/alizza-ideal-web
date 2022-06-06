import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import { LogoImageStyles } from "./styles"

export const Logo = () => {
  const data = useStaticQuery(graphql`
    query LogoQuery {
      site {
        siteMetadata {
          title
          logo
        }
      }
    }
  `)

  const { title, logo } = data.site.siteMetadata

  return (
    <Link to="/">
      <LogoImageStyles>
        <img src={logo} alt={title} />
      </LogoImageStyles>
    </Link>
  )
}

export default Logo
