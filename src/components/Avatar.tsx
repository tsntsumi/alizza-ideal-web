import React from "react"
import { FileImage } from "./file-image"

export const Avatar = ({ name, type, post, ...rest }) => (
    <FileImage
        name={name || "avatar.png"}
        type={type || "images"}
        post={post || ""}
        {...rest}
    />
)

export default Avatar
