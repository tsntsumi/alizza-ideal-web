import styled from "styled-components"

export const PerksStyles = styled.section`
  background-color: white;
  color: var(--key-dark-color);
  --sectionMargin: 40px;

  .section,
  .section__padding {
    margin: 0;
  }

  .container {
    width: 100%;
    display: block;
    flex-flow: row wrap;
    margin: 0 inherit;
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
    padding: 0.3em 0.1em;
    border-radius: 0.25em;
    text-align: center;
    font-size: 1.4em;
    font-weight: 800;
    color: white;
    background-color: var(--key-dark-color);
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
  width: 25%;
  min-width: 200px;
  display: flex;
  padding: 0.2em 0.5em;
  background-color: white;
  color: var(--key-color);
  text-align: justify;

  h3 {
    border-top: 2px solid var(--key-color);
    border-bottom: 1px solid var(--key-color);
    font-weight: 700;
    width: 100%;
    padding: 0 0.2em;
  }

  p {
    width: 100%;
    font-size: var(--p);
    padding: 0 0.4em;
    color: var(--key-color);
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
