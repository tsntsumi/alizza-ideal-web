// i18next-extract-mark-ns-start translation
import * as React from "react"
import { useI18next } from "gatsby-plugin-react-i18next"
import { SqueezeForm, SubmitInquiryToAirtable } from "../squeezeform"

const Contact = ({ tag }) => {
  const { t, language } = useI18next()
  return (
    <SqueezeForm
      cta={t("今すぐ問い合わせる")}
      namelabel={t("Your name...")}
      emaillabel={t("Your email...")}
      inquirylabel={t("Your message...")}
      tag={tag || "inquiry"}
      language={language}
      acceptInqiry={true}
      action={SubmitInquiryToAirtable}
      nextpage="/thanks/homepage-thanks"
    />
  )
}

export default Contact
