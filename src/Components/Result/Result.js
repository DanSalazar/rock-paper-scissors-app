import { ResultContainer, ResultTitle, ButtonResult } from './style'
import { useNavigate } from 'react-router-dom'
import PropTypes from 'prop-types'

const Result = ({ win, draw }) => {
  const navigate = useNavigate()
  return (
    <ResultContainer>
      <ResultTitle>
        {draw ? 'Draw' : win ? 'You Win' : 'You lose'}
      </ResultTitle>
      <ButtonResult width='100%' onClick={() => navigate('/')}>
        Play Again
      </ButtonResult>
    </ResultContainer>
  )
}

export default Result

Result.propTypes = {
  win: PropTypes.bool.isRequired,
  draw: PropTypes.bool.isRequired
}
