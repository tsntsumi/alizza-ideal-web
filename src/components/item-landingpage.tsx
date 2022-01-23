import React, { useState } from "react"
import recommended from "remark-preset-lint-recommended"
import remarkHtml from "remark-html"
import { ArrowRight } from "react-feather"
import { Button } from "../components/ui"
import { Calendar } from "react-feather"
import { Link } from "gatsby"
import { remark } from "remark"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

export const ItemLandingPage = ({ data }) => {
    const [focused, changeFocused] = useState(false)
    const description = remark()
        .use(recommended)
        .use(remarkHtml)
        .processSync(data.frontmatter.description)
        .toString()
    const image = getImage(data.frontmatter.image)

    return (
        <div className="landingPage-item w-full md:w-1/2 lg:w-1/3 p-4">
            <div
                className={`transition-all duration-300 hover:shadow-2xl shadow ${
                    focused && "focused"
                }`}
            >
                <Link
                    to={data.fields.slug}
                    title={data.frontmatter.title}
                    onFocus={() => changeFocused(true)}
                    onBlur={() => changeFocused(false)}
                >
                    <div className="image">
                        <GatsbyImage
                            image={image}
                            alt={data.frontmatter.title || "Image"}
                            className="w-full"
                        />
                    </div>
                    <div className="p-4 py-3">
                        <h4 className="text-color-2 font-black text-3xl pt-1">
                            {data.frontmatter.title}
                        </h4>
                        <div className="hidden flex items-center text-secondary">
                            <Calendar className="stroke-current" />
                            <p className="pl-2 text-color-default font-sans">
                                {data.frontmatter.date}
                            </p>
                        </div>
                        <div className="pt-3 text-color-default">
                            <div
                                dangerouslySetInnerHTML={{
                                    __html: description,
                                }}
                            />
                        </div>
                    </div>
                </Link>
                <Button
                    to={data.fields.slug}
                    label={`View ${data.frontmatter.title}`}
                    title={"View"}
                    iconRight={<ArrowRight />}
                />
            </div>
        </div>
    )
}

export default ItemLandingPage
