import React from "react"
import { MenuProvider } from "./src/components/menucontext"
import { AnimatePresence } from "framer-motion"
import "@fontsource/heebo/400.css"
import "@fontsource/heebo/700.css"
import { ChakraProvider, extendTheme } from "@chakra-ui/react"

const config = {
  useSystemColorMode: false,
  initialColorMode: "light",
}

const theme = extendTheme({ config })

export function wrapPageElement({ element }) {
  return <AnimatePresence exitBeforeEnter>{element}</AnimatePresence>
}

export function wrapRootElement({ element }) {
  return (
    <ChakraProvider theme={theme}>
      <MenuProvider>{element}</MenuProvider>
    </ChakraProvider>
  )
}
