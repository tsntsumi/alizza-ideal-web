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
  `
  createTypes(typeDefs)
}
