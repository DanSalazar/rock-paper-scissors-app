import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '../Components/styles'
import Layout from './Layout'
import Header from '../Components/Header/Header'
import OptionPentagon from '../Components/OptionPentagon/OptionsPentagon'
import Match from '../Components/Match/Match'

const Home = () => {
  const [match, setMatch] = useState(false)
  const [localScore, setLocalScore] = useState(0)
  const [election, setElection] = useState('')
  const navigate = useNavigate()

  const upScore = (status) => {
    if (status === 'win') setLocalScore(localScore + 1)
    if (status === 'lose' && localScore > 0) setLocalScore(localScore - 1)
  }

  const select = (election) => {
    setMatch(true)
    setElection(election)
  }

  const playAgain = () => setMatch(false)

  return (
    <Layout buttons={<Button onClick={() => navigate('/room')}>Room</Button>}>
      <Header score={localScore} viewScore={match} />
      {match 
        ? <Match election={election} upScore={upScore} playAgain={playAgain} /> 
        : <OptionPentagon select={select} />}
    </Layout>
  )
}

export default Home
