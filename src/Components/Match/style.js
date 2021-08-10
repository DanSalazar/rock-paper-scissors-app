import styled from 'styled-components';
import { show } from '../../Pages/Home/style';

export const OptionsMatch = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    width: 100%;
    height: auto;
    animation: ${show} 0.3s ease;

    @media screen and (min-width: 1024px){
        grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
        grid-template-rows: repeat(1, 1fr);
    }

    @media screen and (min-width: 1440px){
        width: 70%;
    }
`;

export const OptionMatchWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    transition: 0.2s ease;

    span {
        color: #fff;
        display: block;
        margin: 1em 0;
        text-transform: uppercase;
        font-size: 0.875em;
        letter-spacing: 1.5px;
        text-align: center;
    }

    @media screen and (min-width: 1024px){
        flex-direction: column-reverse;

        span {
            font-size: 1.25em;
            margin: 0 0 2em 0;
        }
    }
`;


export const OptionOverlay = styled.div`
    border-radius: 50%;
    background: rgba(0, 0, 0, 20%);
    padding: 0.875em;

    div {
        width: 100px;
        height: 100px;
    }

    @media screen and (max-width: 320px){
        div {
            width: 65px;
            height: 65px;
        }
    }

    @media screen and (max-width: 320px){
        padding: 0.6em;
    }

    @media screen and (min-width: 1024px){
        padding: 2.25em;

        div {
            width: ${props => props.sizeD};
            height: ${props => props.sizeD}; 
        }
    }

`;