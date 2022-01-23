import { siteMetadata } from "./config"
import tailwindConfig from "./tailwind.config"
import autoprefixer from "autoprefixer"
import tailwindcss from "tailwindcss"

const plugins = [
    `gatsby-plugin-image`,
    {
        resolve: `gatsby-plugin-sitemap`,
        options: {
            output: "../public/",
            excludes: [
                `/landingpage/high-class-bento/bento-entry-form`,
                `/404`,
                `/404.html`,
                `https://www.alizza-ideal.com/landingpage/create-your-web-site/`,
            ],
        },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-typescript`,
    `gatsby-plugin-postcss`,
    {
        resolve: `gatsby-plugin-sharp`,
        options: {
            defaults: {
                placeholder: "blurred",
            },
        },
    },
    {
        resolve: `gatsby-plugin-robots-txt`,
        options: {
            policy: [{ userAgent: "*", allow: "/" }],
            resolveEnv: () => process.env.GATSBY_ENV,
        },
    },
    {
        resolve: `gatsby-plugin-canonical-urls`,
        options: {
            siteUrl: `https://www.alizza-ideal.com`,
            stripQueryString: true,
        },
    },
    {
        resolve: `gatsby-source-stripe`,
        options: {
            objects: ["Sku", "Price"],
            secretKey: process.env.STRIPE_SECRET_KEY,
            downloadFiles: false,
        },
    },
    {
        resolve: `gatsby-plugin-google-gtag`,
        options: {
            trackingIds: ["G-B30ZBB27H6", "G-91BYZ134RN", "UA-209394109-2"],
            pluginConfig: {
                head: true,
            },
        },
    },
    {
        resolve: `gatsby-source-filesystem`,
        options: {
            name: `blog`,
            path: `${__dirname}/contents/blog/`,
        },
    },
    {
        resolve: `gatsby-source-filesystem`,
        options: {
            name: `images`,
            path: `${__dirname}/contents/images`,
            ignore: [
                "**/*.mdx",
                "**/*.md",
                "**/*.txt",
                "**/*.jsx",
                "**/*.tsx",
                "**/*.js",
                "**/*.ts",
                "**/*~",
                "**/.*",
                "**/*.bak",
            ],
        },
    },
    {
        resolve: `gatsby-source-filesystem`,
        options: {
            name: `portfolio`,
            path: `${__dirname}/contents/portfolio/`,
        },
    },
    {
        resolve: `gatsby-source-filesystem`,
        options: {
            name: `basepages`,
            path: `${__dirname}/contents/basepages`,
        },
    },
    {
        resolve: `gatsby-source-filesystem`,
        options: {
            name: `landingpage`,
            path: `${__dirname}/contents/landingpage`,
        },
    },
    {
        /*
         * Gatsby-plugin-mdx is converter from `MDX` to `HTML`.
         * To convert markdown file (.md or .markdown),
         * use `gatsby-transformer-remark` plugin.
         */
        resolve: `gatsby-plugin-mdx`,
        options: {
            gatsbyRemarkPlugins: [
                {
                    resolve: `gatsby-remark-images`,
                    options: {
                        maxWidth: 512,
                        linkImagesToOriginal: true,
                    },
                },
                {
                    resolve: `gatsby-remark-embed-youtube`,
                    options: {
                        width: 320,
                        height: 240,
                    },
                },
                `gatsby-remark-responsive-iframe`,
            ],
        },
    },
    `gatsby-plugin-mdx-frontmatter`,
]

if (siteMetadata.disqus) {
    plugins.push({
        resolve: `gatsby-plugin-disqus`,
        options: {
            shortname: siteMetadata.disqus,
        },
    } as any)
}

export default {
    siteMetadata: siteMetadata,
    plugins: plugins,
}
