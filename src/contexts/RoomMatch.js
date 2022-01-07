import { createContext, useState } from 'react'
import PropTypes from 'prop-types'

export const RoomMatch = createContext({})

export default function RoomMatchProvider({ children }) {
  const [score, setScore] = useState({ host: 0, guest: 0 })
  const [election, setElection] = useState('')
  const [opElection, setOpElection] = useState('')
  const [room, setCurrentRoom] = useState({})

  const setRoom = (room) => {
    if (room.name) {
      setCurrentRoom(room)
    }
  }

  const playerJoined = (player) => {
    setCurrentRoom({ ...room, players: room.players.concat(player) })
  }

  const setJoinedRoom = (room) => {
    setCurrentRoom({ ...room, players: [room.players[1], room.players[0]] })
  }

  const playerLeaves = () => {
    setCurrentRoom({ ...room, players: room.players.slice(0, 1) })
  }

  const cleanElections = () => {
    setElection('')
    setOpElection('')
  }

  const setScoreTo = (player) => {
    setScore({ ...score, [player]: score[player] + 1 })
  }

  const cleanScore = () => setScore({ host: 0, guest: 0 })

  const cleanRoom = () => {
    cleanScore()
    cleanElections()
    setCurrentRoom({})
  }

  return (
    <RoomMatch.Provider
      value={{
        score,
        setScoreTo,
        election,
        setElection,
        opElection,
        setOpElection,
        playerJoined,
        room,
        playerLeaves,
        setRoom,
        cleanRoom,
        cleanScore,
        setJoinedRoom,
        cleanElections
      }}>
      {children}
    </RoomMatch.Provider>
  )
}

RoomMatchProvider.propTypes = {
  children: PropTypes.node
}
