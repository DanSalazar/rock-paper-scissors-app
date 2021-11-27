import { createContext, useState } from 'react'
import PropTypes from 'prop-types'

export const RoomMatch = createContext({})

export default function RoomMatchProvider ({ children }) {
  const [score, setScore] = useState({ host: 0, guest: 0 })
  const [, setHost] = useState(false)
  const [existGuest, setGuest] = useState(false)
  const [election, setElection] = useState('')
  const [opElection, setOpElection] = useState('')
  const [room, setRoom] = useState({})

  const setRooms = (room) => {
    setHost(true)
    setRoom(room)
  }

  const playerJoined = (player) => {
    setRoom({ ...room, ...player })
  }

  const setRoomTo = (room) => {
    setGuest(true)
    setHost(true)
    setRoom(room)
  }

  const setScoreTo = (player) => {
    setScore({ ...score, player: player + 1 })
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
        existGuest,
        playerJoined,
        room,
        setRooms,
        setRoomTo
      }}>
      {children}
    </RoomMatch.Provider>
  )
}

RoomMatchProvider.propTypes = {
  children: PropTypes.node
}
