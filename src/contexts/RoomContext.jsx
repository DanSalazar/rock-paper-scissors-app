import { createContext, useState } from 'react'
import PropTypes from 'prop-types'

export const RoomContext = createContext({})

export default function RoomContextProvider({ children }) {
  const [score, setScore] = useState({ host: 0, guest: 0 })
  const [election, setElection] = useState('')
  const [opponent, setOpponent] = useState('')
  const [room, setCurrentRoom] = useState(null)

  const setRoom = (room) => {
    if (room.name) {
      setCurrentRoom(room)
    }
  }

  const playerJoined = (player) => {
    setCurrentRoom({ ...room, players: [room.players[0], player] })
  }

  const setJoinedRoom = (room) => {
    setCurrentRoom({ ...room, players: [room.players[1], room.players[0]] })
  }

  const playerLeaves = () => {
    setCurrentRoom({ ...room, players: [room.players[0]] })
  }

  const cleanElections = () => {
    setElection('')
    setOpponent('')
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

  const pushMessage = (message) => {
    setCurrentRoom((currentRoom) => {
      return {
        ...currentRoom,
        messages: currentRoom.messages.concat(message)
      }
    })
  }

  return (
    <RoomContext.Provider
      value={{
        score,
        setScoreTo,
        election,
        setElection,
        opponent,
        setOpponent,
        playerJoined,
        room,
        playerLeaves,
        setRoom,
        cleanRoom,
        cleanScore,
        setJoinedRoom,
        cleanElections,
        pushMessage
      }}>
      {children}
    </RoomContext.Provider>
  )
}

RoomContextProvider.propTypes = {
  children: PropTypes.node
}
