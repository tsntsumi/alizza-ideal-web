// i18next-extract-mark-ns-start common
import React, { useState, createContext } from "react"

export const menuItems = [
  {
    path: "/",
    text: "ホーム",
  },
  {
    path: "/get-in-touch",
    text: "お問い合わせ",
  },
  {
    path: "/blog",
    text: "ブログ",
  },
  {
    path: "/aboutme",
    text: "私について",
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
