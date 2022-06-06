import * as React from "react"
import { motion } from "framer-motion"
import { MDXProvider } from "@mdx-js/react"
import { Link } from "gatsby-plugin-react-i18next"
import { GlobalStyle } from "./styles"
import Animate from "../animate"
import { Nav } from "../nav"
import { Footer } from "../footer"

const components = { Link }

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.75 }}
      >
        <Nav />
        <Animate>
          <MDXProvider components={components}>{children}</MDXProvider>
          <Footer />
        </Animate>
      </motion.div>
    </>
  )
}

export default Layout
