import styled from 'styled-components';

export const OptionStyled = styled.div`
    width: ${props => props.widthM ? props.widthM : "75px"};
    height: ${props => props.heightM ? props.heightM : "75px"};
    background: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    box-shadow: inset 0px 6px 4px rgba(0,0,0, 0.15);

    @media screen and (max-width: 320px){
        width: 65px;
        height: 65px;
    }

    @media screen and (min-width: 1024px){
        width: ${props => props.width ? props.width : "105px"};
        height: ${props => props.height ? props.height : "105px"};
    }
`;

export const OptionBorder = styled.div`
    border-radius: 50%;
    cursor: pointer;
    padding: 0.875em;
    ${props => props.gradient && `background: linear-gradient(to top, ${props.gradient})`};
    box-shadow: inset 0px -6px 2px rgba(0,0,0, 0.15);
    grid-column: ${props => props.gridCol};
    grid-row: ${props => props.gridRow};
    place-self: ${props => props.place};
    animation: ${props => {
        return props.winner === props.name ?
            "winAnim 0.1s ease 1.5s forwards" : null;
    }};

    @keyframes winAnim {
        0% {
            box-shadow: 0px 0px 0px hsla(0, 0%, 100%, 0.3);
        }

        100% {
           box-shadow: 0px 0px 20px hsla(0, 0%, 50%, 0.3),
           0px 0px 40px hsla(0, 0%, 70%, 0.6),
           0px 0px 80px hsla(0, 0%, 90%, 0.8);
        }
    }

    @media screen and (max-width: 320px){
        padding: 0.6em;
    }

    @media screen and (min-width: 1024px){
        padding: ${props => props.padding ? props.padding : "1em"};
    }
`;

export const Svg = styled.img`
    max-width: 45%;

    @media screen and (min-width: 1024px){
        min-width: 40%;
    }
`;