import { useEffect } from 'react'
import { OptionOverlay } from './style'
import Option from '../Option/Option'
import PropTypes from 'prop-types'

const OPTIONS = ['scissors', 'paper', 'spock', 'lizard', 'rock']

const SIZES = { D: '200px', M: '100px' }

const MatchOpponent = ({ optionName, win, setOpponent }) => {
  useEffect(() => {
    setTimeout(() => {
      setOpponent(OPTIONS[Math.round(Math.random() * 4)])
    }, 1500)
  }, [setOpponent])

  return (
    <>
      {optionName
        ? <Option
            sizeD={SIZES.D}
            sizeM={SIZES.M}
            padding='2.25em'
            optionName={optionName}
            win={win}
          />
        : <OptionOverlay sizeD={SIZES.D} sizeM={SIZES.M}>
          <div/>
        </OptionOverlay>}
    </>
  )
}

export default MatchOpponent

MatchOpponent.propTypes = {
  optionName: PropTypes.string.isRequired,
  win: PropTypes.bool.isRequired,
  setOpponent: PropTypes.func.isRequired
}
