// i18next-extract-mark-ns-start basepage
import React from "react"
import { graphql } from "gatsby"
import { Link, Trans, useI18next } from "gatsby-plugin-react-i18next"
import { MDXRenderer } from "gatsby-plugin-mdx"

export default function BasePage({ data }) {
  const {
    body,
    frontmatter: { title, date },
  } = data.mdx
  const { language } = useI18next
  return (
    <>
      <h1>{title}</h1>
      <div style={{ textAlign: "right", width: "100%" }}>
        <p>
          <i>date: {date}</i>
        </p>
        <Link to="/" language={language}>
          <Trans>[HOME]</Trans>
        </Link>
      </div>
      <MDXRenderer>{body}</MDXRenderer>
      <div>
        <Link to="/" language={language}>
          <Trans>[HOME]</Trans>
        </Link>
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
