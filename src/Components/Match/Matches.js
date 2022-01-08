import { useState, useEffect, useMemo } from 'react'
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
  const resultOfMatch = useMemo(() => getWinner(election, opponent), [opponent])
  const navigate = useNavigate()
  const win = resultOfMatch && resultOfMatch !== 'draw'
  const lose = !resultOfMatch && resultOfMatch !== 'draw'

  useEffect(() => {
    let finish

    if (opponent) {
      finish = setTimeout(() => setFinishMatch(true), 1500)
      if (win) upScore('win')
      if (lose) upScore('lose')
    }
  
    return () => clearTimeout(finish)
  }, [opponent, resultOfMatch])

  const playAgain = () => navigate('/')

  return (
    <OptionsMatch>
      <OptionMatchWrapper>
        {election &&
          <Option
            padding='2.25em' win={win}
            optionName={election}
            sizeD={SIZES.D}
            sizeM={SIZES.M}
          />}
        <span>You Picked</span>
      </OptionMatchWrapper>

      <OptionMatchWrapper>
        <MatchOpponent
          opponent={opponent}
          win={lose}
          setOpponent={setOpponent}
        />
        <span> The House Picked </span>
      </OptionMatchWrapper>

      {finishMatch && <Result win={resultOfMatch} draw={resultOfMatch === 'draw'} playAgain={playAgain}/>}
    </OptionsMatch>
  )
}

export default Matches

Matches.propTypes = {
  election: PropTypes.string.isRequired,
  upScore: PropTypes.func.isRequired
}
