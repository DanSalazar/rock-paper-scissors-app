import { useEffect, useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { WaitingText } from './styles'
import { Button } from '../Components/styles'
import { RoomMatch } from '../contexts/RoomMatch'
import toast, { Toaster } from 'react-hot-toast'
import useSocket from '../hooks/useSocket'
import Layout from './Layout.js'
import HeaderRoom from '../Components/Header/HeaderRoom'
import OptionPentagon from '../Components/OptionPentagon/OptionsPentagon'
import RoomMatches from '../Components/Match/RoomMatches'

const RoomMatchPage = () => {
  const roomContext = useContext(RoomMatch)
  const [view, setView] = useState(false)
  const [match, setMatch] = useState(false)
  const navigate = useNavigate()
  const socket = useSocket()

  const resetViewsAndScore = () => {
    setMatch(false)
    setView(false)
    roomContext.cleanScore()
  }

  useEffect(() => {
    if (roomContext.room.players[1]) setView(true)

    socket.on('player-joined', (player) => {
      roomContext.playerJoined(player)
      setView(true)
    })

    socket.on('op-selection', (election) => {
      roomContext.setOpElection(election)
    })

    socket.on('play-again', () => {
      setMatch(false)
      roomContext.cleanElections()
      toast(`Guest request a new game`, { icon: '⚔️' })
    })

    socket.on('player-leave', (user) => {
      roomContext.playerLeaves()
      resetViewsAndScore()
      toast(`${user} leaves`, { icon: '😓' })
    })

    return () => {
      socket.off('player-joined')
      socket.off('op-selection')
      socket.off('play-again')
      socket.off('player-leave')
    }
  }, [])

  const playAgain = () => {
    setMatch(!match)
    socket.emit('play-again')
    roomContext.cleanElections()
  }

  const handleLeaveOfRoom = () => {
    navigate('/room')
    roomContext.cleanRoom()
    socket.emit('leave-room')
  }

  const handleElection = (value) => {
    roomContext.setElection(value)
    socket.emit('election', { value })
    setMatch(true)
  }

  const viewMatch = match 
    ? <RoomMatches
        election={roomContext.election}
        opponent={roomContext.opElection}
        playAgain={playAgain}
      />
    : <OptionPentagon select={handleElection} />

  return (
    <Layout buttons={<Button onClick={handleLeaveOfRoom}>Leave</Button>}>
      <HeaderRoom />
      {view ? viewMatch : <WaitingText>Waiting for guest</WaitingText>}
      <Toaster position='top-right' />
    </Layout>
  )
}

export default RoomMatchPage
