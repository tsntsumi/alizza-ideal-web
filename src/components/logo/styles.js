import styled from "styled-components"

export const LogoImageStyles = styled.div`
  background-color: transparent;
  border: 0;
  padding: 0;
  margin-top: 0.8em;
  transition: color 0.3s ease;

  &:hover {
    cursor: pointer;
    border: 1px solid darkred;
  }

  img {
    width: 144px;
  }

  @media (max-width: 600px) {
    img {
      width: 128px;
    }
  }
  @media (max-width: 400px) {
    img {
      width: 98px;
    }
  }
`
export default LogoImageStyles
