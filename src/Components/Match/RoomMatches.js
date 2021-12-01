import { useEffect, useState } from 'react'
import { OptionsMatch, OptionMatchWrapper } from './style'
import Option from '../Option/Option'
import MatchOpponent from './MatchOpponent'
import Result from '../Result/Result'
import PropTypes from 'prop-types'
import useMatchWinner from '../../hooks/useMatchWinner'

const SIZES = { D: '200px', M: '100px' }

const Matches = ({ election, opponent, view }) => {
  const [finish, setFinish] = useState(false)
  const { win, draw, lose } = useMatchWinner(election, opponent)

  useEffect(() => {
    let finishMatch

    if (opponent) finishMatch = setTimeout(() => setFinish(true), 1500)

    return () => clearTimeout(finishMatch)
  }, [opponent])

  const text = opponent ? 'The guest picked' : 'Waiting for guest'

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
          <span>{text}</span>
        </OptionMatchWrapper>
        {finish && <Result win={win} draw={draw} view={view} />}
      </OptionsMatch>
    </>
  )
}

export default Matches

Matches.propTypes = {
  election: PropTypes.string.isRequired,
  opponent: PropTypes.string,
  view: PropTypes.func
}
