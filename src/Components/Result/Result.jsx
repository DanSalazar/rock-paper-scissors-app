import { ResultContainer, ResultTitle, ButtonResult } from './style'
import PropTypes from 'prop-types'

const Result = ({ result, playAgain, finish }) => {
  return (
    <ResultContainer>
      {finish &&
        <div>
          <ResultTitle>{result}</ResultTitle>
          <ButtonResult width='100%' onClick={playAgain}>
            Play Again
          </ButtonResult>
        </div>
      }
    </ResultContainer>
  )
}

export default Result

Result.propTypes = {
  result: PropTypes.string,
  playAgain: PropTypes.func,
  finish: PropTypes.bool.isRequired
}
