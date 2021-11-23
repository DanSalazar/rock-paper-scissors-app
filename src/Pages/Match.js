import { useContext } from 'react'
import { SingleMatch } from '../contexts/SingleMatch'
import Layout from './Layout'
import Header from '../Components/Header/Header'
import Matches from '../Components/Match/Matches'

const MatchPage = () => {
  const { score, currentElection, upScore } = useContext(SingleMatch)

  return (
    <Layout>
      <Header score={score}/>
      <Matches election={currentElection} upScore={upScore}/>
    </Layout>
  )
}

export default MatchPage
