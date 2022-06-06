// i18next-extract-mark-ns-start contact-component
import * as React from "react"
import { useI18next } from "gatsby-plugin-react-i18next"
import Button from "../button"
import { ContactStyles } from "./styles"

const Contact = () => {
  const { t } = useI18next()
  return (
    <ContactStyles className="section">
      <form name="contact" netlify>
        <input placeholder={t("Your name...")} type="text" name="name" />
        <input placeholder={t("Your email...")} type="email" name="email" />
        <textarea
          placeholder={t("Your message...")}
          name="message"
          rows="5"
        ></textarea>
        <Button text={t("Send Message")} />
      </form>
    </ContactStyles>
  )
}

export default Contact
