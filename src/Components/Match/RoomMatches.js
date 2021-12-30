import { useEffect, useState, useContext, useMemo } from 'react'
import { OptionsMatch, OptionMatchWrapper } from './style'
import { RoomMatch } from '../../contexts/RoomMatch'
import { getWinner } from '../../utils'
import Option from '../Option/Option'
import MatchOpponent from './MatchOpponent'
import Result from '../Result/Result'
import PropTypes from 'prop-types'

const SIZES = { D: '200px', M: '100px' }

const Matches = ({ election, opponent, playAgain }) => {
  const [finishMatch, setFinishMatch] = useState(false)
  const roomContext = useContext(RoomMatch)
  const resultOfMatch = useMemo(() => getWinner(election, opponent), [opponent])
  const win = resultOfMatch && resultOfMatch !== 'draw'
  const lose = !resultOfMatch && resultOfMatch !== 'draw'

  useEffect(() => {
    let finishTimeout

    if (opponent) {
      finishTimeout = setTimeout(() => setFinishMatch(true), 1000)
      if (win) roomContext.setScoreTo('host')
      if (lose) roomContext.setScoreTo('guest')
    }

    return () => clearTimeout(finishTimeout)
  }, [opponent])

  const guestPick = opponent ? 'The guest picked' : 'Waiting for guest'

  return (
    <>
      <OptionsMatch>
        <OptionMatchWrapper>
          {election &&
            <Option
              padding='2.25em'
              win={win}
              optionName={election}
              sizeD={SIZES.D}
              sizeM={SIZES.M}
            />}
          <span>You Picked</span>
        </OptionMatchWrapper>
         <OptionMatchWrapper>
          <MatchOpponent opponent={opponent} win={lose} />
          <span>{guestPick}</span>
        </OptionMatchWrapper>
        {finishMatch && <Result win={win} draw={resultOfMatch === 'draw'} playAgain={playAgain} />}
      </OptionsMatch>
    </>
  )
}

export default Matches

Matches.propTypes = {
  election: PropTypes.string.isRequired,
  opponent: PropTypes.string,
  playAgain: PropTypes.func
}
