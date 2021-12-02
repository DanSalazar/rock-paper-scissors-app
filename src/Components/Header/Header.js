import { HeaderLogo, HeaderState, HeaderStyled } from './style'
import PropTypes from 'prop-types'
import Logo from '../../images/logo-bonus.svg'

const Header = ({ score, viewScore }) => {
  return (
    <HeaderStyled>
      <HeaderLogo alt='logo' src={Logo} />
      {viewScore &&
      <HeaderState>
        <p>SCORE</p>
        <span>{score}</span>
      </HeaderState>}
    </HeaderStyled>
  )
}

Header.propTypes = {
  score: PropTypes.number,
  viewScore: PropTypes.bool
}

export default Header
