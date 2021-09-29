import React, { useState } from 'react'
import { AppContainer, Button } from './style'
import Header from '../../Components/Header/Header'
import Rules from '../../Components/Rules/Rules'
import Matches from '../../Components/Match/Matches'
import OptionPentagon from '../../Components/OptionPentagon/OptionsPentagon'

const Home = () => {
  const [match, setMatch] = useState(false)
  const [rulesShow, setRules] = useState(false)
  const [election, setElection] = useState('')

  const handleElection = (value) => {
    setElection(value)
    setMatch(!match)
  }

  const returnGame = () => {
    setMatch(!match)
  }

  return (
    <AppContainer>
      <Header />
      {match
        ? <Matches election={election} returnGame={returnGame} />
        : <OptionPentagon handleElection={handleElection} />}
      <Button onClick={() => setRules(true)}> Rules </Button>
      <Rules rulesShow={rulesShow} setRules={setRules} />
    </AppContainer>
  )
}

export default Home
