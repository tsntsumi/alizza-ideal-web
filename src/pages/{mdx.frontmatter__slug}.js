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
import { SqueezeForm, SubmitInquiryToAirtable } from "../components/squeezeform"

const components = {
  Contact: Contact,
  Squeeze: props => (
    <SqueezeForm
      acceptInqiry={false}
      namelabel="Your name..."
      emaillabel="Your email..."
      action={SubmitInquiryToAirtable}
      nextpage="/thanks/homepage-thanks"
      {...props}
    />
  ),
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

const BasePage = ({ mdx, t }) => {
  const {
    body,
    frontmatter: { title, date },
  } = mdx
  return (
    <Layout>
      <Seo title={t(title)} />
      <MdxPageStyles>
        <div className="section section__padding">
          <h1>{title}</h1>
          <p className="date">
            <Trans>Date:</Trans> <i>{date}</i>
          </p>
          <MDXProvider components={components}>
            <MDXRenderer>{body}</MDXRenderer>
          </MDXProvider>
        </div>
      </MdxPageStyles>
    </Layout>
  )
}

const BlogPage = ({ mdx, t }) => {
  const {
    body,
    frontmatter: { title, fromNow, description, banner, images },
  } = mdx
  const gottenImages = images.map(i => getImage(i))

  return (
    <Layout>
      <Seo title={t(title)} />
      <>
        <Banner title={t(title)} image={banner}>
          <p className="date">
            <span>
              <Trans>Date:</Trans> <i>{fromNow}</i>
            </span>
          </p>
          <MDXProvider components={components}>
            <MDXRenderer images={gottenImages}>{description}</MDXRenderer>
          </MDXProvider>
        </Banner>
        <MdxPageStyles>
          <MDXProvider components={components}>
            <MDXRenderer images={gottenImages}>{body}</MDXRenderer>
          </MDXProvider>
        </MdxPageStyles>
      </>
    </Layout>
  )
}

export default function MdxPage({ data }) {
  const { t } = useI18next()
  const source = data.source.fields.source
  if (source === "basepage") {
    return <BasePage mdx={data?.basepage} t={t} />
  }

  return <BlogPage mdx={data?.blogpage} t={t} />
}

const MdxPageStyles = styled.section`
  text-align: justify;
  align-items: flex-start;
  color: black;
  background-color: var(--key-base-color);

  .section {
    padding: 0;
    border-radius: 0;
    .section__padding {
      background-color: #e0ebeb;
      margin-top: 67px;
      padding-top: 1em;
      padding-bottom: 1em;
      border-top: red 2px solid;
    }
  }

  .date {
    text-align: right;
    margin-bottom: 1em;
    margin-top: 0;
    font-size: 0.8em;
  }

  h1,
  h2,
  h3 {
    font-family: sans-serif;
    padding: 0.7em;
    margin: 1em 0;
  }

  h2:first-child {
    margin-top: 0;
  }

  h1,
  h2 {
    font-weight: 800;
    color: white;
    background-color: var(--key-color);
  }

  h1 {
    font-size: var(--h3);
    padding: 0.7em;
    margin-top: 0;
  }

  h2 {
    font-size: var(--h5);
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

  a {
    color: darkred;
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
    source: mdx(
      fields: { locale: { eq: $language } }
      frontmatter: { slug: { eq: $frontmatter__slug } }
    ) {
      fields {
        locale
        source
      }
    }
    basepage: mdx(
      fields: { locale: { eq: $language }, source: { eq: "basepage" } }
      frontmatter: { slug: { eq: $frontmatter__slug } }
    ) {
      frontmatter {
        title
        date(formatString: "YYYY-MM-DD")
        slug
      }
      fields {
        locale
        source
      }
      body
    }
    blogpage: mdx(
      fields: { locale: { eq: $language }, source: { eq: "blog" } }
      frontmatter: { slug: { eq: $frontmatter__slug } }
    ) {
      frontmatter {
        title
        fromNow: date(fromNow: true)
        date(formatString: "YYYY-MM-DD")
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
        locale
        source
      }
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
