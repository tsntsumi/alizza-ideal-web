// i18next-extract-mark-ns-start translation
import React, { useContext, useState } from "react"
import { motion } from "framer-motion"
import { FiChevronDown as Chevron } from "react-icons/fi"
import { MdMail as Mailbox } from "react-icons/md"
import { Trans, Link, useI18next } from "gatsby-plugin-react-i18next"
import { MenuContext, menuItems } from "../menucontext"
import { useSiteMetadata } from "../hooks"
import {
  NavStyles,
  NavTopLevel,
  SubNavStyles,
  HamburgerStyles,
  LogoStyles,
} from "./styles"
import {
  barOneVariants,
  barTwoVariants,
  barThreeVariants,
  menuList,
  subMenuNavVariants,
} from "./animation"

const ChooseLanguage = ({
  isOpen,
  toggle,
  language,
  languages,
  originalPath,
}) => (
  <div className="lang">
    <NavTopLevel>
      <li className={isOpen ? "open" : "closed"} key="lang-top">
        <div>
          <Trans>Language</Trans>
        </div>
        <button type="button" onClick={toggle} onKeyDown={toggle}>
          {/* i18next-extract-disable-next-line */}
          <Trans>{language}</Trans>
          <span>.</span>
          <Chevron />
        </button>

        <SubNavStyles
          className="subnav"
          initial="closed"
          animate={isOpen ? "open" : "closed"}
          variants={subMenuNavVariants}
        >
          {languages.map(
            (lang, index) =>
              lang !== language && (
                <li key={`${lang}-${index}`}>
                  <Link to={originalPath} language={lang}>
                    {/* i18next-extract-disable-next-line */}
                    <Trans>{lang}</Trans>
                    <span>.</span>
                  </Link>
                </li>
              )
          )}
        </SubNavStyles>
      </li>
    </NavTopLevel>
  </div>
)

const ContactLink = ({ language }) => {
  return (
    <div className="contact">
      <Link to="/get-in-touch" language={language} type="button">
        <span className="icon">
          <Mailbox />
        </span>
        <Trans>Get in touch</Trans>
      </Link>
    </div>
  )
}

const Title = () => {
  return (
    <div className="title">
      <Trans>Catch Copy on Nav Bar</Trans>
    </div>
  )
}

export const Nav = ({ withoutHamburger, withoutContact, withoutLanguage }) => {
  const featuredProduct = [] /* useFeaturedProduct() */

  const [isOpen, setNav] = useContext(MenuContext)
  const [subNavIsOpen, setSubNav] = useState(false)
  const [langNavIsOpen, setLangNav] = useState(false)

  const toggleNav = () => {
    setNav(isOpen => !isOpen)
  }

  const toggleSubNav = () => {
    setSubNav(subNavIsOpen => !subNavIsOpen)
  }
  const toggleLangNav = () => {
    setLangNav(langNavIsOpen => !langNavIsOpen)
  }

  const { title, logo } = useSiteMetadata()
  const { originalPath } = useI18next()
  const { language, languages } = useI18next()

  return (
    <NavStyles>
      <div className="nav">
        <div className="container">
          {!withoutHamburger && (
            <HamburgerStyles
              initial="closed"
              animate={isOpen ? "open" : "closed"}
              onClick={toggleNav}
              onKeyDown={toggleNav}
              aria-label={isOpen ? "Close Menu" : "Open Menu"}
              className={isOpen ? " open" : ""}
            >
              <motion.span
                className="bar"
                variants={barOneVariants}
              ></motion.span>
              <motion.span
                className="bar"
                variants={barTwoVariants}
              ></motion.span>
              <motion.span
                className="bar"
                variants={barThreeVariants}
              ></motion.span>
            </HamburgerStyles>
          )}

          <Title />
          {!withoutContact && <ContactLink language={language} />}
          {withoutContact && <div className="contact"></div>}

          {!withoutLanguage && (
            <ChooseLanguage
              isOpen={langNavIsOpen}
              toggle={toggleLangNav}
              language={language}
              languages={languages}
              originalPath={originalPath}
            />
          )}

          {(title || logo) && (
            <LogoStyles>
              {withoutHamburger && (
                <>
                  <img src={logo} alt="logo" />
                  {title}
                </>
              )}
              {!withoutHamburger && (
                <Link to="/" language={language}>
                  <img src={logo} alt="logo" />
                  {title}
                </Link>
              )}
            </LogoStyles>
          )}
        </div>
      </div>
      <motion.div
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        variants={menuList}
        transition={{ type: "ease", stiffness: 50, velocity: 50 }}
        className="menu"
      >
        <NavTopLevel>
          {menuItems.map((item, index) => (
            <li key={`nt-${index}`}>
              <Link
                onClick={toggleNav}
                onKeyDown={toggleNav}
                to={item.path}
                language={language}
                activeClassName="menu__item--active"
              >
                {/* i18next-extract-disable-next-line */}
                <Trans>{item.text}</Trans>
                <span>.</span>
              </Link>
            </li>
          ))}
          {featuredProduct && featuredProduct.length > 0 && (
            <li
              className={subNavIsOpen ? "open" : "closed"}
              key="products-menu"
            >
              <button
                type="button"
                onClick={toggleSubNav}
                onKeyDown={toggleSubNav}
              >
                <Trans>Products</Trans>
                <span>.</span>
                <Chevron />
              </button>

              <SubNavStyles
                initial="closed"
                animate={subNavIsOpen ? "open" : "closed"}
                variants={subMenuNavVariants}
              >
                <li key="products">
                  <Link
                    onClick={toggleNav}
                    onKeyDown={toggleNav}
                    to="/products"
                    language={language}
                  >
                    <Trans>All Products</Trans>
                    <span>.</span>
                  </Link>
                </li>
                <hr />
                {featuredProduct.map((item, index) => {
                  const { gatsbyPath, title } = item
                  return (
                    <li key={`p-${index}`}>
                      <Link
                        onClick={toggleNav}
                        onKeyDown={toggleNav}
                        to={gatsbyPath}
                        language={language}
                      >
                        {title}
                        <span>.</span>
                      </Link>
                    </li>
                  )
                })}
              </SubNavStyles>
            </li>
          )}
        </NavTopLevel>
      </motion.div>
    </NavStyles>
  )
}

export default Nav
