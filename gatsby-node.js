const { createRemoteFileNode } = require("gatsby-source-filesystem")
const { unlink } = require("fs/promises")
const path = require("path")
const sharp = require("sharp")
const replace = require("replace-in-file")

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
  const { createTypes, printTypeDefinitions } = actions
  const typeDefs = `
type Locale implements Node @dontInfer {
  ns: String
  data: String
  language: String
}

type Mdx implements Node {
  frontmatter: Frontmatter
  imageURLs: [File] @link(from: "fields.imageURLs")
  fields: MdxFields
}

type MdxFields {
  locale: String
  isDefault: Boolean
}

type Frontmatter @dontInfer {
  title: String!
  slug: String!
  author: String
  date: Date @dateformat
  description: String @mdx
  tags: [String]
  related: [String]
  showTOC: Boolean
  banner: File @fileByRelativePath
  images: [File] @fileByRelativePath
  imageURLs: [String]
}
  `

  createTypes(typeDefs)
  const typedefs = "./typeDefs.txt"
  unlink(typedefs)
    .then(result => {
      console.info("save type def file:", typedefs)
      printTypeDefinitions({ path: typedefs })
    })
    .catch(err => {
      if (err.code === "ENOENT") {
        console.info("save type def file:", typedefs)
        printTypeDefinitions({ path: typedefs })
      } else {
        console.error("cannot save type def file:", typedefs)
      }
    })
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
  if (node.internal.type === "Mdx") {
    const basename = path.basename(node.fileAbsolutePath, ".mdx")
    const extname = path.extname(basename)
    const language = (extname || ".ja").substr(1, 2).toLowerCase()
    createNodeField({ node, name: "locale", value: language })
    if (node.frontmatter && node.frontmatter.description) {
      createNodeField({
        node,
        name: "rawDescription",
        value: node.frontmatter.description,
      })
    }
  }
}

exports.onPostBuild = ({ reporter, basePath, pathPrefix }) => {
  replace.sync({
    files: [`./public/kashakasha/**/*.html`, `./public/kashakasha/*.html`],
    from: /<kls-form-embeded-tag>(.*?)<\/kls-form-embeded-tag>/g,
    to: `\n<!-- KLSフォーム埋め込みタグ -->\n$1\n<!-- KLSフォーム埋め込みタグ -->\n`,
  })
  replace.sync({
    files: [`./public/kashakasha/**/*.html`, `./public/kashakasha/*.html`],
    from: /<new-line><\/new-line>/g,
    to: `\n`,
  })
}
