import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

export const FileImage = props => {
    const { base, images, alt, ...rest } = props

    if (!base) {
        return (
            <div className={rest.className}>
                <div className="bg-error text-white">
                    ファイル名が指定されていません。 ファイル名を base
                    タグで指定しているか確認してください。
                </div>
            </div>
        )
    }
    if (!images) {
        return (
            <div className={rest.className}>
                <div className="bg-error text-white">
                    イメージ一覧を取り出せませんでした。 FileImage
                    タグの引数に「props.images」を したか確認してください。
                </div>
            </div>
        )
    }
    if (!images[base]) {
        return (
            <div className={rest.className}>
                <div className="bg-error text-white">
                    {`「${base}」というファイルが見つかりません。
                    ファイル名を間違えていないか確認してください。`}
                </div>
            </div>
        )
    }

    if (images[base]?.image) {
        return (
            <GatsbyImage
                image={images[base].image}
                alt={alt || base}
                {...rest}
            />
        )
    } else if (images[base].ext === ".svg") {
        const { className, ...imgProps } = rest
        return (
            <div className={className}>
                <img
                    alt={alt || base}
                    src={images[base]?.publicURL}
                    {...imgProps}
                />
            </div>
        )
    }
}

export default FileImage
