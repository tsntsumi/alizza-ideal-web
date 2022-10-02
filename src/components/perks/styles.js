import styled from "styled-components"

export const PerksStyles = styled.section`
  background-color: var(--key-dark-color);
  --sectionMargin: 40px;

  .section,
  .section__padding {
    margin: 0;
  }

  .container {
    width: 100%;
    display: block;
    margin-top: 0;
    margin-botom: 0;
    padding-left: var(--borderSpacing);
    padding-right: var(--borderSpacing);
  }

  .perks__divider {
    font-size: 20px;
    color: var(--primary);

    @media (min-width: 1024px) {
      font-size: 35px;
    }
  }

  h2 {
    border-bottom: 2px solid rgba(255, 255, 255, 0.15);
    margin: 0 auto 1em auto;
    text-align: center;
    font-size: 1.4em;
    font-weight: 800;
    color: white;
  }

  @media (min-width: 400px) {
    .perks.container {
      display: flex;
      justify-content: space-between;
    }
  }
`

export const PerkStyles = styled.aside`
  position: relative;
  width: 100%;
  display: flex;
  background-color: var(--key-color);
  padding: 0.2em 0.5em;
  color: white;
  font-size: 10px;
  text-align: justify;

  h3 {
    border-bottom: 2px solid rgba(255, 255, 255, 0.15);
    font-size: 1.2em;
    font-weight: 800;
    width: 100%;
    padding: 0 0.2em;
  }

  p {
    width: 100%;
    padding: 0 0.4em;
  }

  .image {
    width: 30%;
    padding: 0 0.4px;
    position: relative;
    @media (min-width: 400px) {
      width: 90%;
      margin: 0;
      padding: 0;
    }
  }

  .container {
    width: 70%;
    padding: 0 0.4px;
    @media (min-width: 400px) {
      width: 100%;
      margin: 0;
      padding: 0;
    }
  }

  .gatsby-image-wrapper {
    align-items: center;
    justify-content: center;
    margin: 0 0.4em 0.4em 0;

    img {
      width: 100%;
      height: 100%;
      object-fit: contain !important;
      object-position: center;
    }
  }

  .photoCredit {
    position: absolute;
    bottom: 0;
    right: 0;
    z-index: 10;
    color: blue;
    background-color: lightgrey;
    font-size: 0.4em;
    padding: 0 0.6em 0.2em 0;
    margin: 0 0 0.2em 0;
    min-width: 6em;
  }

  @media (min-width: 400px) {
    background-color: var(--key-color);
    display: block;
    width: 30%;

    h3 {
      width: 100%;
      padding: 0 1em;
    }
    .perk {
      width: 100%;
      padding: 0 1em 0.2em 1em;
    }
    .gatsby-image-wrapper {
      width: 100%;
      margin: 0.5em;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
`
