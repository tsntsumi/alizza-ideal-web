// i18next-extract-mark-ns-start translate
import React from "react"
import { graphql } from "gatsby"
import { Trans, useI18next } from "gatsby-plugin-react-i18next"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { MDXProvider } from "@mdx-js/react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import styled from "styled-components"
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
  border: 3px solid var(--key-dark-color);
  padding: 0;
  margin: ${props => props.margin};
  margin-bottom: 0.75em;
  font-size: 7pt;
  min-width: ${props => props.minWidth || "10px"};
`

const FloatBox = ({ children, width, float, bgColor, ...props }) => {
  const f = float || "left"
  const margin =
    f === "right"
      ? "0 var(--borderSpacing) 0 0.75em"
      : "0 0.75em 0 var(--borderSpacing)"
  return (
    <FloatBoxStyles
      float={f}
      width={width}
      minWidth={props.minWidth}
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
  margin: 0.4em 0.4em;

  .gatsby-image-wrapper {
    width: ${props => props.width || "100%"};
    max-width: ${props => props.maxWidth || "100vw"};
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

const components = {
  Contact: Contact,
  Squeeze: props => (
    <SqueezeForm
      acceptInquiry={false}
      namelabel={props.namelabel || "Your name..."}
      emaillabel={props.emaillabel || "Your email..."}
      action={props.action || SubmitInquiryToAirtable}
      nextpage={props.nextpage || "/thanks/homepage-thanks"}
      {...props}
    />
  ),
  GatsbyImage: GatsbyImage,
  clear: props => <div style={{ clear: "both" }} {...props} />,
  "clear-left": props => <div style={{ clear: "left" }} {...props} />,
  "clear-right": props => <div style={{ clear: "right" }} {...props} />,
  FloatBox: FloatBox,
  Image: Image,
  ImageBox: ({ children, alt, image, float, width, imageWidth, ...props }) => (
    <FloatBox float={float} width={width} {...props}>
      <Image image={image} alt={alt} width={imageWidth} />
      {children && <div className="credit">{children}</div>}
    </FloatBox>
  ),
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
      <ImageContext.Provider value={gottenImages}>
        {/* i18next-extract-disable-next-line */}
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

export const Head = ({ location, params, data, pageContext }) => {
  const source = data.source?.fields?.source
  const mdx = source === "basepage" ? data.basepage : data.blogpage
  const { title, author, banner } = mdx.frontmatter
  const description = mdx.fields?.rawDescription
  return (
    <>
      <title>{title}</title>
      {description && <meta name="description" content={description} />}
      <meta name="twitter:card" content="summary" />
      {author && <meta name="twitter:creator" content={author || ""} />}
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {banner && <meta property="og:image" content={banner.publicURL} />}
      <meta property="og:title" content={title} />
      {description && <meta property="og:description" content={description} />}
      <meta property="og:type" content="website" />
    </>
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
    font-size: var(--h4);
  }

  h3 {
    text-indent: 0;
    font-size: var(--h5);
    font-weight: 600;
    color: var(--key-color);
  }

  h4 {
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
  ul ul,
  ol ol,
  ul ol,
  ol ul {
    padding: 0;
    margin: 0.5em 0;
  }
  li,
  ul li,
  ol li {
    padding: 0;
    margin: 0 0 0 1em;
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
    border-radius: 0.5em;

    thead {
      background-color: var(--key-color);
      color: white;
      th {
        text-align: center;
      }
    }
    tbody {
    }

    caption {
      background-color: var(--key-dark-color);
      color: white;
    }

    th,
    td {
      padding: 0.5em 1em;
      virtical-align: middle;
      padding-bottom: auto;
    }

    th {
      background-color: var(--key-dark-color);
      color: white;
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
      excerpt(truncate: true, pruneLength: 120)
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
          publicURL
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
        rawDescription
      }
      body
      tableOfContents(maxDepth: 2)
      excerpt(truncate: true, pruneLength: 120)
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
