const { createRemoteFileNode } = require("gatsby-source-filesystem")
const sharp = require("sharp")

if (process.env.NO_CACHE_ON_BUILD) {
  sharp.cache(false)
  sharp.simd(false)
}

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      fallback: {
        fs: false,
      },
    },
  })
}

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions
  const typeDefs = `
type Locale implements Node @dontInfer {
  ns: String
  data: String
  language: String
}

type Mdx implements Node {
  frontmatter: Frontmatter
  imageURLs: [File] @link(from: "fields.imageURLs")
}

type Frontmatter @dontInfer {
  title: String!
  slug: String!
  date: Date @dateformat
  description: String @mdx
  tags: [String]
  related: [String]
  banner: File @fileByRelativePath
  images: [File] @fileByRelativePath
  imageURLs: [String]
}
  `
  createTypes(typeDefs)
}

exports.onCreateNode = async ({
  node,
  createNodeId,
  actions: { createNodeField, createNode },
  cache,
  store,
}) => {
  if (
    node.internal.type === "Mdx" &&
    node.frontmatter &&
    node.frontmatter.imageURLs
  ) {
    let imageURLs = await Promise.all(
      node.frontmatter.imageURLs.map(url => {
        try {
          return createRemoteFileNode({
            url,
            parentNodeId: node.id,
            createNode,
            createNodeId,
            cache,
            store,
          })
        } catch (error) {
          console.error(error)
        }
        return null
      })
    )
    if (imageURLs) {
      createNodeField({
        node,
        name: "imageURLs",
        value: imageURLs.map(image => {
          return image.id
        }),
      })
    }
  }
}
