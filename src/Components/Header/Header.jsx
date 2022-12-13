import {
  HeaderLogo,
  HeaderState,
  HeaderStyled,
  HeaderScoreTitle,
  HeaderScore
} from './style'
import PropTypes from 'prop-types'
import Logo from '../../images/logo-bonus.svg'

const Header = ({ score, viewScore }) => {
  return (
    <HeaderStyled>
      <HeaderLogo alt='logo' src={Logo} />
      {viewScore && (
        <HeaderState>
          <div>
            <HeaderScoreTitle>SCORE</HeaderScoreTitle>
            <HeaderScore>{score}</HeaderScore>
          </div>
        </HeaderState>
      )}
    </HeaderStyled>
  )
}

Header.propTypes = {
  score: PropTypes.number,
  viewScore: PropTypes.bool
}

export default Header
