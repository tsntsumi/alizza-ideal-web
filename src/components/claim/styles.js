import styled from "styled-components"

export const ClaimStyles = styled.section`
  background-color: var(--key-color);
  --sectionMargin: 40px;

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
    text-align: center;
    font-size: var(--h4);
    font-weight: 800;
    white-space: wrap;
    color: white;
  }

  h3 {
    text-indent: 0;
    font-size: var(--h6);
    font-weight: 600;
    color: white;
    padding: 0;
    text-align: justify;
  }

  p {
    text-indent: 1em;
    text-align: justify;
    padding: 0;
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

  ol,
  ul,
  blockquote {
    margin: 1rem auto 1rem 2rem;
  }
  li {
    margin: 0 auto 0 auto;
    color: var(--bodyColor);
  }

  .container .image {
    .gatsby-image-wrapper {
      width: 60%;
    }
  }

  .gatsby-image-wrapper {
    float: ${({ float }) => float || "left"};
    align-items: center;
    justify-content: center;
    width: 25%;
    overflow: hidden;
    margin: 0 ${({ float }) => (float === "right" ? 0 : "1.5rem")} 0.4em
      ${({ float }) => (float === "left" ? 0 : "1.5rem")};
    @media (max-width: 390px) {
      width: 50%;
    }
    @media (min-width: 390px) {
      width: 30%;
    }
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: contain !important;
    object-position: center;
  }
`
