import { useEffect, useState, useContext } from 'react'
import { OptionsMatch, OptionMatchWrapper } from './style'
import { RoomContext } from '../../contexts/RoomContext'
import { getWinner } from '../../utils'
import Option from '../Option/Option'
import MatchOpponent from './MatchOpponent'
import Result from '../Result/Result'
import PropTypes from 'prop-types'

const SIZES = { D: '200px', M: '100px' }

const MatchRoom = ({ election, opponent, playAgain }) => {
  const [finishMatch, setFinishMatch] = useState(false)
  const roomContext = useContext(RoomContext)
  const resultOfMatch = getWinner(election, opponent)
  const result = resultOfMatch === 'Win'

  useEffect(() => {
    let finishTimeout

    if (opponent) {
      finishTimeout = setTimeout(() => setFinishMatch(true), 1000)
      if (resultOfMatch === 'Win') roomContext.setScoreTo('host')
      if (resultOfMatch === 'Lose') roomContext.setScoreTo('guest')
    }

    return () => clearTimeout(finishTimeout)
  }, [opponent, resultOfMatch])

  const guestPick = opponent ? 'The guest picked' : 'Waiting for guest'

  return (
    <>
      <OptionsMatch>
        <OptionMatchWrapper>
          {election &&
            <Option
              padding='2.25em'
              win={result}
              optionName={election}
              sizeD={SIZES.D}
              sizeM={SIZES.M}
            />}
          <span>You Picked</span>
        </OptionMatchWrapper>
         <OptionMatchWrapper>
          <MatchOpponent opponent={opponent} win={!result} />
          <span>{guestPick}</span>
        </OptionMatchWrapper>
        {finishMatch && <Result result={resultOfMatch} playAgain={playAgain} />}
      </OptionsMatch>
    </>
  )
}

export default MatchRoom

MatchRoom.propTypes = {
  election: PropTypes.string.isRequired,
  opponent: PropTypes.string,
  playAgain: PropTypes.func
}
