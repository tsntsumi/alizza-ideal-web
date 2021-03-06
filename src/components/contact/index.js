// i18next-extract-mark-ns-start translation
import * as React from "react"
import { useI18next } from "gatsby-plugin-react-i18next"
import { SqueezeForm, SubmitInquiryToAirtable } from "../squeezeform"

const Contact = ({ tag }) => {
  const { language } = useI18next()
  return (
    <SqueezeForm
      cta={"今すぐ問い合わせる"}
      namelabel={"Your name..."}
      emaillabel={"Your email..."}
      inquirylabel={"Your message..."}
      tag={tag || "inquiry"}
      language={language}
      acceptInqiry={true}
      action={SubmitInquiryToAirtable}
      nextpage="/thanks/homepage-thanks"
    />
  )
}

export default Contact
