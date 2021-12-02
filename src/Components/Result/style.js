import styled from 'styled-components'
import { show, Button } from '../styles'

export const ResultContainer = styled.div`
    animation: ${show} 0.20s ease;
    grid-column: 1/3;
    align-self: center;
    justify-self: center;
    
    @media screen and (min-width: 1024px){
        grid-column: 2/2;
        grid-row: 1;
    }
`

export const ResultTitle = styled.h2`
    color: #fff;
    font-size: 3.5em;
    letter-spacing: 2px;
    text-transform: uppercase;
    text-align: center;
`

export const ButtonResult = styled(Button)`
    width: 100%;
    background: #fff;
    margin: 0.5em 0;
    color: hsl(214, 47%, 23%);
    border: none;
`
