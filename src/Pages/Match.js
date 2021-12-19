import { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { SingleMatch } from '../contexts/SingleMatch'
import Layout from './Layout'
import Header from '../Components/Header/Header'
import Matches from '../Components/Match/Matches'

const MatchPage = () => {
  const { score, currentElection, upScore } = useContext(SingleMatch)

  if (!currentElection) return <Navigate to='/' replace/>

  return (
    <Layout>
      <Header score={score} viewScore={true}/>
      <Matches election={currentElection} upScore={upScore}/>
    </Layout>
  )
}

export default MatchPage
