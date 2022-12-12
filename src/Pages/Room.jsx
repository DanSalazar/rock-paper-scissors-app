import { useNavigate } from 'react-router-dom'
import useRoom from '../hooks/useRoom'
import { WaitingText } from './styles'
import { Button } from '../Components/styles'
import toast, { Toaster } from 'react-hot-toast'
import Layout from './Layout'
import HeaderRoom from '../Components/Header/HeaderRoom'
import OptionPentagon from '../Components/OptionPentagon/OptionsPentagon'
import MatchRoom from '../Components/Match/MatchRoom'

const RoomPage = () => {
  const {
    hasGuest,
    match,
    resetViewsAndScore,
    playAgain,
    handleLeaveRoom,
    handleElection,
    election,
    opponent
  } = useRoom()

  const viewMatch = match 
    ? <MatchRoom
        election={election}
        opponent={opponent}
        playAgain={playAgain}
      />
    : <OptionPentagon select={handleElection} />

  return (
    <Layout buttons={<Button onClick={handleLeaveRoom}>Leave</Button>}>
      <HeaderRoom />
      {hasGuest ? viewMatch : <WaitingText>Waiting for guest</WaitingText>}
      <Toaster position='top-right' />
    </Layout>
  )
}

export default RoomPage
