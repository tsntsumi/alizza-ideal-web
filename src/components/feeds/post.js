import React from "react"
import PostItem from "../post/postitem"
import useAllPost from "../../hooks/use-all-blog-post"

const PostFeed = () => {
  const allPost = useAllPost()

  return allPost.map((node, index) => {
    return <PostItem key={index} node={node} />
  })
}

export default PostFeed
