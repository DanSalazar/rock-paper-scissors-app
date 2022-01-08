import { useEffect } from 'react'
import { OptionOverlay } from './style'
import Option from '../Option/Option'
import PropTypes from 'prop-types'

const OPTIONS = ['scissors', 'paper', 'spock', 'lizard', 'rock']

const SIZES = { D: '200px', M: '100px' }

const MatchOpponent = ({ opponent, win, setOpponent }) => {
  useEffect(() => {
    let timer
    if (setOpponent)
      timer = setTimeout(
        () => setOpponent(OPTIONS[Math.round(Math.random() * 4)]),
        1500
      )
    return () => clearTimeout(timer)
  }, [setOpponent])

  return (
    <>
      {opponent ? (
        <Option
          sizeD={SIZES.D}
          sizeM={SIZES.M}
          padding='2.25em'
          optionName={opponent}
          win={win}
        />
      ) : (
        <OptionOverlay sizeD={SIZES.D} sizeM={SIZES.M}>
          <div />
        </OptionOverlay>
      )}
    </>
  )
}

export default MatchOpponent

MatchOpponent.propTypes = {
  win: PropTypes.bool,
  setOpponent: PropTypes.func,
  opponent: PropTypes.string
}
