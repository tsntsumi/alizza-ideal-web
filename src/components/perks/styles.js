import styled from "styled-components"

export const PerksStyles = styled.section`
  background-color: #000;
  position: relative;
  min-width: 98%;

  .container {
    display: flex;
    width: auto;
    margin-right: 0;
    margin-left: 0;
  }

  .perks__divider {
    font-size: 20px;
    color: var(--primary);
    z-index: 2;

    @media (min-width: 1024px) {
      font-size: 35px;
    }
  }

  h2 {
    border-bottom: 2px solid rgba(255, 255, 255, 0.15);
    color: var(--primary);
    z-index: 2;
    margin-right: 0;
    margin-left: 0;
  }

  @media (max-width: 800px) {
    .container {
      display: block;
      width: 100%;
    }
  }
`

export const PerkStyles = styled.aside`
  max-width: 98%;
  min-width: 150px;
  text-align: start;
  flex: 1;
  z-index: 2;
  margin-right: 0.5em !important;
  margin-left: 0.5em !important;

  @media (max-width: 800px) {
    display: flex;
    width: 98%;
    min-width: 96%;
    margin: inherit 0 !important;
    padding: inherit 0 !important;
    .gatsby-image-wrapper {
      float: left;
      width: 46%;
    }
    h3 {
      width: 54%;
      text-align: start;
      margin: 0 0 0.4em 0.4em !important;
      padding: 0 1em;
    }
  }

  @media (max-width: 800px) {
    display: flex;
    width: 98%;
    .gatsby-image-wrapper {
      float: left;
      width: 46%;
    }
    h3 {
      width: 50%;
      text-align: center;
    }
  }

  h3 {
    border-bottom: 2px solid rgba(255, 255, 255, 0.15);
    font-size: var(--h5);
  }

  p {
    margin-bottom: 0;
    text-align: justify;
  }

  .gatsby-image-wrapper {
    align-items: center;
    justify-content: center;
    margin: 0 4px calc(var(--gap) / 2) 4px;

    img {
      width: 100%;
      height: 100%;
      object-fit: contain !important;
      object-position: center;
    }
  }

  .photoCredit {
    font-size: 0.6em;
  }
`
