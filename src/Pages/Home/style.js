import styled, { keyframes } from 'styled-components';

export const AppContainer = styled.div`
    width: 85%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    margin: auto;

    @media screen and (min-width: 1440px){
        width: 100%;
        padding: 1.5em 3em;
    }
`;

export const Button = styled.button`
    padding: 0.75em 0;
    width: ${props => props.width};
    border: 1px solid #fff;
    color: #fff;
    cursor: pointer;
    font-family: 'Barlow Semi Condensed', sans-serif;
    letter-spacing: 2px;
    text-transform: uppercase;
    font-size: 1em;
    background: transparent;
    outline: none;
    border-radius: 8px;
    transition: 0.1s linear;

    &:hover {
        color: hsl(349, 70%, 56%);
    }

    @media screen and (min-width: 1024px){
        align-self: flex-end;
    }
`;

export const show = keyframes`
    0% {
        opacity: 0;
        }

    100% {
        opacity: 1;
    }
`;

