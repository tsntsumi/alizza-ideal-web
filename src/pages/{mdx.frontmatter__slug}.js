// i18next-extract-mark-ns-start translate
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

const ImageContext = React.createContext()

const FloatBoxStyles = styled.div`
  float: ${props => props.float};
  width: ${props => props.width || "30%"};
  border-radius: 0.5em;
  background-color: ${props => props.bgColor || "white"};
  border: 3px solid darkblue;
  padding: 0;
  margin: ${props => props.margin};
  margin-bottom: 0.75em;
  font-size: 7pt;
`

const FloatBox = ({ children, width, float, bgColor, ...props }) => {
  const f = float || "right"
  const margin =
    f === "right"
      ? "0 var(--borderSpacing) 0 0.75em"
      : "0 0.75em 0 var(--borderSpacing)"
  return (
    <FloatBoxStyles
      float={f}
      width={width}
      margin={margin}
      bgColor={bgColor}
      {...props}
    >
      {children}
    </FloatBoxStyles>
  )
}

const ImageStyles = styled.div`
  background-color: white;
  border-radius: 0.5em;
  align-contents: center;

  .gatsby-image-wrapper {
    width: ${props => props.width || "100%"};
  }
`

const Image = ({ alt, image, width, ...props }) => {
  const images = React.useContext(ImageContext)
  if (!images[image]) {
    return (
      <ImageStyles style={{ color: "red" }}>
        Error: could not found image file. Check youra Images list in MDX
        frontmatter
      </ImageStyles>
    )
  }
  return (
    <ImageStyles width={width} {...props}>
      <GatsbyImage image={images[image]} alt={alt} />
    </ImageStyles>
  )
}

const CreditStyles = styled.div`
  font-size: 7pt;
  padding: 0.6em;
  min-width: 6em;
  width: 100%;
`

export const PhotoCredit = ({ children, ...props }) => (
  <CreditStyles>{children}</CreditStyles>
)

const components = {
  Contact: Contact,
  Squeeze: props => (
    <SqueezeForm
      acceptInquiry={false}
      namelabel="Your name..."
      emaillabel="Your email..."
      action={SubmitInquiryToAirtable}
      nextpage="/thanks/homepage-thanks"
      {...props}
    />
  ),
  GatsbyImage: GatsbyImage,
  clear: props => <div style={{ clear: "both" }} {...props} />,
  FloatBox: FloatBox,
  Image: Image,
  ImageBox: ({ children, alt, image, float, width, imageWidth, ...props }) => (
    <FloatBox float={float} width={width} {...props}>
      <Image image={image} alt={alt} width={imageWidth} />
      {children && <PhotoCredit>{children}</PhotoCredit>}
    </FloatBox>
  ),
  PhotoCredit: PhotoCredit,
  strong: props => (
    <strong style={{ color: "red", fontSize: "1.2em" }} {...props} />
  ),
}

const TableOfContents = ({ showTOC, tableOfContents }) => {
  if (!showTOC) {
    return <></>
  }
  return (
    <div className="container">
      <h2>
        <center>
          <Trans>Table Of Contents</Trans>
        </center>
      </h2>
      <ul>
        {tableOfContents.items.map((h, i) => {
          return (
            <li key={`toc-${i}`}>
              <a href={`${h.url}`}>{h.title}</a>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

const BasePage = ({ mdx, t }) => {
  const {
    body,
    tableOfContents,
    frontmatter: { title, date, showTOC },
  } = mdx
  return (
    <Layout>
      <Seo title={t(title)} />
      <MdxPageStyles>
        <div className="section section__padding">
          <h1>{title}</h1>
          <div className="date">
            <Trans>Date:</Trans> <i>{date}</i>
          </div>
          <MDXProvider components={components}>
            <TableOfContents
              showTOC={showTOC}
              tableOfContents={tableOfContents}
            />
            <MDXRenderer>{body}</MDXRenderer>
          </MDXProvider>
        </div>
      </MdxPageStyles>
    </Layout>
  )
}

const BlogPage = ({ mdx, t }) => {
  if (!mdx) {
    return <></>
  }
  const {
    body,
    tableOfContents,
    frontmatter: {
      title,
      author,
      fromNow,
      description,
      banner,
      images,
      showTOC,
    },
  } = mdx
  const gottenImages = images.map(i => getImage(i))

  return (
    <Layout>
      <Seo title={title} />
      <ImageContext.Provider value={gottenImages}>
        <Banner title={t(title)} image={banner}>
          <MdxPageStyles>
            <MDXProvider components={components}>
              <MDXRenderer images={gottenImages}>{description}</MDXRenderer>
            </MDXProvider>
          </MdxPageStyles>
        </Banner>
        <MdxPageStyles>
          <MDXProvider components={components}>
            <TableOfContents
              showTOC={showTOC}
              tableOfContents={tableOfContents}
            />
            <div className="container">
              <MDXRenderer images={gottenImages}>{body}</MDXRenderer>
            </div>
          </MDXProvider>
          <div className="bloginfo container">
            <div>
              <div className="date">
                <Trans>Date:</Trans> <i>{fromNow}</i>
              </div>
              {author && (
                <div className="author">
                  <Trans>Author:</Trans> <i>{author}</i>
                </div>
              )}
            </div>
          </div>
        </MdxPageStyles>
      </ImageContext.Provider>
    </Layout>
  )
}

export default function MdxPage({ data }) {
  const { t } = useI18next()
  const source = data.source?.fields?.source
  if (source === "basepage") {
    return <BasePage mdx={data?.basepage} t={t} />
  }

  return <BlogPage mdx={data?.blogpage} t={t} />
}

const MdxPageStyles = styled.section`
  text-align: justify;
  align-items: flex-start;
  color: black;

  .container {
    background-color: #e0ebeb;
    padding-bottom: 1.5em;
  }

  .bloginfo {
    display: flex;
    justify-content: flex-end;
    padding-right: var(--borderSpacing);
  }

  .bloginfo > div {
    flex-direction: column;
  }

  .date {
    font-size: 0.8em;
    white-space: no-wrap;
  }
  .author {
    font-size: 0.8em;
    white-space: no-wrap;
  }

  h1,
  h2,
  h3 {
    font-family: sans-serif;
    padding: 0.7em;
    margin: 1em 0;
    clear: both;
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

  h1 > *,
  h2 > *,
  h3 > * {
    padding-left: var(--borderSpacing);
    padding-right: var(--borderSpacing);
  }

  p {
    text-indent: 1em;
    text-align: justify;
    margin-bottom: 0.4em;
  }

  ol,
  ul,
  blockquote {
    margin: 1em 0 1em 0;
    padding-left: var(--borderSpacing);
    padding-right: var(--borderSpacing);
  }
  blockquote {
    font-size: 1.1em;
  }
  li {
    margin: 0 2em 0 2.5em;
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
        author
        date(formatString: "YYYY-MM-DD")
        slug
        showTOC
      }
      fields {
        locale
        source
      }
      body
      tableOfContents(maxDepth: 2)
    }
    blogpage: mdx(
      fields: { locale: { eq: $language }, source: { in: ["blog", "offer"] } }
      frontmatter: { slug: { eq: $frontmatter__slug } }
    ) {
      frontmatter {
        title
        author
        fromNow: date(fromNow: true)
        date(formatString: "YYYY-MM-DD")
        description
        tags
        related
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
        showTOC
      }
      fields {
        locale
        source
      }
      body
      tableOfContents(maxDepth: 2)
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
