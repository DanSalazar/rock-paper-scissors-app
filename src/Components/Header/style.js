import styled from 'styled-components';

export const HeaderStyled = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 3px solid hsl(217, 16%, 45%);
    border-radius: 8px;
    width: 100%;
    height: auto;
    padding: 1em 1.5em;

    @media screen and (min-width:1024px){
        max-width: 60%;
    }
`;

export const HeaderLogo = styled.img`
    max-width: 30%;
`;

export const HeaderState = styled.div`
    background: #fff;
    border-radius: 8px;
    height: auto;
    text-transform: uppercase;
    text-align: center;
    width: 5.25em;
    padding: 0.5em 0;
    color: hsl(229, 64%, 46%);

    span {
        font-size: 2.75em;
        color: hsl(229, 25%, 31%);
    }

    @media screen and (min-width:1024px){
        max-width: 50%;
    }
`;