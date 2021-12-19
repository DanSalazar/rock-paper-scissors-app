import { useState, useEffect } from 'react'
import { OptionsMatch, OptionMatchWrapper } from './style'
import { useNavigate } from 'react-router-dom'
import Option from '../Option/Option'
import useMatchWinner from '../../hooks/useMatchWinner'
import Result from '../Result/Result'
import MatchOpponent from './MatchOpponent'
import PropTypes from 'prop-types'

// Set sizes of option in match view
const SIZES = { D: '200px', M: '100px' }

const Matches = ({ election, upScore }) => {
  const [finishMatch, setFinishMatch] = useState(false)
  const [opponent, setOpponent] = useState('')
  const navigate = useNavigate()
  const { win, draw, lose } = useMatchWinner(election, opponent)

  useEffect(() => {
    let finish

    if (win) upScore('win')
    else if (lose) upScore('lose')

    if (opponent) finish = setTimeout(() => setFinishMatch(true), 1500)

    return () => clearTimeout(finish)
  }, [opponent, win, draw, lose])

  const playAgain = () => {
    navigate('/')
  }

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

      {finishMatch && <Result win={win} draw={draw} view={playAgain}/>}
    </OptionsMatch>
  )
}

export default Matches

Matches.propTypes = {
  election: PropTypes.string.isRequired,
  upScore: PropTypes.func.isRequired
}
