import styled from "styled-components"

export const ClaimStyles = styled.section`
  position: relative;
  text-align: justify;
  color: darkGreen;

  h2 {
    text-align: center;
    font-size: var(--h5);
    font-weight: 800;
    color: white;
  }

  h3 {
    text-indent: 0;
    font-size: var(--h6);
    font-weight: 600;
    color: white;
  }

  p {
    text-indent: 1rem;
    text-align: justify;
  }

  .clients_profile p {
    text-align: right;
    margin: 0;
  }

  ol,
  ul,
  blockquote {
    margin: 1rem auto 1rem 2rem;
  }
  li {
    margin: 0.5rem auto 0.5rem auto;
    color: var(--bodyColor);
  }

  .gatsby-image-wrapper {
    float: ${({ float }) => float || "left"};
    align-items: center;
    justify-content: center;
    width: 25%;
    margin-bottom: 1.5rem;
    margin-left: ${({ float }) => (float === "left" ? 0 : "3rem")};
    margin-right: ${({ float }) => (float === "right" ? 0 : "3rem")};
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: contain !important;
    object-position: center;
  }
`
