import styled, { keyframes } from 'styled-components'

export const spinAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`

export const fade = keyframes`
  0% {
    opacity: 0;
    }

  100% {
    opacity: 1;
  }
`

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  @media (prefers-reduced-motion) {
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

  :disabled {
    opacity: 0.1;
  }
`

export const ButtonColored = styled(Button)`
  background-color: var(--blue);
  border: 0;

  &:hover {
    color: #fff;
  }
`

export const Fallback = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`

export const Spin = styled.div`
  border: 4px solid rgba(255, 255, 255, 0.1);
  border-left-color: var(--blue);
  border-radius: 50%;
  width: 36px;
  height: 36px;
  animation: ${spinAnimation} 1s linear infinite;
`
