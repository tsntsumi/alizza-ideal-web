import styled from "styled-components"

export const FormStyles = styled.section`
  display: flex;
  flex-direction: column;
  text-align: justify;
  color: darkgrey;
  background-color: white;
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100vh;
  font-size: 11pt;
  @media (min-width: 1000px) {
    margin: 0 200px 0 200px;
  }
  .button-34 {
    background: #5e5df0;
    border-radius: 999px;
    box-shadow: #5e5df0 0 10px 20px -10px;
    box-sizing: border-box;
    color: #ffffff;
    cursor: pointer;
    font-family: Inter, Helvetica, "Apple Color Emoji", "Segoe UI Emoji",
      NotoColorEmoji, "Noto Color Emoji", "Segoe UI Symbol", "Android Emoji",
      EmojiSymbols, -apple-system, system-ui, "Segoe UI", Roboto,
      "Helvetica Neue", "Noto Sans", sans-serif;
    font-size: 16px;
    font-weight: 700;
    line-height: 24px;
    opacity: 1;
    outline: 0 solid transparent;
    padding: 8px 18px;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    width: fit-content;
    word-break: break-word;
    border: 0;
  }
  .banner-image {
    width: 100%;
    padding: 0;
    margin: 0;
    border: none;
  }
  h1,
  h2,
  h3 {
    padding: 0.3em;
    margin: 0;
    color: white;
    font-size: 1.2em;
    text-align: center;
  }
  h1,
  h2 {
    background-color: #1e426d;
  }
  h2,
  h3 {
    padding: 1em 0.3em;
  }
  h3 {
    background-color: #4797c7;
  }
  @media (min-width: 450px) {
    h1,
    h2,
    h3 {
      font-size: 1.8em;
    }
  }
  #offer-banner {
    padding: 0;
    margin: 0.7em 0 0 0;
  }
  .iframe-wrapper {
    flex: 2;
    padding: 0;
    margin: 0;
  }
  .iframe-wrapper > iframe {
    flex: 1 1;
    height: 100%;
  }
  .container {
    color: black;
    margin: 0;
    padding: 0;
    height: 100%;
    ul,
    ol {
      margin: 1em 0.4em;
    }
    .zero {
      color: darkred;
      font-weight: 800;
    }
  }
  .note {
    color: blue;
    font-size: 0.8em;
  }
  .lp-content {
    height: auto;
    padding: 0;
    margin: 0;
  }
  .squeeze-form {
    clear: both;
    padding: 0;
    width: 100%;
    font-size: 1.6em;
    font-weight: 900;
    & section {
      box-shadow: 0 0 5px 5px rgba(0, 0, 0, 0.1);
    }
    p {
      font-size: 10pt;
      padding: 0;
      margin: 0;
    }
    input#email {
      border: 3px solid darkblue;
      background-color: white;
      outline: none;
    }
    button {
      background-color: darkorange;
      font-size: 11pt;
      font-weight: 800;
      border-radius: var(--p);
    }
  }
`

export const FieldStyles = styled.div`
  flex-wrap: wrap;
  text-align: left;

  &:focus {
    outline: var(--focus-ring-width) solid var(--key-light-color);
    outline-offset: var(--focus-ring-offset);
  }

  input,
  textarea {
    border: 3px solid var(--key-dark-color);
    border-radius: var(--p);
    width: 100%;
    font-size: var(--p);
    font-weight: 300;
    font-family: "Heebo", sans-serif;
    padding: var(--p) 0.5em;
    margin: 0.5em 0;
    background-color: var(--key-white-color);
    color: var(--key-dark-color);
    &::placeholder {
      color: gray;
    }
  }

  button,
  .btn {
    font-weight: 800;
    font-size: 1.4em;
    color: darkgreen;
    padding: var(--p) 0.5em;
    margin: 0.5em 0;
    border-radius: var(--p);
  }

  .feedback {
    color: red;
    padding: 0.5em var(--p);
    font-size: 9pt;
  }
`

export const Credits = styled.div`
  font-size: 6px;
  color: grey;
  padding: 0.3em;
`

export default FormStyles
