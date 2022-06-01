import * as React from "react"
import Button from "../button"
import { PostStyles } from "./styles"

const Post = ({ node }, key) => {
  const { title, description, date } = node.frontmatter
  const { gatsbyPath } = node
  return (
    <PostStyles key={key} to={gatsbyPath}>
      <h4>{title}</h4>
      {description && <p>{description}</p>}
      <div className="post__meta">
        <Button as="span" text="Read More" arrow={true} />
        <p>{date}</p>
      </div>
    </PostStyles>
  )
}

export default Post
