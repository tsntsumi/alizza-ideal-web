// i18next-extract-mark-ns-start translation
import React from "react"
import { graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { Box, AspectRatio, Badge, useColorModeValue } from "@chakra-ui/react"

const Item = ({ node, loading }) => {
  const bg = useColorModeValue("white", "gray.900")
  //const [image] = node.data.images.localFiles
  console.log("key =", node.id)
  return (
    <Box
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      key={node.id}
      position="relative"
      bg={bg}
    >
      Howdy World
      {/*
      <AspectRatio maxW="620px" ratio={4 / 3}>
        <GatsbyImage
          loading={loading}
          image={image?.childImageSharp.gatsbyImageData}
          alt={node.data.title}
        />
      </AspectRatio>
      */}
      <Box py={2} px={2}>
        <Box d="flex" alignItems="baseline">
          {node?.data?.tags?.map(tag => {
            return (
              <Badge id={tag} borderRadius="full" px="2" colorScheme="facebook">
                {tag}
              </Badge>
            )
          })}
        </Box>
        <Box
          mt="1"
          fontWeight="semibold"
          as="h3"
          lineHeight="tight"
          isTruncated
          px={1}
        >
          {node.frontmatter.title}
        </Box>
        <Box mt="1" as="p" px={1}>
          {node.frontmatter.excerpt}
        </Box>
      </Box>
    </Box>
  )
}

export default React.memo(Item)
