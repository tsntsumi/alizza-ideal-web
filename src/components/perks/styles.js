import styled from "styled-components"

export const PerksStyles = styled.section`
  background-color: var(--key-dark-color);

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
    margin-bottom: 1em;
    margin-top: 0;
    text-align: center;
    font-size: var(--h5);
    font-weight: 800;
    white-space: nowrap;
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
  width: 100%;
  display: flex;
  background-color: rgb(224, 235, 235);

  color: white;
  font-size: 10px;
  text-align: justify;

  h3 {
    border-bottom: 2px solid rgba(255, 255, 255, 0.15);
    font-size: 1.2em;
    font-weight: 800;
    width: 30%;
    padding: 0 0.4px;
  }

  .perk {
    width: 40%;
    padding: 0 0.4px;
  }

  .gatsby-image-wrapper {
    align-items: center;
    justify-content: center;
    margin: 0 0.4em 0.4em 0;
    width: 30%;

    img {
      width: 100%;
      height: 100%;
      object-fit: contain !important;
      object-position: center;
    }
  }

  .photoCredit {
    font-size: 0.6em;
    margin: 0.4em;
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
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
`
