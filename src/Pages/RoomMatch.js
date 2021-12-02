import { useEffect, useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { WaitingText } from './styles'
import { Button } from '../Components/styles'
import { RoomMatch } from '../contexts/RoomMatch'
import useSocket from '../hooks/useSocket'
import Layout from './Layout.js'
import Header from '../Components/Header/Header'
import OptionPentagon from '../Components/OptionPentagon/OptionsPentagon'
import RoomMatches from '../Components/Match/RoomMatches'

const RoomMatchPage = () => {
  const [view, setView] = useState(false)
  const [match, setMatch] = useState(false)
  const navigate = useNavigate()
  const roomContext = useContext(RoomMatch)
  const socket = useSocket()

  useEffect(() => {
    if (roomContext.guest) setView(true)

    socket.on('player-joined', player => {
      roomContext.playerJoined(player)
      setView(true)
    })

    socket.on('op-selection', election => {
      roomContext.setOpElection(election)
    })

    socket.on('player-leave', () => {
      roomContext.playerLeaves()
      setView(false)
      setMatch(false)
    })

    return () => {
      roomContext.cleanRoom()
      socket.emit('leave-room')
    }
  }, [])

  const viewOfMatch = () => {
    setMatch(!match)
    roomContext.cleanElections()
  }

  const handleElection = (value) => {
    roomContext.setElection(value)
    socket.emit('election', { value })
    setMatch(true)
  }

  return (
    <Layout buttons={<Button onClick={() => navigate('/room')}>Leave</Button>}>
      <Header/>
      {view
        ? match
          ? <RoomMatches election={roomContext.election} opponent={roomContext.opElection} view={viewOfMatch} />
          : <OptionPentagon select={handleElection}/>
        : <WaitingText>Waiting for guest</WaitingText>
      }
    </Layout>
  )
}

export default RoomMatchPage
