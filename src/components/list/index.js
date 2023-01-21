// i18next-extract-mark-ns-start translation
import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Box, AspectRatio, useColorModeValue } from "@chakra-ui/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { Link } from "gatsby-plugin-react-i18next"
import styled from "styled-components"

const CardStyle = styled.div`
  margin: 0;
  padding: 0;
  color: var(--key-dark-color);
  background-color: white;
  border-radius: 0.5em;

  .title {
    margin: 0;
    padding: 0;
  }

  .gatsby-image-wrapper {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    img: {
      width: 100%;
      height: 100%;
    }
  }

  .description {
    h2,
    h3,
    h4,
    h5 {
      font-weight: 400;
      font-size: var(--h3);
      padding: 0;
    }

    h1 ~ *,
    h2 ~ *,
    h3 ~ *,
    h4 ~ *,
    h5 ~ *,
    h6 ~ * {
      padding-left: 0;
      padding-right: 0;
    }

    ol,
    ul {
      margin: 0;
      padding: 0.5em 0.5em 0.5em 2.2em;
      ol,
      ul,
      blockquote {
        margin: 0.2em 0 0 1em;
        padding: 0 0 0 0.5em;
      }
    }
  }
`

const Item = ({ node, loading }) => {
  const {
    frontmatter: { title, description, slug, banner, date },
  } = node
  return (
    <>
      <CardStyle>
        <Box
          borderWidth="1px"
          borderRadius="lg"
          padding={0}
          overflow="hidden"
          key={node.id}
          position="relative"
          bg="transparent"
        >
          <AspectRatio
            maxW="480px"
            ratio={1 / 1}
            mx="auto"
            my={0}
            px="auto"
            py={0}
          >
            <Link to={slug}>
              <GatsbyImage
                loading={loading}
                image={getImage(banner)}
                alt={title}
              />
            </Link>
          </AspectRatio>
          <Box py={2} px={2}>
            <Box mt="1" fontWeight="semibold" as="h3" lineHeight="tight" px={1}>
              <div className="title">
                <Link to={slug}>{title}</Link>
              </div>
            </Box>
            <Box mt="0.5em" p="0.5em" fontSize="7pt">
              <div className="description">
                <Link to={slug}>
                  <div style={{ textAlign: "right" }}>{date}</div>
                  <MDXRenderer>{description}</MDXRenderer>
                </Link>
              </div>
            </Box>
          </Box>
        </Box>
      </CardStyle>
    </>
  )
}

export default React.memo(Item)
