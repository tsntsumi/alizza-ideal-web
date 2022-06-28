// i18next-extract-mark-ns-start blog
import React from "react"
import { graphql } from "gatsby"
import { Trans, useI18next } from "gatsby-plugin-react-i18next"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { MDXProvider } from "@mdx-js/react"
import { MdxLink } from "gatsby-theme-i18n"
import { LocalizedLink } from "gatsby-theme-i18n"
import styled from "styled-components"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import { Banner } from "../../components/banner"
import {
  SqueezeForm,
  SubmitEmailToAirtable,
} from "../../components/squeezeform"

const components = {
  a: MdxLink,
}

const BlogStyles = styled.section`
  position: relative;
  text-align: justify;
  align-items: flex-start;
  color: black;
  background-color: transparent;
  margin: 2em 0;

  h2,
  h3 {
    font-family: sans-serif;
    white-space: nowrap;
    padding: 1em;
    margin: 1em 0;
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

  p {
    text-indent: 1em;
    text-align: justify;
  }

  ol,
  ul,
  blockquote {
    margin: 1rem auto 1rem 2rem;
  }
  li {
    margin: 0.5rem auto 0.5rem auto;
    color: var(--bodyColor);
  }

  table {
    margin: 1.5em;
    padding: 1em;
    position: relative;
    width: 100%;
    align-contents: center;
    border: 2px solid var(--key-dark-color);

    thead {
      background-color: var(--key-color);
      color: white;
      th {
        text-align: center;
      }
    }

    th,
    td {
      padding: 0.5em;
    }
  }
`

export default function BlogPage({ data }) {
  const {
    body,
    frontmatter: { title, date, description, banner, images },
  } = data.mdx
  const { Trans, t, language } = useI18next()
  const bannerImage = getImage(banner)
  return (
    <Layout>
      <Seo title="Homepage As Sales Person" />
      <Banner title={t(title)} image={bannerImage}>
        <MDXProvider components={components}>
          <MDXRenderer>{description}</MDXRenderer>
        </MDXProvider>
      </Banner>
      <BlogStyles className="section section__padding">
        <div className="container container__tight">
          <MDXProvider components={components}>
            <MDXRenderer>{body}</MDXRenderer>
          </MDXProvider>
        </div>
      </BlogStyles>
    </Layout>
  )
}
