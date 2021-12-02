import { ResultContainer, ResultTitle, ButtonResult } from './style'
import PropTypes from 'prop-types'

const Result = ({ win, draw, view }) => {
  return (
    <ResultContainer>
      <ResultTitle>
        {draw ? 'Draw' : win ? 'You Win' : 'You lose'}
      </ResultTitle>
      <ButtonResult width='100%' onClick={view}>
        Play Again
      </ButtonResult>
    </ResultContainer>
  )
}

export default Result

Result.propTypes = {
  win: PropTypes.bool,
  draw: PropTypes.bool,
  view: PropTypes.func
}
