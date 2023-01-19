import React from "react"
import styled from "styled-components"

export const ButtonStyles = styled.div`
  height: 3rem;
  display: inline-flex;
  position: relative;
  overflow: hidden;
  margin-top: 1rem; /* 16px */
  padding: 0;
  border-radius: var(--p);
  width: 100%;

  .btn {
    padding: 1em;
    white-space: nowrap;
    width: 100%;
    margin: 0;
    padding: 0;
    overflow: hidden;
    background-color: ${props => props.bgColor || "var(--key-color)"};
    border: thick solid ${props => props.bdColor || "var(--key-dark-color)"};
    border-radius: var(--p);
    align-items: center;
    virtical-align: middle;
    font-family: sans-serif;
    font-size: var(--p);
    font-weight: 400;
    color: ${props => props.color || "white"};
    span {
      display: inline-block;
      position: relative;
      virtical-align: middle;
      margin: 0 0.5em;
    }
  }

  .btn-primary {
    color: white;
    border: 0;
    outline-color: ${props => props.bdColor};
    outline-width: 3px;
    outline-offset: 4px;
    border-radius: var(--p);
  }

  .disabled {
    opacity: 0.5;
    background-color: darkgray;
    color: lightgray;
  }

  a:link {
    text-decoration: none;
  }

  .icon-right {
    margin-left: 0.75rem;
  }

  .icon-left {
    margin-right: 0.75rem;
  }

  &:focus,
  &:hover {
    outline: var(--focus-ring-width) solid var(--key-light-color);
    outline-offset: var(--focus-ring-offset);
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
