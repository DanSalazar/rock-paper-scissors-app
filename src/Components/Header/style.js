import styled from 'styled-components'

export const HeaderStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 3px solid hsl(217, 16%, 45%);
  border-radius: 1em;
  width: 100%;
  height: auto;
  padding: 1.25em;

  @media screen and (min-width: 1024px) {
    max-width: 60%;
  }
`

export const HeaderLogo = styled.img`
  max-width: 25%;

  @media screen and (min-width: 768px) {
    max-width: 30%;
  }
`

export const HeaderState = styled.div`
  background-color: #fff;
  border-radius: var(--b-radius);
  height: auto;
  text-transform: uppercase;
  text-align: center;
  min-width: 7.35em;
  padding: 0.875em 0;
  font-weight: 700;

  div {
    display: flex;
    flex-direction: column;
  }

  @media screen and (min-width: 1024px) {
    max-width: 50%;
  }
`

export const HeaderScore = styled.span`
  font-size: 3em;
  color: hsl(229, 25%, 31%);
`

export const HeaderScoreTitle = styled.span`
  color: hsl(229, 64%, 46%);
`

export const HeaderRoomState = styled(HeaderState)`
  display: flex;
  min-width: auto;
  font-size: 0.75em;

  div {
    width: 5em;
  }

  @media screen and (min-width: 320px) {
    font-size: 1em;

    div {
      width: 6.25em;
    }
  }
`
