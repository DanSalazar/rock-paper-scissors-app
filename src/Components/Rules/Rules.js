import React from 'react'
import { RulesButton, RulesContent, RulesContainer, SvgRules } from './style'
import imageRules from '../../images/image-rules-bonus.svg'
import iconClose from '../../images/icon-close.svg'
import PropTypes from 'prop-types'

const Rules = ({ rulesShow, setRules }) => {
  const rulesOff = () => {
    setRules(!rulesShow)
  }

  return (
    <>
      {rulesShow &&
        <RulesContainer>
          <RulesContent>
            <p>Rules</p>
            <SvgRules src={imageRules} alt='image-rules' />
            <RulesButton onClick={rulesOff}>
              <img src={iconClose} alt='icon' />
            </RulesButton>
          </RulesContent>
        </RulesContainer>}
    </>
  )
}

export default Rules

Rules.propTypes = {
  rulesShow: PropTypes.bool.isRequired,
  setRules: PropTypes.func.isRequired
}
