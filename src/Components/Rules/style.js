import styled from 'styled-components'
import { Modal } from '../styles'

export const ModalForRules = styled(Modal)`
  @media screen and (max-width: 768px) {
    background: #fff
  }
`

export const RulesContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
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
    height: 500px;
    min-width: 350px;
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
  min-width: 85vw;
  height: 45vh;

  @media screen and (min-width: 768px) {
    grid-column: 1/3;
    min-width: 100%;
    height: auto;
  }
`
