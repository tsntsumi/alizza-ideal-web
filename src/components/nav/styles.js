import styled from "styled-components"
import { motion } from "framer-motion"

export const NavStyles = styled.nav`
  .nav {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    max-width: 100vw;
    min-width: 100vw;
    z-index: 100;
    margin: 0;
    padding: 0 var(--borderSpacing) 0 var(--borderSpacing);
    background-color: var(--key-color);
    font-size: 10pt;

    @media (min-width: 1024px) {
      padding-top: 50px;
    }

    @media (min-width: 1440px) {
      padding-top: 70px;
    }
  }

  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;
    min-height: 100%;
    max-height: 100%;
    margin: 0;
    padding: 0;
  }

  .menu {
    background-color: #000;
    width: var(--menuWidth);
    transform: translateX(calc(var(--menuWidth) * -1));
    height: 100%;
    top: 0;
    bottom: 0;
    left: 0;
    position: fixed;
    z-index: 99;
    padding: 30px var(--borderSpacing);
    display: flex;
    align-items: center;
  }

  .lang {
    display: inline-block;
    margin: 0 1em 0 1em;
    vertical-align: middle;
    z-index: 99;
  }

  .lang li {
    font-size: var(--p);
    button {
      color: var(--primary);
      font-size: var(--p);
    }
  }

  .contact {
    display: inline-block;
    margin: 0 1em 0 auto;
    vertical-align: middle;
    z-index: 99;
  }
`

export const NavTopLevel = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;

  > li,
  > li > button {
    text-transform: capitalize;
    font-size: var(--h2);
    font-weight: 700;
    cursor: pointer;
    transition: color 0.3s ease;

    a {
      text-decoration: none;
      color: #fff;
    }

    span {
      color: var(--primary);
    }

    &:hover {
      color: var(--primary);
      > a {
        color: var(--primary);
      }
    }
  }

  > li {
    &.open {
      > button > svg {
        transform: rotate(180deg);
      }
    }
  }

  > li > button {
    background-color: transparent;
    padding: 0;
    color: #fff;
    border: none;
    font-family: "Heebo", sans-serif;
    display: flex;
    align-items: center;
  }

  > li > button > svg {
    font-size: 22px;
    margin-left: 6px;
    color: var(--primary);
    transition: transform 0.3s ease;

    @media (min-width: 768px) {
      font-size: 26px;
    }

    @media (min-width: 1024px) {
      font-size: 30px;
    }
  }
`

export const SubNavStyles = styled(motion.ul)`
  padding-left: calc(var(--gap) / 2);
  list-style: none;
  margin: 0;

  > li {
    font-size: var(--h4);
    font-weight: 700;

    &:hover {
      > a {
        color: var(--primary);
      }
    }
  }

  @media (min-width: 1024px) {
    padding-left: var(--gap);
  }

  hr {
    margin-top: 10px;
    margin-bottom: 10px;
  }
`

export const HamburgerStyles = styled(motion.button)`
  background-color: transparent;
  border: none;
  width: 30px;
  height: 30px;
  padding: 0;
  cursor: pointer;
  outline: none;

  &:focus {
    border: none;
    outline: none;
  }

  .bar {
    display: block;
    background-color: #fff;
    height: 2px;
    border-radius: 2px;

    &:nth-of-type(2) {
      margin-top: 8px;
      margin-bottom: 8px;
    }
  }
`

export const LogoStyles = styled.div`
  font-weight: 700;
  font-size: 20px;
  text-align: center;
  align-items: center;
  letter-spacing: -0.5px;
  margin: 0;
  padding: 0;

  img {
    display: block;
    margin: 0 auto -20% auto;
  }

  a {
    color: #fff;
    text-decoration: none;
    transition: color 0.3s ease;
  }

  @media (min-width: 1024px) {
    font-size: 25px;
  }

  span {
    color: var(--primary);
  }

  &:hover,
  &:focus {
    a {
      color: var(--primary);
    }
  }
`
