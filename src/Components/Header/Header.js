import { HeaderLogo, HeaderState, HeaderStyled } from './style'
import PropTypes from 'prop-types'
import Logo from '../../images/logo-bonus.svg'

const Header = ({ score }) => {
  return (
    <HeaderStyled>
      <HeaderLogo alt='logo' src={Logo} />
      {score &&
        <HeaderState>
          <p>score</p>
          <span>{score}</span>
        </HeaderState>}
    </HeaderStyled>
  )
}

Header.propTypes = {
  score: PropTypes.string
}

export default Header
