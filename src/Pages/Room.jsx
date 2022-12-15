import { useState } from 'react'
import { Navigate } from 'react-router-dom'
import useRoom from '../hooks/useRoom'
import { WaitingText } from './styles'
import { Button } from '../Components/styles'
import toast, { Toaster } from 'react-hot-toast'
import Layout from './Layout'
import HeaderRoom from '../Components/Header/HeaderRoom'
import OptionPentagon from '../Components/OptionPentagon/OptionsPentagon'
import MatchRoom from '../Components/Match/MatchRoom'
import Chat from '../Components/Chat'

const RoomPage = () => {
  const [openChat, setChat] = useState(false)

  const {
    hasGuest,
    match,
    room,
    resetViewsAndScore,
    playAgain,
    handleLeaveRoom,
    handleElection,
    election,
    opponent
  } = useRoom()

  if (!room) return <Navigate to='/room' replace={true} />

  const viewMatch = match ? (
    <MatchRoom election={election} opponent={opponent} playAgain={playAgain} />
  ) : (
    <OptionPentagon select={handleElection} />
  )

  const Buttons = (
    <>
      <Button onClick={() => setChat(true)}>Chat</Button>
      <Button onClick={handleLeaveRoom}>Leave</Button>
    </>
  )

  return (
    <Layout buttons={Buttons}>
      <HeaderRoom />
      {hasGuest ? viewMatch : <WaitingText>Waiting for guest</WaitingText>}
      <Toaster position='top-right' />
      <Chat open={openChat} onCloseChat={() => setChat(false)} />
    </Layout>
  )
}

export default RoomPage
