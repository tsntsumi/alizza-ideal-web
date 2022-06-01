import styled from "styled-components"

export const BannerStyles = styled.section`
  position: relative;
  height: 100%;
  top: 0;
  margin: 0;
  padding: 0 var(--borderSpacing);
  font-size: 10pt;

  @media (min-width: 310px) {
    font-size: 12pt;
  }

  .container {
    display: flex;
    align-items: flex-end;
    justify-content: flex-start;
    min-height: calc(100vh - var(--header-height) * 1.25);
    overflow-y: scroll;
    padding-bottom: 1em;
  }

  .gradient,
  .banner__image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
  }

  .banner__image--content {
    object-position: center;
  }

  .gradient {
    background: radial-gradient(
      at bottom left,
      rgba(255, 255, 255, 0.6),
      rgba(255, 255, 255, 0)
    );
  }

  .banner__content {
    position: relative;
    z-index: 2;
    min-height: 33vh;
    width: 100%;
    max-width: 80vw;
    text-align: justify;
    margin-top: 1rem;
    padding-top: calc(var(--header-height));

    @media (min-width: 768px) {
      width: 66vw;
    }

    h1 {
      border-bottom: 2px solid rgba(255, 255, 255, 0.15);
      display: inline-block;
      font-size: 1.4em;
      padding: 10px;
      border-radius: 20px;
      width: 100%;
    }

    h1,
    h2,
    h3 {
      background-color: var(--key-color);
      padding: 0.5em 1em;
      border-radius: 0.75em;
      color: rgb(10, 10, 10);
      font-weight: 500;
    }

    .description {
      display: inline-block;
      background-color: var(--key-light-color);
      padding: 1em;
      border-radius: 1em;
      width: 100%;
      color: black;
    }

    h2 {
      font-size: 1.2em;
    }

    h3 {
      font-size: 1.1em;
    }

    h1,
    .price {
      margin-top: 0;
      padding: 1em;
    }

    p {
      font-weight: 400;
    }

    p em {
      font-size: 1.4em;
      font-weight: 700;
    }
  }

  .banner__btns {
    display: flex;
    gap: var(--gap);
  }
`
