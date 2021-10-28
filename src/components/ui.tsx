import React, { useState } from "react"
import { Link } from "./utils"

type ButtonProps = {
    title: string
    to?: string
    type?: any
    label?: string
    disabled?: boolean
    iconLeft?: JSX.Element
    iconRight?: JSX.Element
    bgColor?: string
}
const Button: React.FC<ButtonProps> = (props) => {
    const { title, to, type, label, disabled, bgColor } = props

    let innerComponents = (
        <React.Fragment>
            {props.iconLeft && (
                <span className="icon icon-left">{props.iconLeft}</span>
            )}
            <span>{props.title}</span>
            {props.iconRight && (
                <span className="icon icon-right">{props.iconRight}</span>
            )}
        </React.Fragment>
    )

    if (type) {
        const b = type.split(",")
        const t = b[1] ? b[1] : "button"
        const dis = disabled ?? false
        if (b[0] === "button") {
            return (
                <button
                    type={t}
                    className={`btn btn-primary${dis ? " disabled" : ""}`}
                >
                    {innerComponents}
                </button>
            )
        }
    }
    return (
        <Link to={to} title={label || title}>
            <div
                className="btn btn-primary"
                style={{
                    borderRadius: "2",
                    backgroundColor: bgColor || "#f55555",
                }}
            >
                {innerComponents}
            </div>
        </Link>
    )
}

const TextInput = ({
    label,
    type = "text",
    placeholder,
    name,
    onChange,
    footer,
}) => {
    const [focused, changeFocused] = useState(false)

    let elem = (
        <input
            label={label}
            type={type}
            placeholder={placeholder}
            name={name}
            className="block w-full outline-none px-4 py-2 focus:outline-none bg-bg text-color-default"
            onFocus={() => changeFocused(true)}
            onBlur={() => changeFocused(false)}
            onChange={onChange}
            aria-label={name}
        />
    )

    if (type === "textarea") {
        elem = (
            <textarea
                className="block w-full outline-none resize-none px-4 py-2 focus:outline-none bg-bg text-color-default"
                name={name}
                onChange={(event) => {
                    event.target.style.height = "auto"
                    event.target.style.height = event.target.scrollHeight + "px"

                    onChange(event)
                }}
                onFocus={() => changeFocused(true)}
                onBlur={() => changeFocused(false)}
                aria-label={name}
            />
        )
    }

    return (
        <div
            className={`${
                focused ? "input focused shadow-2xl" : ""
            } transition-all duration-300 py-3 lg:p-4`}
        >
            <div className="text-color-3 pt-0">{label}</div>
            <div className="bg-gradient-primary p-2px">{elem}</div>
            {footer && <>{footer}</>}
        </div>
    )
}

type CtaButtonProps = {
    title: string
    to: string
    disabled?: boolean
    iconLeft?: JSX.Element
    iconRight?: JSX.Element
    align?: string
    bgColor: string
}
const CtaButton: React.FC<CtaButtonProps> = (props) => {
    const { title, to, disabled, iconLeft, iconRight, align, bgColor } = props
    return (
        <div className={`text-${align}`}>
            <Button
                type="link"
                to={to}
                title={title}
                iconLeft={iconLeft}
                iconRight={iconRight}
                bgColor={bgColor}
            />
        </div>
    )
}

const Offer = (props) => {
    const { children, className, bgColor } = props

    return (
        <div
            className={`border-4 border-double rounded-md border-blue-400 rounded-md px-8 py-4 my-8 text-black ${
                className || ""
            }`}
            style={{ backgroundColor: bgColor || "#e6fffa" }}
        >
            {children}
        </div>
    )
}

export { Button, TextInput, CtaButton, Offer }
