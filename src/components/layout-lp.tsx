import React, { useState, useEffect } from "react"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"
import { WindowLocation } from "@reach/router"

import { Sun, Moon } from "react-feather"

import Navbar from "./navigation"

import Footer from "./footer"
import SEO, { SEOProps } from "../utils/seo"

import "../style/index.css"
import CookieBox from "./cookie"
import store from "../utils/store"

export type Theme = { name: string; label: string; icon: JSX.Element }
type LPLayoutProps = {
    children: any
    front?: boolean
    seo: Partial<SEOProps>
    navPlaceholder?: boolean
    location: WindowLocation
}

export default ({
    children,
    front,
    seo,
    navPlaceholder = true,
    location,
    robots,
}: LPLayoutProps) => {
    const query = useStaticQuery(graphql`
        query LPThemeQuery {
            site {
                siteMetadata {
                    icon
                    switchTheme
                    darkmode
                    cookiePolicy
                }
            }
        }
    `)

    const themes: Theme[] = [
        {
            name: "theme-light",
            label: "Light Theme",
            icon: <Sun />,
        },
    ]

    const isDarkTheme = false
    const cookiePolicyEnabled = query.site.siteMetadata.cookiePolicy

    const [theme, changeTheme] = useState(isDarkTheme ? 1 : 0)
    const [cookieShown, setCookieShown] = useState(false)

    useEffect(() => {
        if (localStorage.getItem("theme")) {
            const t = Number(localStorage.getItem("theme"))
            changeTheme(t)
        }

        if (localStorage.getItem("cookie-accept")) {
            setCookieShown(true)
        }
    }, [])

    const onCookieAccept = (
        e: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => {
        e.preventDefault()

        localStorage.setItem("cookie-accept", "1")
        setCookieShown(true)
    }

    const switchTheme = () => {
        const next = theme !== themes.length - 1 ? theme + 1 : 0
        changeTheme(next)
        localStorage.setItem("theme", `${next}`)
        store.dispatch("theme:change", undefined)
    }

    return (
        <React.Fragment>
            <Head data={query} robots={robots} />
            <SEO {...seo} />
            <div className={`wrapper ${themes[theme].name}`}>
                <div className="text-color-default bg-bg">
                    {children}
                    <Footer />
                </div>
                {query.site.siteMetadata.cookiePolicy && !cookieShown && (
                    <CookieBox onChange={onCookieAccept} />
                )}
            </div>
        </React.Fragment>
    )
}

const Head = ({ data, robots }) => {
    const robotsContent = robots || "noindex, nofollow"
    return (
        <Helmet>
            <link
                rel="icon"
                href={data.site.siteMetadata.icon}
                type="image/png"
            />
            <link
                href="https://fonts.googleapis.com/css?family=Raleway:500,800&display=swap"
                rel="stylesheet"
            />
            <meta name="robots" content={robotsContent} />
        </Helmet>
    )
}
