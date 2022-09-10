import styled, { keyframes } from 'styled-components'
import { show } from '../styles'

const overlayAnim = keyframes`
  0% {
    background-color: rgba(0, 0, 0, 30%);
  }

  50% {
    background-color: rgba(0, 0, 0, 40%);
  }

  100% {
    background-color: rgba(0, 0, 0, 30%);
  }
`

export const OptionsMatch = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  width: 100%;
  height: auto;
  animation: ${show} var(--transition-mode);

  @media screen and (min-width: 1024px) {
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    grid-template-rows: repeat(1, 1fr);
  }

  @media screen and (min-width: 1440px) {
    width: 70%;
  }

  @media (prefers-reduced-motion) {
    animation: none;
  }
`

export const OptionMatchWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;

  span {
    color: #fff;
    margin: 1em 0;
    text-transform: uppercase;
    font-size: 0.875em;
  }

  @media screen and (min-width: 1024px) {
    flex-direction: column-reverse;

    span {
      font-size: 1.25em;
      margin: 0 0 2em 0;
    }
  }
`

export const OptionOverlay = styled.div`
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 30%);
  padding: 0.875em;
  animation: ${overlayAnim} 1.5s var(--transition-mode) infinite;

  div {
    width: 100px;
    height: 100px;
  }

  @media screen and (max-width: 320px) {
    padding: 0.6em;

    div {
      width: 65px;
      height: 65px;
    }
  }

  @media screen and (min-width: 1024px) {
    padding: 2.25em;

    div {
      width: ${(props) => props.sizeD || '110px'};
      height: ${(props) => props.sizeD || '110px'};
    }
  }

  @media (prefers-reduced-motion) {
    animation: none;
  }
`
