import { getImage } from "gatsby-plugin-image"

export class ImageDict {
  constructor(data) {
    this.dict = this.imageDictionary(data)
  }

  imageOf(name) {
    const images = this.dict[name]
    if (!images || images.length === 0) {
      return null
    }
    const image = images.shift()
    images.push(image)
    return getImage(image)
  }

  imageDictionary(data) {
    const images = data.images.edges.reduce((p, c) => {
      p[c.node.data.Name] = c.node.data.Images.localFiles.map(img => img)
      return p
    }, {})
    return images
  }
}

export default ImageDict
