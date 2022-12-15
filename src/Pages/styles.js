import styled from 'styled-components'

export const AppContainer = styled.div`
  width: 85%;
  height: 100vh;
  display: flex;
  padding: 1.25em 0;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin: auto;

  @media screen and (min-width: 1440px) {
    width: 100%;
    padding: 2.25em 3em;
  }
`

export const ButtonsWrapper = styled.div`
  button {
    margin: 0 .5rem;
  }

  @media screen and (min-width: 1024px){
    align-self: flex-end;
  }
}
`

export const WaitingText = styled.h4`
  color: var(--white);
  font-size: 2em;
  letter-spacing: 1.25px;
  text-align: center;
`

export const NotFoundContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--white);
  height: 100vh;
`
