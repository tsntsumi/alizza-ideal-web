// i18next-extract-mark-ns-start translation
import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Box, AspectRatio, useColorModeValue } from "@chakra-ui/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { Link } from "gatsby-plugin-react-i18next"

const Item = ({ node, loading }) => {
  const bg = useColorModeValue("white", "green.900")
  const {
    frontmatter: { title, description, slug, banner },
  } = node
  return (
    <Box
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      key={node.id}
      position="relative"
      bg={bg}
    >
      <Link to={slug}>
        <AspectRatio maxW="320px" ratio={1 / 1}>
          <GatsbyImage loading={loading} image={getImage(banner)} alt={title} />
        </AspectRatio>
        <Box py={2} px={2}>
          <Box mt="1" fontWeight="semibold" as="h3" lineHeight="tight" px={1}>
            {title}
          </Box>
          <Box mt="0.5em" p="0.5em" fontSize="7pt">
            <MDXRenderer>{description}</MDXRenderer>
          </Box>
        </Box>
      </Link>
    </Box>
  )
}

export default React.memo(Item)
