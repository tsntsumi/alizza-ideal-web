// i18next-extract-mark-ns-start translation
import * as React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { BannerStyles } from "./styles"
import Button from "../button"

const BannerImage = ({ image }) => {
  if (!image) {
    return <></>
  }
  return (
    <GatsbyImage
      image={getImage(image)}
      alt="Banner Image"
      className="banner__image"
      imgClassName="banner__image--content"
    />
  )
}

const BannerTitle = ({ title }) => {
  if (!title) {
    return <></>
  }
  return (
    <h1>
      {title}
      <span style={{ color: "var(--primary)" }}>.</span>
    </h1>
  )
}

const Description = ({ children }) => {
  if (!children) {
    return <></>
  }
  return <div className="description">{children}</div>
}

const EnquireButton = ({ children }) => {
  if (!children) {
    return <></>
  }
  return (
    <div className="banner__btns">
      <Button to="/contact">{children}</Button>
    </div>
  )
}

export const Banner = ({ children, title, image, enquire }) => {
  return (
    <>
      <BannerStyles>
        <BannerImage image={image} />
        <div className="container">
          <div className="banner__content">
            <BannerTitle title={title} />
            <Description>{children}</Description>
            <EnquireButton>{enquire}</EnquireButton>
          </div>
        </div>
        <div className="gradient"></div>
      </BannerStyles>
      <span id="topContent"></span>
    </>
  )
}

export default Banner
