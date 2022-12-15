import { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { SingleMatch } from '../contexts/SingleMatch'
import Layout from './Layout'
import Header from '../Components/Header/Header'
import Match from '../Components/Match/Match'

const MatchPage = () => {
  const { score, currentElection, upScore } = useContext(SingleMatch)

  if (!currentElection) return <Navigate to='/' replace />

  return (
    <Layout>
      <Header score={score} viewScore={true} />
      <Match election={currentElection} upScore={upScore} />
    </Layout>
  )
}

export default MatchPage
