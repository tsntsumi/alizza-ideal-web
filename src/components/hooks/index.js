import { useStaticQuery, graphql } from "gatsby"

export const useSiteMetadata = () => {
  const { site } = useStaticQuery(
    graphql`
      query SiteMetaData {
        site {
          siteMetadata {
            title
            description
            author
            twitterUsername
            siteUrl
            logo
            developerName
            developerUrl
            twitterUsername
            facebookUsername
            instagramUsername
            linkedinUsername
            airtableApiKey
            airtableBaseId
          }
        }
      }
    `
  )

  return site.siteMetadata
}
