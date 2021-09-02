import React from "react"

type StickyProps = {
    position?: "left" | "right"
    width?: string
    height?: string
    fontSize?: string
}

export default (props: StickyProps) => {
    const { position, width, height, fontSize, children } = props
    const styles = {
        width: width ?? "auto",
        height: height ?? "auto",
        marginLeft: position === "left" ? "0" : "0.8rem",
        marginRight: position == "right" ? "0" : "0.8rem",
        float: position ?? "none",
        fontSize: fontSize ?? "9pt",
    }
    return (
        <div className="sticky-note" style={styles}>
            {children}
        </div>
    )
}
