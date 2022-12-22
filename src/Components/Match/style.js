import styled, { keyframes } from 'styled-components'
import { fade } from '../styles'

export const OptionsMatch = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  width: 100%;
  animation: ${fade} var(--transition-mode);

  @media (prefers-reduced-motion) {
    animation: none;
  }

  @media screen and (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 1fr;
  }

  @media screen and (min-width: 1280px) {
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

const overlayAnim = keyframes`
  0% {
    background-color: rgba(0, 0, 0, 0.3);
  }

  100% {
    background-color: rgba(0, 0, 0, 0.4);
  }
`

export const OptionOverlay = styled.div`
  border-radius: 50%;
  padding: 1rem;
  background-color: rgba(0, 0, 0, 10%);
  animation: ${overlayAnim} 1s linear infinite alternate;
  box-shadow: 0 0 32px rgba(0, 0, 0, 0.6);

  div {
    width: ${(props) => props.sizeM || '75px'};
    height: ${(props) => props.sizeM || '75px'};
  }

  @media (prefers-reduced-motion) {
    animation: none;
  }
  
  @media screen and (max-width: 320px) {
    padding: 0.6em;

    div {
      width: 65px;
      height: 65px;
    }
  }

  @media screen and (min-width: 1024px) {
    padding: ${(props) => props.padding || '2rem'};
    div {
      width: ${(props) => props.sizeD || '110px'};
      height: ${(props) => props.sizeD || '110px'};
    }
  }

  @media (prefers-reduced-motion) {
    animation: none;
  }
`
