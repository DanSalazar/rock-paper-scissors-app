import styled from 'styled-components'
import { fade } from '../styles'

export const RoomSection = styled.form`
  width: 90%;
  display: flex;
  flex-direction: column;
  padding-top: 2.5rem;
  gap: 0.5rem;
  height: 80%;
  animation: ${fade} var(--transition-mode);

  @media (prefers-reduced-motion) {
    animation: none;
  }

  @media screen and (min-width: 768px) {
    width: 300px;
  }

  @media (prefers-reduced-motion) {
    animation: none;
  }
`

export const Label = styled.label`
  color: var(--white);
  font-weight: 600;
  text-align: start;
`

export const ButtonsWrapper = styled.div`
  margin-top: 10px;
  display: flex;
  align-items: center;
  justify-content: center;

  button {
    margin: 0 0.5rem;
  }
`

export const InputController = styled.input`
  background: transparent;
  border-radius: var(--b-radius);
  border: 2px solid var(--white);
  color: #fff;
  outline: 0;
  margin: 6px 0;
  padding: 12px;
  transition: 0.2s ease;

  @media (prefers-reduced-motion) {
    transition: none;
  }

  :focus {
    border: 2px solid var(--red);
  }

  :disabled {
    opacity: 0.1;
  }
`

export const Error = styled.span`
  font-weight: 600;
  color: var(--red);
`
