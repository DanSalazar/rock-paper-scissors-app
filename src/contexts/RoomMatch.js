import { createContext, useState } from 'react'
import PropTypes from 'prop-types'

export const RoomMatch = createContext({})

export default function RoomMatchProvider ({ children }) {
  const [score, setScore] = useState({ host: 0, guest: 0 })
  const [user, setUser] = useState('')
  const [guest, setGuest] = useState('')
  const [election, setElection] = useState('')
  const [opElection, setOpElection] = useState('')
  const [room, setCurrentRoom] = useState({})

  const setRoom = (room) => {
    if (room.name) {
      setUser(room.players[0])
      setCurrentRoom(room)
    }
  }

  const playerJoined = (player) => {
    setGuest(player)
  }

  const setJoinedRoom = room => {
    setGuest(room.players[0])
    setUser(room.players[1])
    setCurrentRoom(room)
  }

  const playerLeaves = () => {
    setGuest('')
  }

  const cleanElections = () => {
    setElection('')
    setOpElection('')
  }

  const setScoreTo = player => {
    setScore({ ...score, player: player + 1 })
  }

  const cleanRoom = () => {
    setUser('')
    setGuest('')
    setScoreTo({ host: 0, guest: 0 })
    cleanElections()
    setRoom({})
  }

  return (
    <RoomMatch.Provider
      value={{
        score,
        setScoreTo,
        election,
        user,
        setElection,
        opElection,
        setOpElection,
        guest,
        playerJoined,
        room,
        playerLeaves,
        setRoom,
        cleanRoom,
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
