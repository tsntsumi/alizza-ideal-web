import React from "react"
import { FileImage } from "./file-image"

export const Avatar = ({ alt, title, className }) => {
    return (
        <FileImage
            name="avatar.png"
            alt={alt || "profile"}
            type="images"
            post=""
            className={className}
        />
    )
}

export default Avatar
