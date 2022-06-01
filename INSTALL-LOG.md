Alizza Ideal Official Site INSTALL log
======================================

Creating `barcadia` starter style web site...

Unfortunatedly `barcadia` starter couldn`t build in my environments.
So first, install plain boiler-plate.

1. install using boiler-plate 
  npx gatsby new official https://github.com/gatsbyjs/gatsby-starter-default

2. Avoid deprecated warnings
  cd official
  rm -rf .git
  gatsby build
  
3. Add desired plugins 
  rm package-lock.json
  yarn add @mdx-js/mdx @mdx-js/react dotenv \
  framer-motion gatsby-background-image gatsby-plugin-mdx \
  gatsby-plugin-mdx-source-name gatsby-plugin-react-helmet \
  gatsby-plugin-robots-txt gatsby-plugin-sharp \
  gatsby-plugin-sitemap gatsby-source-filesystem \
  gatsby-transformer-remark gatsby-transformer-sharp \
  gbimage-bridge gsap react react-dom react-helmet \
  react-icons react-image-gallery styled-components \
  gatsby-plugin-react-i18next react-i18next \
  gatsby-remark-images

4. Check build again
  gatsby build

5. Add content dir
  mkdir -p content/blog content/product

6. Make dummy contents
  mkdir content/blog/first-post
  mkdir content/product/first-product
  cat <<EOT > content/blog/first-post/index.mdx
---
title: First post
author: John Doe
date: 2022-01-08
description: My first blog post
tags: first
category: Cat1
---
This is my first blog post.
EOT
  cat <<EOT > content/product/first-product/index.mdx
---
title: First product
author: John Doe
date: 2022-01-08
description: My first product
featured: yes
tags: first
category: Cat1
---
This is my first product.
EOT

7. Update gatsby-config.js
  Update following siteMetadata
      - - - -
      siteMetadata: {
        title: `Alizza Ideal`,
        description: `Alizza Ideal is a Mito-based company that helps small companies and small businesses acquire customers online..`,
		descriptionjp: 'Alizza Idealは、水戸市を拠点とする、小規模な会社やスモールビジネスに向けた、ネットによる顧客獲得のお手伝いをしています。'
        author: `TSUTSUMI Kikuo`,
        siteUrl: `https://www.alizza-ideal.com/`,
      },
      - - - - -
  Add following configurations:
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        defaultLayouts: {
          default: require.resolve(`./src/components/layout.js`),
        },
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1000,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog/`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/product/`,
        name: `product`,
      },
    },
    `gatsby-plugin-mdx-source-name`,
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [`gatsby-remark-images`],
      },
    },

8. Update .gitignore and LICENSC files
    echo "# Editors\n*~\n\\#*\#\n*.bak\n*.swp" >> .gitignore
    sed -i.bak 's/Copyright (c) 2020 Gatsby Inc./Copyright (c) 2022 Alizza Ideal./' LICENSE

9. Commit after validated
    gatsby build
	git init
	git add -A
	git commit -m "Initial commit"

10. Create 404.js not found page
    And then, translate to japanese with i18next
    yarn add gatsby-plugin-react-i18next react-i18next i18next
	yarn add icons

11. Add Navigation Menu and Footer to complete 404 page
    Update gatsby-browser.js and gatsby-ssr.js for menu context

