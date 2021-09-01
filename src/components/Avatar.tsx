import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img, { FixedObject } from "gatsby-image"

type AvatarProps = {
    url?: string
    altText?: string
    title?: string
    user?: "monster1" | "monster2"
    diameter?: string
}

type ChildImage = {
    childImageSharp: {
        fixed: FixedObject
    }
}

type Data = {
    monster1: Childimage
    monster2: Childimage
}

export default (props: AvatarProps) => {
    const data = useStaticQuery<Data>(graphql`
        query {
            monster1: file(relativePath: { eq: "monster-01-headshot.png" }) {
                childImageSharp {
                    fixed(width: 75, height: 75) {
                        ...GatsbyImageSharpFixed
                    }
                }
            }
            monster2: file(relativePath: { eq: "monster-02-headshot.png" }) {
                childImageSharp {
                    fixed(width: 75, height: 75) {
                        ...GatsbyImageSharpFixed
                    }
                }
            }
        }
    `)

    const { url, altText, title, user, diameter, className } = props
    const styles = {
        width: diameter || "75px",
        height: diameter || "75px",
        borderRadius: "50%",
        classes: className || "",
    }

    if (url) {
        return (
            <React.Fragment>
                <img style={styles} src={url} alt={altText} title={title} />
            </React.Fragment>
        )
    }

    return (
        <React.Fragment>
            <Img
                style
                fixed={user && data[user].childImageSharp.fixed}
                alt={altText}
                title={title}
            />
        </React.Fragment>
    )
}
