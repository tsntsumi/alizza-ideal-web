import * as React from "react"
import { Link } from "gatsby"
import Button from "../button"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { FeaturedProductStyles } from "./styles"

const FeaturedProduct = ({ feature }) => {
  const { gatsbyPath, image, title, description } = feature
  const headerImage = getImage(image)

  return (
    <FeaturedProductStyles>
      <Link to={gatsbyPath}>
        <GatsbyImage
          className="features__item--img"
          image={headerImage}
          alt="Product Image"
        />
        {title && description && (
          <div className="features__item--content">
            {title && <h4>{title}</h4>}
            {description && <p>{description}</p>}
            <Button text="Read More" as="span" arrow={true} />
          </div>
        )}
      </Link>
    </FeaturedProductStyles>
  )
}

export default FeaturedProduct
