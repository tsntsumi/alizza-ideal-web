import React, { useState } from "react"
import { graphql, useStaticQuery } from "gatsby"
import recommended from "remark-preset-lint-recommended"
import remarkHtml from "remark-html"
import { Button } from "./ui"
import { remark } from "remark"
import { useShoppingCart, formatCurrencyString } from "use-shopping-cart"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const CheckoutNow = props => {
    const { product, children } = props
    const [loading, setLoading] = useState(false)
    const {
        addItem,
        clearCart,
        redirectToCheckout,
        checkoutSingleItem,
    } = useShoppingCart()

    return (
        <Button
            type="button"
            disabled={loading}
            onClick={() => {
                clearCart()
                addItem(product)
                redirectToCheckout()
            }}
            title={children}
        />
    )
}

export const ItemProduct = ({ skuid }) => {
    const query = useStaticQuery(graphql`
        query StripeProductQuery($skuid: String) {
            stripePrice(id: { eq: $skuid }, active: { eq: true }) {
                active
                id
                currency
                unit_amount
                product {
                    id
                    name
                    description
                    images
                }
            }
        }
    `)

    const [focused, changeFocused] = useState(false)
    const description = remark()
        .use(recommended)
        .use(remarkHtml)
        .processSync(query.stripePrice.product.description)
        .toString()

    const product = {
        sku: query.stripePrice.id,
        name: query.stripePrice.product.name,
        price: query.stripePrice.unit_amount,
        currency: query.stripePrice.currency,
        description: query.stripePrice.product.description,
        images: query.stripePrice.product.images,
    }

    const image = getImage(product.images)

    const price = formatCurrencyString({
        value: product.price,
        currency: product.currency,
        language: "ja-JP",
    })

    return (
        <div className="blog-item w-full md:w-1/2 lg:w-1/3 xl:1/4 py-4 px-8 mx-12">
            <div
                className={`transition-all duration-300 hover:shadow-2xl shadow ${focused &&
                    "focused"}`}
            >
                <div className="imag">
                    <GatsbyImage
                        image={image}
                        alt={product.name}
                        placeholder="blurred"
                        layout="fixed"
                        className="w-full"
                    />
                </div>
                <div className="p-4 py-3">
                    <h4 className="text-color-2 font-black text-3xl pt-1">
                        {product.name}
                    </h4>
                    <p className="pt-3 text-color-default">
                        {product.description}
                    </p>
                    <p className="pt-3 text-color-default">{price}</p>
                </div>
                <CheckoutNow product={product}>購入する</CheckoutNow>
            </div>
        </div>
    )
}

export default ItemProduct
