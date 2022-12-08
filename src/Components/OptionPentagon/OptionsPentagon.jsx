import { PentagonWrapper, Pentagon } from './style'
import PentagonImage from '../../images/bg-pentagon.svg'
import Option from '../Option/Option'
import PropTypes from 'prop-types'

const mapOptions = [
  {
    name: 'scissors',
    gridRow: '1',
    gridCol: '1/3'
  },
  {
    name: 'spock',
    gridRow: '2',
    gridCol: '1/1',
    place: 'flex-start'
  }, {
    name: 'paper',
    gridRow: '2',
    gridCol: '2/3',
    place: 'flex-end'
  }, {
    name: 'lizard',
    gridRow: '3',
    gridCol: '1/1',
    place: 'flex-end'
  },
  {
    name: 'rock',
    gridRow: '3',
    gridCol: '2/3',
    place: 'flex-start'
  }
]

const OptionPentagon = ({ select, election }) => {
  return (
    <PentagonWrapper>
      <Pentagon src={PentagonImage} />
      {mapOptions.map(option => (
        <Option
          key={option.name}
          handler={select}
          gridRow={option.gridRow}
          gridCol={option.gridCol}
          place={option.place}
          optionName={option.name}
        />
      ))}
    </PentagonWrapper>
  )
}

OptionPentagon.propTypes = {
  select: PropTypes.func.isRequired,
  election: PropTypes.string
}

export default OptionPentagon
