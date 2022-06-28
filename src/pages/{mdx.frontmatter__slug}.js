// i18next-extract-mark-ns-start basepage
import React from "react"
import { graphql } from "gatsby"
import { Trans } from "gatsby-plugin-react-i18next"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { MDXProvider } from "@mdx-js/react"
import { MdxLink } from "gatsby-theme-i18n"
import { LocalizedLink } from "gatsby-theme-i18n"
import BlogPage from "./blog/BlogPage"

const components = {
  a: MdxLink,
}

export default function BasePage({ data }) {
  const {
    body,
    frontmatter: { date, title, slug },
  } = data.mdx
  if (slug.match(/\/blog\//)) {
    return (
      <>
        <BlogPage data={data} />
      </>
    )
  }
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
        description
        banner {
          childImageSharp {
            gatsbyImageData(
              breakpoints: [360, 720, 1024]
              jpgOptions: { progressive: false }
              formats: [JPG]
              quality: 50
              layout: CONSTRAINED
              placeholder: BLURRED
            )
          }
        }
        images {
          childImageSharp {
            gatsbyImageData(
              breakpoints: [360, 720]
              jpgOptions: { progressive: false }
              formats: [JPG]
              quality: 50
              layout: CONSTRAINED
              placeholder: BLURRED
            )
          }
        }
        tags
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
