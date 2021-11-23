import { ResultContainer, ResultTitle, ButtonResult } from './style'
import PropTypes from 'prop-types'

const Result = ({ win, draw, returnGame }) => {
  return (
    <ResultContainer>
      <ResultTitle>
        {draw ? 'Draw' : win ? 'You Win' : 'You lose'}
      </ResultTitle>
      <ButtonResult width='100%' onClick={returnGame}>
        Play Again
      </ButtonResult>
    </ResultContainer>
  )
}

export default Result

Result.propTypes = {
  win: PropTypes.bool.isRequired,
  draw: PropTypes.bool.isRequired,
  returnGame: PropTypes.func.isRequired
}
