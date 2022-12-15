import styled from 'styled-components'
import { fade } from '../styles'

export const PentagonWrapper = styled.div`
  position: relative;
  align-self: stretch;
  display: grid;
  justify-items: center;
  align-items: center;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-gap: 1em 2.5em;
  animation: ${fade} var(--transition-mode);

  @media (prefers-reduced-motion) {
    animation: none;
  }

  @media screen and (min-width: 400px) {
    width: 20em;
    align-self: center;
  }

  @media screen and (min-width: 1024px) {
    width: 28.75em;
  }
`

export const Pentagon = styled.img`
  position: absolute;
  max-width: 80%;
  z-index: -2;

  @media screen and (min-width: 1024px) {
    max-width: 100%;
  }
`
