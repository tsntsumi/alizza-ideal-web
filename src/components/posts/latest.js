import React from "react"
import { Link } from "gatsby"
import Posts from "./index"
import Post from "./post"
import UseLatestBlogPost from "../../hooks/use-latest-blog-post"
import Button from "../button"

const LatestPosts = ({ title, description }) => {
  const latestBlogPost = UseLatestBlogPost()
  return (
    <div className="section">
      <div className="container container__tight">
        {title || description ? (
          <div className="intro__area">
            {title && (
              <h2>
                {title}
                <span>.</span>
              </h2>
            )}
            {description && <p>{description}</p>}
          </div>
        ) : null}

        <Posts>
          {latestBlogPost.map((node, index) => {
            return <Post key={index} node={node} />
          })}
        </Posts>
        <div className="learn__more">
          <Button text="All News Items" as={Link} to="/news" />
        </div>
      </div>
    </div>
  )
}

export default LatestPosts
