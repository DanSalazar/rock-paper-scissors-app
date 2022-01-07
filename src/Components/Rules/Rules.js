import { RulesButton, RulesContent, RulesContainer, SvgRules } from './style'
import imageRules from '../../images/image-rules-bonus.svg'
import iconClose from '../../images/icon-close.svg'
import PropTypes from 'prop-types'

const Rules = ({ view, setView }) => {
  return (
    <>
      {view &&
        <RulesContainer>
          <RulesContent>
            <p>Rules</p>
            <SvgRules src={imageRules} alt='Rules of Game' />
            <RulesButton onClick={() => setView(false)}>
              <img src={iconClose} alt='Close' />
            </RulesButton>
          </RulesContent>
        </RulesContainer>}
    </>
  )
}

export default Rules

Rules.propTypes = {
  view: PropTypes.bool.isRequired,
  setView: PropTypes.func.isRequired
}
