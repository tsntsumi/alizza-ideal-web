import * as React from "react"
import { Link } from "gatsby-plugin-react-i18next"
import { ButtonStyles } from "./styles"

export const Button = props => {
  const { text, to, type, disabled, bgColor } = props

  const innerComponents = (
    <React.Fragment>
      {props.iconLeft && <span className="icon-left">{props.iconLeft}</span>}
      <span>{props.text}</span>
      {props.iconRight && <span className="icon-right">{props.iconRight}</span>}
    </React.Fragment>
  )

  if (type) {
    const b = type.split(",")
    const t = b[1] ? b[1] : "button"
    const dis = disabled ?? false
    if (b[0] === "button") {
      return (
        <ButtonStyles>
          <button
            type={t}
            className={`btn btn-primary ${dis ? " disabled" : ""}`}
          >
            {innerComponents}
          </button>
        </ButtonStyles>
      )
    }
  }
  return (
    <ButtonStyles>
      <Link
        to={to}
        title={text}
        style={{
          backgroundColor: bgColor || "var(--key-coro)",
        }}
      >
        <div className="btn btn-primary">{innerComponents}</div>
      </Link>
    </ButtonStyles>
  )
}

export default Button
