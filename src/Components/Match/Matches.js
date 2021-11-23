import { useState, useEffect } from 'react'
import { OptionsMatch, OptionMatchWrapper } from './style'
import Option from '../Option/Option'
import checkWinner from '../../checkWinner'
import Result from '../Result/Result'
import MatchOpponent from './MatchOpponent'
import PropTypes from 'prop-types'

const SIZES = { D: '200px', M: '100px' }

const Matches = ({ election, upScore }) => {
  const [finishMatch, setfinishMatch] = useState(false)
  const [win, setWin] = useState(false)
  const [draw, setDraw] = useState(false)
  const [winOpponent, setWinOpponent] = useState(false)
  const [opponent, setOpponent] = useState('')

  useEffect(() => {
    const winnerGame = checkWinner.filter(item => item.name === election)[0]

    if (winnerGame.beats.includes(opponent)) {
      setWin(true)
      upScore('win')
    } else if (opponent === election) {
      setDraw('draw')
      upScore('draw')
    } else if (winnerGame.defeat.includes(opponent)) {
      setWinOpponent(true)
      upScore('lose')
    }

    return setTimeout(() => {
      setfinishMatch(true)
    }, 2500)
  }, [election, opponent])

  return (
    <>
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
            optionName={opponent}
            win={winOpponent}
            setOpponent={setOpponent}
          />
          <span> The House Picked </span>
        </OptionMatchWrapper>

        {finishMatch && <Result win={win} draw={draw}/>}
      </OptionsMatch>
    </>
  )
}

export default Matches

Matches.propTypes = {
  election: PropTypes.string.isRequired,
  upScore: PropTypes.func.isRequired
}
