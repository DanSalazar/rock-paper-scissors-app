import { useState } from 'react'
import { AppContainer, ButtonsWrapper } from './styles'
import PropTypes from 'prop-types'
import Rules from '../Components/Rules/Rules'
import { Button } from '../Components/styles'

const Layout = ({ children, buttons }) => {
  const [viewRules, setViewRules] = useState(false)

  return (
    <AppContainer>
      {children}
      <ButtonsWrapper>
        {buttons}
        <Button onClick={setViewRules}>Rules</Button>
      </ButtonsWrapper>
      <Rules view={viewRules} setView={setViewRules}/>
    </AppContainer>
  )
}

Layout.propTypes = {
  children: PropTypes.element,
  buttons: PropTypes.element
}

export default Layout
