const siteMetadata = {
    title: `Alizza Ideal`,
    siteUrl: `https://www.alizza-ideal.com`,
    capitalizeTitleOnHome: false,
    logo: `/images/logo.png`,
    icon: `/images/icon.png`,
    titleImage: `/images/alizza-at-sea-side.jpg`,
    ogImage: `/images/alizza-at-seashore.jpg`,
    twoColumnWall: true,
    cookiePolicy: true,
    introTag: `WEB MARKETING | HAND MADE CRAFTING | PROGRAMMING`,
    description: `ネットでの集客と販売のアドバイスと、それらにまつわる技術サポートをしています`,
    about:
        "\
Alizza Ideal (アリザアイデアル) では、Webやメールなどを使った\
　ネット販売（集客からセールス、顧客管理など）のアドバイスをしています。\
中の人は、何年もの間いろいろなソフトウェアの開発に携わっていました。\
その経験をもとに、集客やセールスにとどまらない包括的技術的サポートも行っています。",
    author: `@tsntsumi`,
    blogItemsPerPage: 10,
    portfolioItemsPerPage: 10,
    darkmode: true,
    switchTheme: true,
    navLinks: [
        {
            name: "HOME",
            url: "/",
        },
        {
            name: "ABOUT",
            url: "/about",
        },
        {
            name: "BLOG",
            url: "/blog",
        },
        {
            name: "PORTFOLIO",
            url: "/portfolio",
        },
        {
            name: "CONTACT",
            url: "/contact",
        },
    ],
    footerLinks: [
        {
            name: "PRIVACY POLICY",
            url: "/privacy-policy",
        },
        {
            name: "特定商取引法について",
            url: "/specified-commercial-transactions-act",
        },
        {
            name: "GitHub",
            url: "https://github.com/tsntsumi/",
        },
    ],
    social: [
        {
            name: "Facebook",
            icon: "/images/Facebook.svg",
            url: "https://www.facebook.com/alizza.ideal",
        },
        {
            name: "Twitter",
            icon: "/images/Twitter.svg",
            url: "https://twitter.com/tsntsumi",
        },
        {
            name: "Instagram",
            icon: "/images/Instagram.svg",
            url: "https://www.instagram.com/alizza.ideal/",
        },
        // {
        //   name: "Youtube",
        //   icon: "/images/Youtube.svg",
        //   url: "#",
        // },
    ],
    contact: {
        // leave empty ('') or false to hide form
        api_url: "appPUUN2pou85BGK4",
        description: "基本的に２営業日以内にお返事いたします",
        mail: "",
        phone: "+81292405021",
        address: "1397-2 Tōmae-chō Mito-shi Ibaraki, JAPAN",
    },
    disqus: "",
}

const beforeContactFormSubmit = data => {
    // Code 0 - success
    // Code 1 - Name
    // Code 2 - Email
    // Code 3 - Message
    // Code 4 - Other
    const errors = []

    if (data.name.trim().length < 2) {
        errors.push({
            code: 1,
            message: "Enter a name",
        })
    }

    if (!data.email.match(/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/)) {
        errors.push({
            code: 2,
            message: "Enter a valid email address",
        })
    }

    if (data.message.trim().length < 15) {
        errors.push({
            code: 3,
            message: "Enter a message with atleast 15 characters",
        })
    }

    if (errors.length > 0)
        return {
            result: false,
            errors: errors,
        }

    return {
        data: {
            name: data.name,
            email: data.email,
            message: data.message,
        },
        result: true,
    }
}

const Airtable = require("airtable")

const contactFormSubmit = async (api, data) => {
    const base = new Airtable({
        apiKey: process.env.GATSBY_AIRTABLE_API_KEY,
    }).base(api)

    let error = null

    base("Contacts").create(
        [
            {
                fields: {
                    Name: data.name,
                    Email: data.email,
                    Message: data.message,
                },
            },
        ],
        (err, records) => {
            if (err) {
                error = err
                return
            }
        }
    )

    if (error) {
        return {
            result: false,
            error: error,
        }
    }

    return {
        result: true,
    }
}

const defaults = {
    disqus: null,
    twoColumnWall: true,
    darkmode: false,
    switchTheme: true,
    capitalizeTitleOnHome: true,
    cookiePolicy: false,
}

Object.keys(defaults).forEach(item => {
    if (siteMetadata[item] === undefined) {
        siteMetadata[item] = defaults[item]
    }
})

export { siteMetadata, beforeContactFormSubmit, contactFormSubmit }
