import React from "react"
import { FileImage } from "./file-image"

export const Avatar = ({ base, type, post, ...rest }) => (
    <FileImage
        base={base || "avatar.png"}
        type={type || "images"}
        post={post || ""}
        {...rest}
    />
)

export default Avatar
