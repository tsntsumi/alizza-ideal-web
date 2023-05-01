import styled from "styled-components"

export const LandingPageStyles = styled.section`
  color: black;

  #video-container {
    position: relative;
    width: 100%;
    padding: 56.25% 0 0 0;
    margin: 0;
    img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  }

  #youtube-video {
    position: absolute;
    display: none;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
  }

  .trial-offer {
    padding: 0.75em;
    background-color: #3e88bf;
    color: white;
    @media (min-width: 800px) {
      font-size: 2em;
    }
  }

  .zero-yen {
    font-weight: 900;
    color: yellow;
  }
  .zero {
    font-size: 1.5em;
  }
  .limited {
    font-size: 1.2em;
  }

  .applicate-button {
    background-color: orange;
    border: 4px solid orange;
    border-radius: 1.2em;
    font-size: 0.8em;
    font-weight: bold;
    padding: 0.4em;
    cursor: pointer;
    .zero-yen {
      color: darkred;
    }
    &:hover {
      background: white;
      color: orange;
      border: 4px solid orange;
    }
  }

  .button-34,
  .button-34-green {
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

  .button-34-green {
    background: #06c755;
    box-shadow: lime 0 10px 20px -10px;
  }

  text-align: justify;
  align-items: flex-start;
  color: darkgrey;
  background-color: white;
  margin: 0;
  padding: 0;
  font-size: 11pt;
  height: 100%;
  min-height: 100%;
  @media (min-width: 1000px) {
    margin: 0 200px 0 200px;
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
    padding: 1em 1.3em;
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
  .container {
    color: black;
    margin: 1.2em auto;
    ul,
    ol {
      margin: 1em 0.4em;
    }
    .zero {
      color: darkred;
      font-weight: 800;
    }
  }
  .status {
    color: red;
    font-weight: bold;
    margin: 0;
    padding: 0;
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
  }
  .button-34 {
    margin: 0.74em 0;
    background: darkorange;
    border-radius: 999px;
    box-shadow: orange 0 10px 20px -10px;
    box-sizing: border-box;
    color: #ffffff;
    cursor: pointer;
    font-family: Inter, Helvetica, "Apple Color Emoji", "Segoe UI Emoji",
      NotoColorEmoji, "Noto Color Emoji", "Segoe UI Symbol", "Android Emoji",
      EmojiSymbols, -apple-system, system-ui, "Segoe UI", Roboto,
      "Helvetica Neue", "Noto Sans", sans-serif;
    font-size: 16px;
    @media (max-width: 480px) {
      font-size: 14px;
    }
    @media (max-width: 440px) {
      font-size: 12px;
    }
    @media (max-width: 380px) {
      font-size: 10px;
    }
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
  input#email,
  input#text {
    width: 100%;
    border: 3px solid darkblue;
    border-radius: 1em;
    background-color: white;
    padding: 0.2em;
    outline: none;
    ::placeholder {
      color: darkgrey;
    }
  }

  form {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
  }

  label {
    display: flex;
    cursor: pointer;
    font-weight: 500;
    position: relative;
    overflow: hidden;
    margin-bottom: 0.375em;
    padding: 0;
    /* &:focus-within {
  outline: 0.125em solid #1e426d;
  } */
    input {
      position: absolute;
      left: -9999px;
      &:checked + span {
        background-color: rgba(127, 127, 127, 0.84);
        &:before {
          box-shadow: inset 0 0 0 0.4375em #1e426d;
        }
      }
    }
    span {
      display: flex;
      align-items: center;
      padding: 0.1em 0.75em 0.1em 0.375em /* 0.375em 0.75em 0.375em 0.375em */;
      border-radius: 99em; // or something higher...
      transition: 0.25s ease;
      &:hover {
        background-color: rgba(127, 127, 127, 0.84);
      }
      &:before {
        display: flex;
        flex-shrink: 0;
        content: "";
        background-color: #fff;
        width: 1.5em;
        height: 1.5em;
        border-radius: 50%;
        margin-right: 0.375em;
        transition: 0.25s ease;
        box-shadow: inset 0 0 0 0.125em #1e426d;
      }
    }
  }
`

export default LandingPageStyles
