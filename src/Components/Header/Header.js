import React, { useContext } from 'react'
import { HeaderLogo, HeaderState, HeaderStyled } from './style'
import Logo from '../../images/logo-bonus.svg';
import ScoreContext from '../../ScoreContext/ScoreContext';

const Header = () => {

    const { score } = useContext(ScoreContext);

    return (
        <HeaderStyled>
            <HeaderLogo src={Logo}/>
            <HeaderState>
                <p>score</p>
                <span> { score } </span>
            </HeaderState>
        </HeaderStyled>
    );
}

export default Header
