import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '../Components/styles'
import { SingleMatch } from '../contexts/SingleMatch'
import Layout from './Layout'
import Header from '../Components/Header/Header'
import OptionPentagon from '../Components/OptionPentagon/OptionsPentagon'

const Home = () => {
  const { setElection } = useContext(SingleMatch)
  const navigate = useNavigate()

  const select = (election) => {
    setElection(election)
    navigate('/match')
  }

  return (
    <Layout buttons={<Button onClick={() => navigate('/room')}>Room</Button>}>
      <Header viewScore={false} />
      <OptionPentagon select={select}/>
    </Layout>
  )
}

export default Home
