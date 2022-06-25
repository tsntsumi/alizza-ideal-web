import styled from "styled-components"

export const FormStyles = styled.section`
  margin: 0;
  padding: var(--p) 0;
  text-align: justify;

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

  input,
  textarea {
    border: 1pt solid var(--key-dark-color);
    outline: 2px solid var(--key-dark-color);
    border-radius: 1em;
    width: 100%;
    font-size: var(--p);
    font-weight: 700;
    font-family: "Heebo", sans-serif;
    padding: var(--p) 0.5em;
    margin: 0;
  }

  .feedback {
    color: red;
    padding: 1em 0;
  }
`

export default FormStyles
