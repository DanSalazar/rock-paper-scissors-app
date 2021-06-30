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