// i18next-extract-mark-ns-start translation
import React, { useState, createContext } from "react"

export const menuItems = [
  {
    path: "/",
    text: "Home",
  },
  {
    path: "/contact",
    text: "お問い合わせ",
  },
  {
    path: "/blog",
    text: "ブログ",
  },
]

// Create the context
export const MenuContext = createContext()

export function MenuProvider({ children }) {
  // Place state in here
  const [isOpen, setNav] = useState([])

  return (
    <MenuContext.Provider value={[!isOpen, setNav]}>
      {children}
    </MenuContext.Provider>
  )
}

export default MenuContext
