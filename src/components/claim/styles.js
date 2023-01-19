import styled from "styled-components"

export const ClaimStyles = styled.section`
  background-color: white;
  --sectionMargin: 40px;
  color: var(--key-dark-color);

  .section,
  .section__padding {
    margin: 0;
  }

  .container {
    width: 100%;
    display: block;
    margin: 0 inherit;
    padding-left: var(--borderSpacing);
    padding-right: var(--borderSpacing);
  }

  h2 {
    border-bottom: 2px solid rgba(255, 255, 255, 0.15);
    margin: 0 auto 1em auto;
    padding: 0.3em 0.1em;
    border-radius: 0.25em;
    text-align: center;
    font-size: 1.4em;
    font-weight: 800;
    white-space: wrap;
    color: white;
    background-color: var(--key-dark-color);
  }

  h3 {
    text-indent: 0;
    font-size: 1.2em;
    font-weight: 800;
    color: var(--key-dark-color);
    padding: 0;
    text-align: justify;
  }

  p {
    text-indent: 1em;
    text-align: justify;
    padding: 0;
  }

  ul {
    margin: 1em 0em;
  }

  li {
    margin-left: 3em;
    padding-right: 1.5em;
  }

  .profile {
    border-top: 2px solid rgba(255, 255, 255, 0.15);
    margin-top: 0.8em;
    clear: both;
  }

  .profile p {
    text-align: right;
    margin: 0;
  }

  .container .image {
    padding: 1em;
    margin-bottom: 1em;
    .gatsby-image-wrapper {
      width: 100%;
      max-width: 380px;
      margin: 0.5em 0em;
    }
  }

  .gatsby-image-wrapper {
    float: ${({ float }) => float || "left"};
    align-items: center;
    justify-content: center;
    width: 25%;
    overflow: hidden;
    padding: 0;
    margin: 0 ${({ float }) => (float === "right" ? 0 : "1em")} 0.4em
      ${({ float }) => (float === "left" ? 0 : "1em")};
    @media (max-width: 390px) {
      width: 50%;
    }
    @media (min-width: 390px) {
      width: 30%;
    }
  }

  .container .float-right {
    margin: 0em;
    padding: 0em;
    .gatsby-image-wrapper {
      float: right;
      width: 45%;
      max-width: 150px;
      margin: 0em 0em 0.4em 1em;
      padding: 0em;
    }
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: contain !important;
    object-position: center;
  }
`
