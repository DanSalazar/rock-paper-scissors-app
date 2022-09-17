import { useState, useEffect } from 'react'
import { OptionsMatch, OptionMatchWrapper } from './style'
import { useNavigate } from 'react-router-dom'
import Option from '../Option/Option'
import { getWinner } from '../../utils'
import Result from '../Result/Result'
import MatchOpponent from './MatchOpponent'
import PropTypes from 'prop-types'

// Set sizes of option in match view
const SIZES = { D: '200px', M: '100px' }

const Matches = ({ election, upScore }) => {
  const [finishMatch, setFinishMatch] = useState(false)
  const [opponent, setOpponent] = useState('')
  const navigate = useNavigate()
  const resultOfMatch = getWinner(election, opponent)

  useEffect(() => {
    let finish

    if (opponent) {
      finish = setTimeout(() => setFinishMatch(true), 1500)
      if (resultOfMatch === 'Win') upScore('win')
      if (resultOfMatch === 'Lose') upScore('lose')
    }
  
    return () => clearTimeout(finish)
  }, [opponent])

  const playAgain = () => navigate('/')

  return (
    <OptionsMatch>
      <OptionMatchWrapper>
        {election &&
          <Option
            padding='2.25em' win={resultOfMatch === 'Win'}
            optionName={election}
            sizeD={SIZES.D}
            sizeM={SIZES.M}
          />}
        <span>You Picked</span>
      </OptionMatchWrapper>

      <OptionMatchWrapper>
        <MatchOpponent
          opponent={opponent}
          win={resultOfMatch === 'Lose'}
          setOpponent={setOpponent}
        />
        <span>The House Picked</span>
      </OptionMatchWrapper>

      {finishMatch && <Result result={resultOfMatch} playAgain={playAgain}/>}
    </OptionsMatch>
  )
}

export default Matches

Matches.propTypes = {
  election: PropTypes.string.isRequired,
  upScore: PropTypes.func.isRequired
}
