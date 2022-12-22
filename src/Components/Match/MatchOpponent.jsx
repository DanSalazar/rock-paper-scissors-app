import { useEffect } from 'react'
import { OptionOverlay } from './style'
import Option from '../Option/Option'
import PropTypes from 'prop-types'

const OPTIONS = ['scissors', 'paper', 'spock', 'lizard', 'rock']

const SIZES = { D: '170px', M: '100px' }

const MatchOpponent = ({ opponent, win, setOpponent }) => {
  useEffect(() => {
    let timer
    if (setOpponent)
      timer = setTimeout(
        () => setOpponent(OPTIONS[Math.round(Math.random() * 4)]),
        2000
      )
    return () => clearTimeout(timer)
  }, [setOpponent])

  return (
    <>
      {opponent ? (
        <Option
          sizeD={SIZES.D}
          sizeM={SIZES.M}
          padding='2rem'
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
