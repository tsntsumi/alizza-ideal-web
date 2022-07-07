// i18next-extract-mark-ns-start basepage
import React from "react"
import { graphql } from "gatsby"
import { Trans, useI18next } from "gatsby-plugin-react-i18next"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { MDXProvider } from "@mdx-js/react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import styled from "styled-components"
import Seo from "../components/seo"
import Layout from "../components/layout"
import Contact from "../components/contact"
import Banner from "../components/banner"

const components = {
  Contact: Contact,
  GatsbyImage: GatsbyImage,
  clear: props => <div style={{ clear: "both" }} {...props} />,
  PhotoCredit: props => (
    <div
      style={{
        fontSize: "0.6em",
        margin: "0.4em",
        minWidth: "6em",
      }}
      {...props}
    />
  ),
}

export default function MdxPage({ data }) {
  const { t } = useI18next()
  const {
    body,
    fields: { source },
    frontmatter: { title, date, fromNow, description, banner, images },
  } = data?.mdx

  const gottenImages = images.map(i => getImage(i))

  return (
    <Layout>
      <Seo title={t(title)} />
      {source === "basepage" && (
        <>
          <h1>
            <Trans>{title}</Trans>
          </h1>
          <p className="date">
            <Trans>Date:</Trans> <i>date</i>
          </p>
        </>
      )}
      {source === "blog" && (
        <Banner title={t(title)} image={banner}>
          <p
            style={{
              textAlign: "right",
              marginBottom: "1em",
              marginTop: 0,
              fontSize: "0.8em",
            }}
          >
            <span>
              <Trans>Date:</Trans>
              <i>{date}</i>
            </span>
          </p>
          <MDXProvider components={components}>
            <MDXRenderer>{description}</MDXRenderer>
          </MDXProvider>
        </Banner>
      )}
      <MdxPageStyles>
        <div className="section section__padding">
          <MDXProvider components={components}>
            <MDXRenderer images={images}>{body}</MDXRenderer>
          </MDXProvider>
        </div>
      </MdxPageStyles>
    </Layout>
  )
}

const MdxPageStyles = styled.section`
  text-align: justify;
  align-items: flex-start;
  color: black;
  background-color: #e0ebeb;

  .section,
  .section__padding {
    padding: 0;
    background-color: #e0ebeb;
  }

  h1,
  h2,
  h3 {
    font-family: sans-serif;
    padding: 1em;
    margin: 1em 0;
  }

  h1 {
    font-size: var(--h3);
  }

  h2 {
    text-align: center;
    font-size: var(--h5);
    font-weight: 800;
    color: white;
    background-color: var(--key-color);
  }

  h3 {
    text-indent: 0;
    font-size: var(--h6);
    font-weight: 600;
    color: var(--key-color);
  }

  h1 ~ *,
  h2 ~ *,
  h3 ~ * {
    padding-left: var(--borderSpacing);
    padding-right: var(--borderSpacing);
  }

  p {
    text-indent: 1em;
    text-align: justify;
  }

  ol,
  ul,
  blockquote {
    margin: 1em auto 1em 2em;
  }
  blockquote {
    font-size: 1.1em;
  }
  li {
    margin: 0.25em auto;
    color: var(--bodyColor);
  }

  table {
    position: relative;
    align-contents: center;
    border: 2px solid var(--key-dark-color);
    margin: 1em auto;

    thead {
      background-color: var(--key-color);
      color: white;
      th {
        text-align: center;
      }
    }
    tbody {
    }

    th,
    td {
      padding: 0.5em 1em;
      virtical-align: middle;
      padding-bottom: auto;
    }

    tr:nth-child(odd) td {
      background-color: #eee;
    }
  }
`

export const query = graphql`
  query MdxPageQuery($frontmatter__slug: String!, $language: String!) {
    mdx(
      fields: { locale: { eq: $language } }
      frontmatter: { slug: { eq: $frontmatter__slug } }
    ) {
      frontmatter {
        title
        date(fromNow: true)
        description
        tags
        banner {
          childImageSharp {
            gatsbyImageData(formats: AUTO)
          }
        }
        images {
          childImageSharp {
            gatsbyImageData(formats: AUTO)
          }
        }
      }
      fields {
        source
      }
      slug
      body
    }
    locales: allLocale(
      filter: {
        language: { eq: $language }
        ns: { in: ["translation", "basepage", "blog"] }
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
