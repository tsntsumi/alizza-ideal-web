require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

const siteUrl = `https://www.alizza-ideal.com/`

module.exports = {
  siteMetadata: {
    title: `Alizza Ideal`,
    description: `Alizza Ideal is a Mito-based company that helps small companies and small businesses acquire customers online..`,
    author: `TSUTSUMI Kikuo`,
    siteUrl: siteUrl,
    logo: `/icons/logo.png`,
    phone: `029-240-5021`,
    mobile: `090-4225-8826`,
    developerName: "TSUTSUMI Kikuo",
    developerUrl: "https://www.alizza-ideal.com/",
    twitterUsername: "tsntsumi",
    facebookUsername: "tsntsumi",
    instagramUsername: "",
    linkedinUsername: "",
    airtableKey: process.env.AIRTABLE_API_KEY,
    airtableBaseId: process.env.AIRTABLE_SITECONF_BASE,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/i18n/locales`,
        name: `locale`,
      },
    },
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          formats: [`auto`, `webp`],
          placeholder: `dominantColor`,
          quality: 50,
          breakpoints: [750, 1080, 1366, 1920],
          backgroundColor: `transparent`,
          tracedSVGOptions: {},
          blurredOptions: {},
          jpgOptions: {},
          pngOptions: {},
          webpOptions: {},
          avifOptions: {},
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `alizza-ideal-official`,
        short_name: `alizza-ofiicial`,
        start_url: `/`,
        background_color: `#663399`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/logo.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-react-i18next`,
      options: {
        localeJsonSourceName: `locale`,
        languages: [`en`, `ja`, `tl`],
        defaultLanguage: `ja`,
        generateDefaultLanguagePage: true,
        redirect: true,
        siteUrl: siteUrl,
        i18nextOptions: {
          interpolation: {
            escapeValue: true,
          },
          keySeparator: true,
          nsSeparator: true,
        },
        pages: [
          {
            matchPath: `/:lang?/(legal|policy)/:uid`,
            getLanguageFromPath: true,
          },
          {
            matchPath: `/:lang?/blog/:uid`,
            getLanguageFromPath: true,
          },
          {
            matchPath: `/:lang?/services/:uid`,
            getLanguageFromPath: true,
          },
          {
            matchPath: `/:lang?/404/:uid`,
            getLanguageFromPath: true,
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        output: "/sitemap",
        excludes: [
          "/**/offers/**",
          "/offers/**",
          "/**/404",
          "/**/404.html",
          "/ebook/**",
        ],
      },
    },
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        resolveEnv: () => process.env.NODE_ENV,
        env: {
          development: {
            policy: [{ userAgent: "*", disallow: ["/"] }],
          },
          production: {
            policy: [
              { userAgent: "*", allow: "/" },
              { userAgent: "*", disallow: "/offers/" },
              { userAgent: "*", disallow: "/ja/offers/" },
              { userAgent: "*", disallow: "/en/offers/" },
              { userAgent: "*", disallow: "/ebook/" },
            ],
          },
        },
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          "G-B30ZBB27H6", // Google Analytics / GA
        ],
        // This object gets passed directly to the gtag config command
        // This config will be shared across all trackingIds
        // gtagConfig: {
        //  optimize_id: "OPT_CONTAINER_ID",
        //  anonymize_ip: true,
        //  cookie_expires: 0,
        // },
        // This object is used for configuration specific to this plugin
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: true,
          // Setting this parameter is also optional
          respectDNT: true,
          // Avoids sending pageview hits from custom paths
          exclude: ["/preview/**", "/do-not-track/me/too/"],
          // Defaults to https://www.googletagmanager.com
          origin: "https://www.googletagmanager.com",
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages/`,
        name: `pages`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/contents`,
        name: `contents`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        defaultLayouts: {
          default: require.resolve("./src/components/layout"),
        },
        extensions: [`.mdx`, `.md`],
        gatsbyRemarkPlugins: [
          `gatsby-remark-autolink-headers`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1024,
            },
          },
          {
            resolve: `gatsby-remark-external-links`,
            options: {
              target: `_blank`,
              rel: `noopener`,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-airtable`,
      options: {
        apiKey: process.env.AIRTABLE_API_KEY,
        concurrency: 5,
        tables: [
          {
            baseId: process.env.AIRTABLE_SITECONF_BASE,
            tableName: "SiteContents",
            defaultValues: {
              Name: "",
              Description: "",
            },
            mapping: { Description: `text/markdown`, Images: `fileNode` },
            separateNodeType: false,
            separateMapType: false,
          },
          {
            baseId: process.env.AIRTABLE_SITECONF_BASE,
            tableName: "Coupons",
            defaultValues: {
              Name: "",
              Tag: "",
            },
            separateNodeType: false,
            separateMapType: false,
          },
        ],
      },
    },
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [`gatsby-remark-images`],
      },
    },
    {
      resolve: `gatsby-theme-i18n`,
      options: {
        defaultLang: `ja`,
        locales: process.env.LOCALES || `ja en tl`,
        configPath: require.resolve(`./src/i18n/config.json`),
      },
    },
    {
      resolve: `gatsby-theme-i18n-react-i18next`,
      options: {
        locales: `./src/i18n/locales`,
        i18nextOptions: {
          ns: ["translation", "404"],
        },
      },
    },

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
