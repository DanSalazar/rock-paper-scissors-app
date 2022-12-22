import { ModalForRules, RulesButton, RulesContainer, RulesContent, SvgRules } from './style'
import imageRules from '../../images/image-rules-bonus.svg'
import iconClose from '../../images/icon-close.svg'
import PropTypes from 'prop-types'

const Rules = ({ view, setView }) => {
  const closeView = () => setView(false)
  return (
    <>
      {view && (
        <>
          <ModalForRules onClick={closeView} />
          <RulesContainer>
            <RulesContent>
              <p>Rules</p>
              <SvgRules src={imageRules} alt='Rules of Game' />
              <RulesButton onClick={closeView}>
                <img src={iconClose} alt='Close' />
              </RulesButton>
            </RulesContent>
          </RulesContainer>
        </>
      )}
    </>
  )
}

export default Rules

Rules.propTypes = {
  view: PropTypes.bool.isRequired,
  setView: PropTypes.func.isRequired
}
