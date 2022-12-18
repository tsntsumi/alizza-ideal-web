import styled from "styled-components"

export const FormStyles = styled.section`
  margin: 0 2em;
  padding: var(--p) var(--borderSpacing);
  text-align: justify;
  border-color: transparent;

  .success {
    color: var(--key-color);
    padding: 1em 0;
  }
  .error {
    color: red;
    padding: 1em 0;
  }
`

export const FieldStyles = styled.div`
  flex-wrap: wrap;
  text-align: left;

  &:focus {
    outline: 4px solid var(--primary);
    outline-offset: 2px;
  }

  input,
  textarea {
    border: 3pt solid var(--key-dark-color);
    border-radius: 1em;
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
  }

  .feedback {
    color: red;
    padding: 1em 0;
  }
`

export default FormStyles
