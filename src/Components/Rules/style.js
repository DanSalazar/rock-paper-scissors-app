import styled from 'styled-components'
import { Modal } from '../styles'

export const ModalForRules = styled(Modal)`
  background: #fff;
  
  @media screen and (min-width: 768px) {
    backdrop-filter: blur(1.25px);
    background: rgba(0, 0, 0, 0.75);
  }

  @media (prefers-reduced-motion) {
    animation: none;
  }
`

export const RulesContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  @media screen and (min-width: 768px) {
    background: #fff;
    width: 30%;
    border-radius: var(--b-radius);
    gap: 1rem;
    width: 500px;
    padding: 2.5rem;
  }
`

export const RulesContent = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6rem;

  p {
    font-size: 2.5rem;
    color: hsl(214, 47%, 23%);
    text-transform: uppercase;
    font-weight: 700;
  }

  @media screen and (min-width: 768px) {
    align-items: flex-start;
    gap: 1.5rem;
  }
`

export const RulesButton = styled.button`
  text-transform: uppercase;
  background: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  color: hsl(0, 0%, 80%);
  font-size: 2.5rem;

  @media screen and (min-width: 768px) {
    position: absolute;
    top: 0;
    right: 0;
  }
`

export const SvgRules = styled.img`
  min-width: 350px;
  min-height: 350px;
  align-self: center;

  @media screen and (min-width: 768px), (max-width: 325px) {
    min-width: 250px;
    min-height: 250px;
  }
`
