import { OptionStyled, OptionBorder, Svg } from './style'
import spock from '../../images/icon-spock.svg'
import rock from '../../images/icon-rock.svg'
import paper from '../../images/icon-paper.svg'
import lizard from '../../images/icon-lizard.svg'
import scissors from '../../images/icon-scissors.svg'
import PropTypes from 'prop-types'

const gradientOptions = {
  lizard: 'hsl(261, 73%, 60%), hsl(261, 72%, 63%)',
  rock: 'hsl(349, 71%, 52%), hsl(349, 70%, 56%)',
  paper: 'hsl(230, 89%, 62%), hsl(230, 89%, 65%)',
  scissors: 'hsl(39, 89%, 49%), hsl(40, 84%, 53%)',
  spock: 'hsl(189, 59%, 53%), hsl(189, 58%, 57%)'
}

const imageOfOption = {
  lizard,
  paper,
  scissors,
  rock,
  spock
}

const Option = ({ handler, gridCol, gridRow, place, optionName, padding, win, sizeM, sizeD }) => {
  const handleOption = (e) => {
    return handler ? handler(e.target.dataset.value) : null
  }

  return (
    <OptionBorder
      onClick={handleOption}
      data-value={optionName}
      win={win}
      place={place}
      gridRow={gridRow}
      gridCol={gridCol}
      gradient={gradientOptions[optionName]}
      padding={padding}
    >
      <OptionStyled data-value={optionName} sizeM={sizeM} sizeD={sizeD}>
        <Svg src={imageOfOption[optionName]} alt='icon-option' data-value={optionName} />
      </OptionStyled>
    </OptionBorder>
  )
}

export default Option

Option.propTypes = {
  handler: PropTypes.func,
  gridCol: PropTypes.string,
  gridRow: PropTypes.string,
  place: PropTypes.string,
  optionName: PropTypes.string,
  padding: PropTypes.string,
  win: PropTypes.bool,
  sizeD: PropTypes.string,
  sizeM: PropTypes.string
}
