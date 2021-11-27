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
  const store = useContext(RoomMatch)
  const socket = useSocket()

  useEffect(() => {
    if (store.existGuest) setView(true)

    socket.on('player-joined', player => {
      store.playerJoined(player)
      setView(true)
    })

    socket.on('op-selection', election => {
      console.log(election)
      store.setOpElection(election)
    })
  }, [])

  const handleElection = (value) => {
    store.setElection(value)
    socket.emit('election', { room: store.room.room, value })
    setMatch(true)
  }

  return (
    <Layout buttons={<Button onClick={() => navigate('/room')}>Leave</Button>}>
      <Header/>
      {view
        ? match
          ? <RoomMatches election={store.election} opponent={store.opElection} />
          : <OptionPentagon select={handleElection}/>
        : <WaitingText>Waiting for guest</WaitingText>
      }
    </Layout>
  )
}

export default RoomMatchPage
