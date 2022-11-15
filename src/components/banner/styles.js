import styled from "styled-components"

export const BannerStyles = styled.section`
  position: relative;
  height: 100%;
  top: 0;
  margin: 0;
  padding: 0;
  font-size: var(--p);
  font-weight: 600;

  .container {
    display: flex;
    align-items: flex-end;
    justify-content: flex-start;
    min-height: calc(100vh - var(--header-height) * 1.25);
    overflow-y: scroll;
    margin-bottom: 0;
    background-color: var(--key-light-color);
    padding: 0 var(--borderSpacing);
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
    padding-top: calc(var(--header-height));
    margin-bottom: 1.5em;

    p {
      padding-left: 1em;
      padding-right: 1em;
    }

    @media (min-width: 768px) {
      width: 66vw;
    }
  }

  h1 {
    border-bottom: 2px solid rgba(255, 255, 255, 0.15);
    background-color: var(--key-dark-color);
    display: inline-block;
    font-size: var(--h1);
    padding: 10px;
    border-radius: 20px 20px 0 0;
    width: 100%;
  }

  h1,
  h2,
  h3 {
    padding: 0.5em 1em;
    border-radius: 0.75em 0.75em 0 0;
    color: white;
    font-weight: 400;
  }

  h2 {
    border-radius: 0.5em;
  }

  .description {
    display: inline-block;
    background-color: var(--background);
    padding: 0.25em 1em 1em 1em;
    border-radius: 0 0 1em 1em;
    width: 100%;
    color: white;

    li {
      margin-left: 3em;
      padding-right: 1.5em;
    }

    h2 {
      font-size: 1.2em;
    }

    h3 {
      font-size: 1.1em;
    }

    h1 .price {
      margin-top: 0;
      padding: 1em;
    }

    p {
      font-weight: 300;
    }

    p em {
      font-size: 1.4em;
      font-weight: 400;
    }
  }

  .banner__btns {
    display: flex;
    gap: var(--gap);
  }
`
