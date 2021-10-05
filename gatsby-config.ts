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
            objects: ["Price", "Plan", "Product"],
            secretKey: process.env.STRIPE_SECRET_KEY,
            downloadFiles: false,
        },
    },
    {
        resolve: `gatsby-plugin-google-gtag`,
        options: {
            trackingIds: ["G-B30ZBB27H6", "G-91BYZ134RN"],
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
        resolve: "gatsby-transformer-remark",
        options: {
            plugins: [
                {
                    resolve: "gatsby-remark-embed-video",
                    options: {
                        width: 800,
                        ratio: 1.77, // Optional: Defaults to 16/9 = 1.77
                        height: 400, // Optional: Overrides optional.ratio
                        related: false, //Optional: Will remove related videos from the end of an embedded YouTube video.
                        noIframeBorder: true, //Optional: Disable insertion of <style> border: 0
                        loadingStrategy: "lazy", //Optional: Enable support for lazy-load offscreen iframes. Default is disabled.
                        containerClass: "embedVideo-container", //Optional: Custom CSS class for iframe container, for multiple classes separate them by space
                        iframeId: false, //Optional: if true, iframe's id will be set to what is provided after 'video:' (YouTube IFrame player API requires iframe id)
                    },
                },
                `gatsby-remark-images`,
                `gatsby-remark-responsive-iframe`,
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
