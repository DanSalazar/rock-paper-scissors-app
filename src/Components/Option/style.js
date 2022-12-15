import styled from 'styled-components'

export const OptionBorder = styled.div`
  border-radius: 50%;
  cursor: pointer;
  padding: 0.875em;
  background: ${(props) =>
    props.gradient && `linear-gradient(to top, ${props.gradient})`};
  box-shadow: inset 0px -6px 2px rgba(0, 0, 0, 0.15);
  grid-column: ${(props) => props.gridCol};
  grid-row: ${(props) => props.gridRow};
  place-self: ${(props) => props.place};
  animation: ${(props) => props.win && 'winAnim 0.15s ease forwards'};
  transition: 0.4s ease;

  &:hover {
    transform: scale(1.1);
  }

  @keyframes winAnim {
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

  @media screen and (max-width: 320px) {
    padding: 0.6em;
  }

  @media screen and (min-width: 1024px) {
    padding: ${(props) => props.padding || '1em'};
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
    width: 65px;
    height: 65px;
  }

  @media screen and (min-width: 1024px) {
    width: ${(props) => props.sizeD || '110px'};
    height: ${(props) => props.sizeD || '110px'};
  }
`

export const Svg = styled.img`
  max-width: 45%;

  @media screen and (min-width: 1024px) {
    min-width: 40%;
  }
`
