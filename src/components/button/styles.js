import styled from "styled-components"

export const ButtonStyles = styled.div`
  height: 3rem;
  padding: 1.5rem;
  display: inline-flex;
  position: relative;
  overflow: hidden;
  align-items: center;
  color: white;
  background-color: var(--key-color);
  font-family: sans-serif;
  font-size: var(--p);
  border: 4px solid var(--key-dark-color);
  border-style: solid double;
  border-radius: var(--p);
  margin-top: 1rem; /* 16px */

  .btn {
    width: 100%;
  }

  .disabled {
    opacity: 0.5;
  }

  a:link {
    text-decoration: none;
  }

  span {
    background-color: transparent;
    position: relative;
    z-index: 10;
  }

  &:before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0px;
    left: 100%;
    transition: left 0.25s;
    transition-timing-function: cubic-bezier(1, 2.13, 1, -0.1);
    z-index: 1;
  }

  .icon-right {
    margin-left: 0.75rem;
  }

  .icon-left {
    margin-right: 0.75rem;
  }

  &:focus,
  &:hover {
    border: 4px solid var(--key-light-color);
    border-style: solid single;
  }

  .btn-primary {
    color: white;
    margin-top: 1rem; /* 16px */
    margin-bottom: 1rem; /* 16px */
  }

  @media (hover: hover) {
    &:hover {
      cursor: pointer;
      color: var(--primary);

      &:after {
        left: 100%;
      }
    }
  }
`
