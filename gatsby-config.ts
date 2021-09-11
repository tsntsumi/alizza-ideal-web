import { siteMetadata } from "./config"
import tailwindConfig from "./tailwind.config"
import autoprefixer from "autoprefixer"
import tailwindcss from "tailwindcss"

const plugins = [
    `gatsby-plugin-image`,
    `gatsby-plugin-sitemap`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-typescript`,
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
            objects: ["Price"],
            secretKey: process.env.STRIPE_SECRET_KEY,
            donloadFiles: false,
        },
    },
    {
        resolve: `gatsby-plugin-google-gtag`,
        options: {
            trackingIds: ["G-B30ZBB27H6"],
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
        resolve: `gatsby-plugin-mdx`,
        options: {
            gatsbyRemarkPlugins: [
                {
                    resolve: `gatsby-remark-images`,
                    options: {
                        maxWidth: 1200,
                    },
                },
            ],
        },
    },
    {
        resolve: `gatsby-plugin-postcss`,
        options: {
            postCssPlugins: [
                tailwindcss(tailwindConfig),
                autoprefixer,
                ...(process.env.NODE_ENV === `production`
                    ? [require(`cssnano`)]
                    : []),
            ],
        },
    },
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
