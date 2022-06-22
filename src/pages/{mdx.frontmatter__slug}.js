// i18next-extract-mark-ns-start basepage
import React from "react"
import { graphql } from "gatsby"
import { Trans } from "gatsby-plugin-react-i18next"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { MDXProvider } from "@mdx-js/react"
import { MdxLink } from "gatsby-theme-i18n"
import { LocalizedLink } from "gatsby-theme-i18n"

const components = {
  a: MdxLink,
}

export default function BasePage({ data }) {
  const {
    body,
    frontmatter: { title, date },
  } = data.mdx
  return (
    <>
      <h1>{title}</h1>
      <div style={{ textAlign: "right", width: "100%" }}>
        <p>
          <i>date: {date}</i>
        </p>
        <LocalizedLink to="/">
          <Trans>[HOME]</Trans>
        </LocalizedLink>
      </div>
      <MDXProvider components={components}>
        <MDXRenderer>{body}</MDXRenderer>
      </MDXProvider>
      <div>
        <LocalizedLink to="/">
          <Trans>[HOME]</Trans>
        </LocalizedLink>
      </div>
    </>
  )
}

export const query = graphql`
  query BasePageQuery($frontmatter__slug: String, $language: String!) {
    mdx(
      fields: { locale: { eq: $language } }
      frontmatter: { slug: { eq: $frontmatter__slug } }
    ) {
      id
      slug
      body
      frontmatter {
        date(formatString: "YYYY-MM-DD")
        slug
        title
      }
    }
    locales: allLocale(
      filter: {
        language: { in: [$language] }
        ns: { in: ["translation", "basepage"] }
      }
    ) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`
