import { ResultContainer, ResultTitle, ButtonResult } from './style'
import PropTypes from 'prop-types'

const Result = ({ win, draw, playAgain }) => {
  return (
    <ResultContainer>
      <ResultTitle>
        {draw ? 'Draw' : win ? 'You Win' : 'You lose'}
      </ResultTitle>
      <ButtonResult width='100%' onClick={playAgain}>
        Play Again
      </ButtonResult>
    </ResultContainer>
  )
}

export default Result

Result.propTypes = {
  win: PropTypes.bool,
  draw: PropTypes.bool,
  playAgain: PropTypes.func
}
