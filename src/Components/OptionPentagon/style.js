import styled from 'styled-components'
import { fade } from '../styles'

export const PentagonWrapper = styled.div`
  position: relative;
  display: grid;
  align-self: stretch;
  justify-items: center;
  align-items: center;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(3, 1fr);
  gap: 0.5rem 1.25rem;
  animation: ${fade} var(--transition-mode);

  @media (prefers-reduced-motion) {
    animation: none;
  }

  @media screen and (min-width: 400px) {
    gap: 1rem 2rem;
    width: 20rem;
    align-self: center;
  }

  @media screen and (min-width: 1024px) {
    width: 28rem;
    gap: 0.75rem 2.25rem;
  }
`

export const Pentagon = styled.img`
  position: absolute;
  max-width: 80%;
  z-index: -2;
`
