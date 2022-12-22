import { useState, useEffect } from 'react'
import { OptionsMatch, OptionMatchWrapper } from './style'
import { useNavigate } from 'react-router-dom'
import Option from '../Option/Option'
import { getWinner } from '../../utils'
import Result from '../Result/Result'
import MatchOpponent from './MatchOpponent'
import PropTypes from 'prop-types'

// Set sizes of option in match view
const SIZES = { D: '170px', M: '100px' }

const Match = ({ election, upScore, playAgain }) => {
  const [finishMatch, setFinishMatch] = useState(false)
  const [opponent, setOpponent] = useState('')
  const navigate = useNavigate()
  const resultOfMatch = getWinner(election, opponent)

  useEffect(() => {
    let finish

    if (opponent) {
      upScore(resultOfMatch)
      finish = setTimeout(() => setFinishMatch(true), 1500)
    }

    return () => clearTimeout(finish)
  }, [opponent])

  return (
    <OptionsMatch>
      <OptionMatchWrapper>
        {election && (
          <Option
            padding='2rem'
            win={resultOfMatch === 'win'}
            optionName={election}
            sizeD={SIZES.D}
            sizeM={SIZES.M}
          />
        )}
        <span>You Picked</span>
      </OptionMatchWrapper>
      <OptionMatchWrapper>
        <MatchOpponent
          opponent={opponent}
          win={resultOfMatch === 'lose'}
          setOpponent={setOpponent}
        />
        <span>The House Picked</span>
      </OptionMatchWrapper>
      <Result result={resultOfMatch} playAgain={playAgain} finish={finishMatch} />
    </OptionsMatch>
  )
}

export default Match

Match.propTypes = {
  election: PropTypes.string.isRequired,
  upScore: PropTypes.func.isRequired,
  playAgain: PropTypes.func.isRequired
}
