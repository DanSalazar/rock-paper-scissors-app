import styled, { keyframes } from 'styled-components'

export const show = keyframes`
  0% {
    opacity: 0;
    }

  100% {
    opacity: 1;
  }
`

export const Modal = styled.div`
  background: rgba(0, 0, 0, 0.75);
  position: fixed;
  backdrop-filter: blur(1.25px);
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  animation: ${show} 50ms ease;

  @media (prefers-reduced-motion) {
    animation: none;
    backdrop-filter: blur(0px); 
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

  @media (prefers-reduced-motion) {
    transition: none; 
  }

  &:hover {
    color: var(--red);
  }
`
