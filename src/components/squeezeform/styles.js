import styled from "styled-components"

export const FormStyles = styled.section`
  margin: 0;
  padding: var(--p) 0;
  text-align: justify;

  button {
    text-align: center;
    width: 100%;
    border-radius: 1em;
    margin: 1em 0;
    height: 4em;
    align-self: center;
    border: 1pt solid var(--primary);
    background-color: var(--key-dark-color);
    color: var(--primary);
    &:focus {
      outline: 4px solid var(--primary);
      outline-offset: 2px;
    }
  }

  .success {
    color: lightGreen;
    padding: 1em 0;
  }
  .error {
    color: red;
    padding: 1em 0;
  }
`

export const FieldStyles = styled.div`
  flex-wrap: wrap;
  padding: 0;
  margin: 0.5em 0;
  width: 100%;
  text-align: left;

  &:focus {
    outline: 4px solid var(--primary);
    outline-offset: 2px;
  }
  input {
    border: 1pt solid pink;
    border-radius: 1em;
    padding: var(--p) 0.5em;
    margin: 0;
    width: 100%;
  }
  .feedback {
    color: red;
    padding: 1em 0;
  }
`

export default FormStyles
