import * as React from "react"
import { Link } from "gatsby-plugin-react-i18next"
import { ButtonStyles } from "./styles"

export const Button = props => {
  const { text, to, type, disabled, bgColor, color } = props

  const innerComponents = (
    <React.Fragment>
      {props.iconLeft && <span className="icon-left">{props.iconLeft}</span>}
      <span>{text}</span>
      {props.iconRight && <span className="icon-right">{props.iconRight}</span>}
    </React.Fragment>
  )

  if (type) {
    const dis = disabled ?? false
    if (type === "button" || type === "submit") {
      return (
        <ButtonStyles bgColor={bgColor} color={color || "white"}>
          <button
            type={type}
            className={`btn btn-primary ${dis ? " disabled" : ""}`}
          >
            {innerComponents}
          </button>
        </ButtonStyles>
      )
    }
  }
  return (
    <ButtonStyles color={color || "white"} bgColor={bgColor}>
      <Link to={to} title={text} className="btn btn-primary">
        {innerComponents}
      </Link>
    </ButtonStyles>
  )
}

export default Button
