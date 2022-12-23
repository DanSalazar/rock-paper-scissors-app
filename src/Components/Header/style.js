import styled from 'styled-components'

export const HeaderStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 3px solid hsl(217, 16%, 45%);
  border-radius: 1rem;
  width: 100%;
  padding: 1.5rem 1rem;

  @media screen and (min-width: 325px) {
    justify-content: space-between;
  }

  @media screen and (min-width: 425px) {
    padding: 1.5rem;
  }

  @media screen and (min-width: 1024px) {
    max-width: 70%;
  }
`

export const HeaderLogo = styled.img`
  display: none;
  
  @media screen and (min-width: 325px) {
    max-width: 30%;
    display: block;
  }

  @media screen and (min-width: 425px) {
    max-width: 40%;
    display: block;
  }
`

export const HeaderState = styled.div`
  text-align: center;
  font-weight: 700;

  div {
    display: flex;
    flex-direction: column;
    background-color: #fff;
    padding: 0.7rem 0;
    width: 5rem;
    border-radius: var(--b-radius);
  }

  @media screen and (min-width: 325px) {
    div {
      width: 4.5rem;
    }
  }

  @media screen and (min-width: 425px) {
    div {
      width: 6rem;
    }
  }
`

export const HeaderScore = styled.span`
  font-size: 2.25rem;
  color: hsl(229, 25%, 31%);

  @media screen and (min-width: 375px) {
    font-size: 2.75rem;
  }
`

export const HeaderScoreTitle = styled.span`
  color: hsl(229, 64%, 46%);
`

export const HeaderRoomState = styled(HeaderState)`
  display: flex;
  font-size: 1rem;
  gap: 0.5rem;
  width: 100%;
  justify-content: center;

  @media screen and (min-width: 325px) {
    justify-content: flex-end;
  }
`
