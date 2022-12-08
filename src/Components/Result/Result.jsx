import { ResultContainer, ResultTitle, ButtonResult } from './style'
import PropTypes from 'prop-types'

const Result = ({ result, playAgain }) => {
  return (
    <ResultContainer>
      <ResultTitle>{result}</ResultTitle>
      <ButtonResult width='100%' onClick={playAgain}>
        Play Again
      </ButtonResult>
    </ResultContainer>
  )
}

export default Result

Result.propTypes = {
  result: PropTypes.string,
  playAgain: PropTypes.func
}
