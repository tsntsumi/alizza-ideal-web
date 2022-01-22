import React, { useEffect, useState } from "react"

import { useStaticQuery, graphql } from "gatsby"

import { WindowLocation } from "@reach/router"
import store from "../utils/store"

type CommentsProps = { title: string; location: WindowLocation<{}> }
const Comments: React.FC<CommentsProps> = ({ title, location }) => {
    // State used to reload disqus on theme change

    const [counter, setCounter] = useState(0)

    useEffect(() => {
        store.listen("theme:change", (_) => {
            setCounter((p) => p + 1)
        })
    }, [])

    return null
}

export default Comments
