import * as React from "react"
import Button from "../button"
import { BasicTextStyles } from "./styles"
import { Link } from "gatsby-plugin-react-i18next"

const BasicText = ({ title, content, link, linkText }) => {
  return (
    <BasicTextStyles className="section">
      <div className="container container__tight">
        <div>
          {title && <h2>{title}</h2>}
          {content && (
            <div style={{ marginBottom: "60px" }}>
              <div
                dangerouslySetInnerHTML={{
                  __html: content,
                }}
              />
            </div>
          )}
          <Button text={linkText} as={Link} to={link} />
        </div>
      </div>
    </BasicTextStyles>
  )
}

export default BasicText
