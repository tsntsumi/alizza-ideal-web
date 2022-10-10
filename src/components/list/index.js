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

  h1 ~ *,
  h2 ~ *,
  h3 ~ *,
  h4 ~ *,
  h5 ~ *,
  h6 ~ * {
    padding-left: 0;
    padding-right: 0;
  }
`

const Item = ({ node, loading }) => {
  const bg = useColorModeValue("white", "var(--key-color)")
  const {
    frontmatter: { title, description, slug, banner },
  } = node
  return (
    <CardStyle>
      <Box
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        key={node.id}
        position="relative"
        bg={bg}
      >
        <AspectRatio
          maxW="320px"
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
            <Link to={slug}>{title}</Link>
          </Box>
          <Box mt="0.5em" p="0.5em" fontSize="7pt">
            <Link to={slug}>
              <MDXRenderer>{description}</MDXRenderer>
            </Link>
          </Box>
        </Box>
      </Box>
    </CardStyle>
  )
}

export default React.memo(Item)
