import React from "react"
import Layout from "../components/layout"
import Sticky from "../components/Sticky"
import recommended from "remark-preset-lint-recommended"
import remarkHtml from "remark-html"
import { ArrowDown, ArrowDownCircle } from "react-feather"
import { ArrowLeft, ArrowRight } from "react-feather"
import { ArrowUp, ArrowUpCircle } from "react-feather"
import { Avatar } from "../components/Avatar"
import { Button, Offer, CtaButton } from "../components/ui"
import { Calendar } from "react-feather"
import { CartProvider } from "use-shopping-cart"
import { CodeBlock } from "../components/CodeBlock"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { ItemProduct } from "../components/item-product"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { PortfolioQuery } from "./__generated__/PortfolioQuery"
import { Row, Col } from "../components/shortcodes/index"
import { Squeeze } from "../components/squeeze"
import { graphql, PageProps } from "gatsby"
import { remark } from "remark"

const components = {
    Avatar: ({ name, type, post, ...props }) => {
        return (
            <Avatar
                name={name || "avatar.png"}
                type={type || "images"}
                post={post || ""}
                {...props}
            />
        )
    },
    ArrowDown: ArrowDown,
    ArrowDownCircle: ArrowDownCircle,
    ArrowLeft: ArrowLeft,
    ArrowRight: ArrowRight,
    ArrowUp: ArrowUp,
    ArrowUpCircle: ArrowUpCircle,
    Button: Button,
    Col: Col,
    CtaButton: CtaButton,
    FileImage: props => <FileImage {...props} />,
    ItemProduct: ({ price, testPrice, ...props }) => (
        <ItemProduct
            skuid={process.env.NODE_ENV === "development" ? testPrice : price}
            {...props}
        />
    ),
    Offer: Offer,
    Offer: Offer,
    Row: Row,
    Squeeze: Squeeze,
    Sticky: Sticky,
    code: CodeBlock,
}

export default function porfolio({
    location,
    data,
}: PageProps<PortfolioQuery, {}>) {
    const description = remark()
        .use(recommended)
        .use(remarkHtml)
        .processSync(data.mdx.frontmatter.description)
        .toString()
    const credit = remark()
        .use(recommended)
        .use(remarkHtml)
        .processSync(data.mdx.frontmatter.credit ?? "")
        .toString()
    const banner = getImage(data.mdx.frontmatter.banner)

    return (
        <CartProvider
            mode="payment"
            cartMode="client-only"
            stripe={process.env.GATSBY_STRIPE_PUBLISHABLE_KEY}
            successUrl="/portfolio/"
            cancelUrl="/portfolio/"
            currency="JPY"
            allowedCountries={["JP", "US", "PH", "GB", "CA"]}
            billingAddressCollection={true}
        >
            <Layout
                seo={{
                    title: data.mdx.frontmatter.title,
                    description: data.mdx.frontmatter.description,
                    image: data.mdx.frontmatter.banner.publicURL,
                }}
                location={location}
            >
                <div className="md:px-4 mt-12 py-6 md:w-11/12 mx-auto">
                    <div className="mx-auto relative">
                        <GatsbyImage
                            image={banner}
                            alt={data.mdx.frontmatter.title}
                        />
                        <div
                            className="text-right text-xs"
                            dangerouslySetInnerHTML={{
                                __html: credit,
                            }}
                        />
                        <div className="flex items-center justify-center relative lg:absolute w-full h-full top-0 left-0">
                            <div className="hidden lg:block absolute w-full h-full bg-black opacity-50"></div>
                            <div className="px-4 py-8 lg:p-0 relative z-10 text-center text-color-default lg:text-white bg-bgalt lg:bg-transparent">
                                <h1 className="text-5xl font-bold text-color-1 lg:text-white">
                                    {data.mdx.frontmatter.title}
                                </h1>
                                <p className="mt-1 flex items-center justify-center">
                                    <Calendar />{" "}
                                    <span className="ml-2">
                                        {data.mdx.frontmatter.date}
                                    </span>
                                </p>
                                <div className="post-content mt-3 px-9 md:px-20 mx-2 text-justify">
                                    <div
                                        dangerouslySetInnerHTML={{
                                            __html: description,
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-3/4 md:w-11/12 sm:w-full p-3 mt-4 md:mt-6 mx-auto lg:mt-12 text-justify post-content">
                        <MDXProvider components={components}>
                            <MDXRenderer
                                type={data.mdx.fields.sourceName}
                                post={data.mdx.slug?.replace(/\/$/, "")}
                            >
                                {data.mdx.body}
                            </MDXRenderer>
                        </MDXProvider>
                    </div>
                </div>
            </Layout>
        </CartProvider>
    )
}

export const query = graphql`
    query PortfolioQuery($slug: String!) {
        mdx(fields: { slug: { eq: $slug } }) {
            fields {
                sourceName
            }
            slug
            body
            frontmatter {
                title
                date(formatString: "DD MMMM YYYY")
                description
                image {
                    publicURL
                }
                banner {
                    publicURL
                    childImageSharp {
                        gatsbyImageData(
                            width: 1920
                            placeholder: BLURRED
                            formats: [AUTO, WEBP, AVIF]
                        )
                        id
                    }
                }
            }
        }
    }
`
