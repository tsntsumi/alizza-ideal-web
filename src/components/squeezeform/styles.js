import styled from "styled-components"

export const FormStyles = styled.section`
  margin: 0 2em;
  padding: var(--p) var(--borderSpacing);
  text-align: justify;
  border-color: transparent;
  font-size: 10pt;

  .success {
    color: var(--key-color);
    padding: 1em var(--p);
  }
  .error {
    color: red;
    padding: 1em var(--p);
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

export default FormStyles
