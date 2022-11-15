import * as React from "react"
import { motion } from "framer-motion"
import { GlobalStyle } from "./styles"
import Animate from "../animate"
import { Nav } from "../nav"
import { Footer } from "../footer"

const Layout = ({
  withoutHamburger,
  withoutContact,
  withoutLanguage,
  children,
}) => {
  return (
    <>
      <GlobalStyle />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.75 }}
      >
        <Nav
          withoutHamburger={withoutHamburger}
          withoutContact={withoutContact}
          withoutLanguage={withoutLanguage}
        />
        <Animate>
          {children}
          <Footer />
        </Animate>
      </motion.div>
    </>
  )
}

export default Layout
