import React, { useState } from "react"
import { graphql, useStaticQuery } from "gatsby"
import { useShoppingCart, formatCurrencyString } from "use-shopping-cart"

type ItemProductProps = {
    id: string
    active: Boolean
    currency: stirng
    unit_amount: number
    product: {
        id: string
        name: string
        description: string
        image: any
    }
}

const CheckoutNow = ({ product, children }) => {
    const [loading, setLoading] = useState(false)
    const {
        addItem,
        clearCart,
        redirectToCheckout,
        checkoutSingleItem,
    } = useShoppingCart()

    return (
        <button
            tyype="button"
            disabled={loading}
            className={`btn btn-primary${loading ? " disabled" : ""}`}
            onClick={() => {
                clearCart()
                addItem(product)
                redirectToCheckout()
            }}
        >
            {children}
        </button>
    )
}

export const ItemProduct: React.FC<{ data: ItemProductProps }> = ({
    skuid,
}) => {
    const data = useStaticQuery(graphql`
        query {
            prices: allStripePrice(
                filter: { active: { eq: true } }
                sort: { fields: unit_amount }
            ) {
                edges {
                    node {
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
            }
        }
    `)
    const found = data.prices.edges.find(edge => edge.node.id === skuid)

    if (!found) {
        return ""
    }

    const [focused, changeFocused] = useState(false)

    const product = {
        sku: skuid,
        name: found.node.product.name,
        price: found.node.unit_amount,
        currency: found.node.currency,
        description: found.node.product.description,
        images: found.node.product.images,
    }

    const price = formatCurrencyString({
        value: product.price,
        currency: product.currency,
        language: "ja-JP",
    })

    return (
        <div className="blog-item w-full md:w-1/2 lg:w-1/3 p-4">
            <div
                className={`transition-all duration-300 hover:shadow-2xl shadow ${focused &&
                    "focused"}`}
            >
                <div className="imag">
                    <img
                        src={product.images}
                        alt={product.name}
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
