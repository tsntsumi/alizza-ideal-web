import React, { useState } from "react"
import { graphql, useStaticQuery } from "gatsby"
import recommended from "remark-preset-lint-recommended"
import remarkHtml from "remark-html"
import { Button } from "./ui"
import { remark } from "remark"
import { useShoppingCart, formatCurrencyString } from "use-shopping-cart"
import { GatsbyImage, getImage, getSrc } from "gatsby-plugin-image"

const CheckoutNow = (props) => {
    const { product, children } = props
    const [loading, setLoading] = useState(false)
    const { addItem, clearCart, redirectToCheckout, checkoutSingleItem } =
        useShoppingCart()

    return (
        <button
            disabled={loading}
            onClick={(e) => {
                clearCart()
                addItem(product)
                redirectToCheckout()
            }}
            className={`btn btn-primary ${loading && "disabled"}`}
        >
            {children}
        </button>
    )
}

export const ItemProduct = ({ skuid }) => {
    const query = useStaticQuery(graphql`
        {
            allStripePrice(filter: { active: { eq: true } }) {
                edges {
                    node {
                        id
                        currency
                        unit_amount
                        billing_scheme
                        active
                        internal {
                            content
                        }
                    }
                }
            }
        }
    `)

    const found = query.allStripePrice.edges.find((edge) => {
        return edge.node.id === skuid
    })

    if (!found) {
        return (
            <div className="blog-item w-full md:w-1/2 lg:w-1/3 xl:1/4 py-4 px-8 mx-12">
                <p className="bg-text-error text-white">
                    価格コードに一致する商品が見つかりませんでした。
                </p>
            </div>
        )
    }

    const [focused, changeFocused] = useState(false)
    const content = JSON.parse(found?.node.internal.content)

    const product = {
        sku: content?.product.id,
        name: content?.product.name,
        price: content?.unit_amount,
        currency: content?.currency,
        description:
            content?.product.description || "商品が見つかりませんでした",
        images: content?.product.images,
    }

    const price = formatCurrencyString({
        value: product.price,
        currency: product.currency,
        language: "ja-JP",
    })

    return (
        <div className="blog-item w-4/5 lg:w-3/5 xl:1/2 py-4 px-8 mx-12">
            <div
                className={`transition-all duration-300 hover:shadow-2xl shadow ${
                    focused && "focused"
                }`}
            >
                <div className="image">
                    <img
                        src={product.images[0]}
                        alt={product.name}
                        className="w-full"
                    />
                </div>
                <div className="p-4 py-3">
                    <h4 className="text-justify text-color-2 font-black text-3xl pt-1">
                        {product.name}
                    </h4>
                    <div className="pt-3 text-color-default text-justify">
                        <div
                            dangerouslySetInnerHTML={{
                                __html: product.description,
                            }}
                        />
                    </div>
                    <p className="pt-3 text-color-default">{price}</p>
                </div>
                <CheckoutNow product={product}>購入する</CheckoutNow>
            </div>
        </div>
    )
}

export default ItemProduct
