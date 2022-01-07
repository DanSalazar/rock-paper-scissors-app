import styled from 'styled-components'
import { show } from '../styles'

export const RulesContainer = styled.div`
  background: #fff;
  position: fixed;
  display: flex;
  backdrop-filter: blur(1.5px);
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  animation: ${show} 0.1s ease;

  @media screen and (min-width: 768px) {
    background: rgba(0, 0, 0, 0.75);
  }
`

export const RulesContent = styled.div`
  display: grid;
  grid-template-columns: repeat(1, fr);
  height: 90%;
  padding: 0 1.5em;
  align-items: center;
  justify-items: center;

  p {
    font-size: 2em;
    color: hsl(214, 47%, 23%);
    text-transform: uppercase;
    font-weight: 700;
  }

  @media screen and (min-width: 768px) {
    background: #fff;
    grid-template-columns: repeat(1, 1fr);
    height: 28.125em;
    border-radius: 8px;
    padding: 1.75em 3em 2.5em 3em;
    justify-items: flex-start;
  }
`

export const RulesButton = styled.button`
  text-transform: uppercase;
  background: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  color: hsl(0, 0%, 80%);
  font-size: 2em;

  @media screen and (min-width: 768px) {
    grid-column: 2/3;
    grid-row: 1;
  }
`

export const SvgRules = styled.img`
  min-height: 250px;

  @media screen and (min-width: 768px) {
    grid-column: 1/3;
  }
`
