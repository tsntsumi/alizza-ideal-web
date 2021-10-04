import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Form } from "./contact"

const Inquire = ({ desc }) => {
    const query = useStaticQuery(graphql`
        {
            site {
                siteMetadata {
                    contact {
                        api_url
                    }
                }
            }
        }
    `)

    const api_url = query.site.siteMetadata.contact.api_url

    return (
        <div className="container mx-auto py-2 my-0">
            <div className="title text-center">
                <h3 className="font-bold text-5xl text-color-1 m-1 p1">
                    お問い合わせ
                </h3>
            </div>
            <div className="flex flex-wrap pb-4">
                <div className="w-full lg:w-1/2 px-6">
                    <Form api={api_url} />
                </div>
                <div className="w-full lg:w-1/2 mx-auto px-6 pt-8">{desc}</div>
            </div>
        </div>
    )
}

export { Inquire }
