import styled, { keyframes } from 'styled-components'

export const show = keyframes`
  0% {
    opacity: 0;
    }

  100% {
    opacity: 1;
  }
`

export const Button = styled.button`
  padding: 0.75em 0;
  width: 100px;
  border: 2px solid var(--white);
  color: #fff;
  cursor: pointer;
  font-family: 'Barlow Semi Condensed', sans-serif;
  text-transform: uppercase;
  font-size: 1em;
  background: transparent;
  outline: none;
  border-radius: var(--b-radius);
  transition: 0.1s linear;
  margin: 0 6px;

  &:hover {
      color: var(--red);;
  }
`
