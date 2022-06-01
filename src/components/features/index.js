import * as React from "react"
import { Link } from "gatsby"
import { FeaturedProductsStyles } from "./styles"
import FeaturedProduct from "./product"
import UseFeaturedProduct from "../../hooks/use-featured-product"
import Button from "../button"

const Features = ({ title, description }) => {
  const featuredProduct = UseFeaturedProduct()

  return (
    <FeaturedProductsStyles className="section">
      {title || description ? (
        <div className="container container__tight">
          <div className="intro__area">
            {title && <h2>{title}</h2>}
            {description && <p>{description}</p>}
          </div>
        </div>
      ) : null}

      <div className="container container__tight container__scroll">
        {featuredProduct.map((node, index) => {
          return <FeaturedProduct feature={node} key={index} />
        })}
      </div>
      <div className="container container__tight learn__more">
        <Button as={Link} to="/products" text="All Products" />
      </div>
    </FeaturedProductsStyles>
  )
}

export default Features
