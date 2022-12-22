import styled, { keyframes } from 'styled-components'
import { fade } from '../styles'

export const OptionBorder = styled.button`
  border-radius: 50%;
  padding: 1rem;
  cursor: pointer;
  background: ${(props) =>
    props.gradient && `linear-gradient(to top, ${props.gradient})`};
  box-shadow: inset 0px -6px 2px rgba(0, 0, 0, 0.1);
  grid-column: ${(props) => props.gridCol};
  grid-row: ${(props) => props.gridRow};
  place-self: ${(props) => props.place};
  animation: fade var(--transition-mode);
  animation: ${(props) => props.win && `winAnimation 0.15s ease forwards, fade var(--transition-mode)`};
  transition: 0.4s ease;
  border: none;

  @media (prefers-reduced-motion) {
    animation: none;
  }

  @keyframes fade {
    0% {
      opacity: 0;
      }

    100% {
      opacity: 1;
    }
  }

  @keyframes winAnimation {
    0% {
      box-shadow: 0px 0px 0px hsla(0, 0%, 100%, 0.3);
    }

    100% {
      box-shadow: 0px 0px 0px 2em rgb(204 204 204 / 12%),
        0px 0px 0px 3em rgb(204 204 204 / 8%),
        0px 0px 0px 4em rgb(204 204 204 / 4%);
      transform: scale(1.2);
    }
  }

  &:hover {
    transform: scale(1.030);
  }

  @media screen and (max-width: 320px) {
    padding: 0.6rem;
  }

  @media screen and (min-width: 1024px) {
    padding: ${(props) => props.padding || '0.75rem'};
  }

  @media (prefers-reduced-motion) {
    transition: none;
  }
`

export const OptionStyled = styled.div`
  width: ${(props) => props.sizeM || '75px'};
  height: ${(props) => props.sizeM || '75px'};
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  box-shadow: inset 0px 6px 4px rgba(0, 0, 0, 0.15);

  @media screen and (max-width: 320px) {
    width: 60px;
    height: 60px;
  }

  @media screen and (min-width: 1024px) {
    width: ${(props) => props.sizeD || '6rem'};
    height: ${(props) => props.sizeD || '6rem'};
  }
`

export const Svg = styled.img`
  width: 50%;
`
