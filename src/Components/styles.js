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
  padding: 0.75rem;
  border: 2px solid var(--white);
  color: var(--white);
  cursor: pointer;
  font-family: inherit;
  text-transform: uppercase;
  font-size: 1rem;
  background: transparent;
  border-radius: var(--b-radius);
  transition: 0.1s linear;

  @media (prefers-reduced-motion) {
    transition: none; 
  }

  &:hover {
    color: var(--red);
  }
`

export const ButtonColored = styled(Button)`
  background: var(--red);
  border: 0;

  &:hover {
    color: #fff;
  }
`