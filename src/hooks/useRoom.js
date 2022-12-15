import { useEffect, useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { RoomContext } from '../contexts/RoomContext'
import useSocket from '../hooks/useSocket'
import toast from 'react-hot-toast'

export default function useRoom() {
  const [hasGuest, setGuest] = useState(false)
  const [match, setMatch] = useState(false)
	const roomContext = useContext(RoomContext)
  const navigate = useNavigate()
	const socket = useSocket()

	const resetViewsAndScore = () => {
    setMatch(false)
    setGuest(false)
    roomContext.cleanScore()
  }

  useEffect(() => {
    // When a guest join to a active room, set the View to start the match
    if (roomContext.room?.players[1]) setGuest(true)

    const onPlayerJoin = (player) => {
      roomContext.playerJoined(player)
      setGuest(true)
    }

    const onOpponentSelection = (election) => {
      roomContext.setOpponent(election)
      toast(`Guest has selected`, { icon: '🏹' })
    }

    const onPlayAgain = () => {
      setMatch(false)
      roomContext.cleanElections()
      toast(`Guest request a new game`, { icon: '⚔️' })
    } 

    const onPlayerLeave = (user) => {
      roomContext.playerLeaves()
      resetViewsAndScore()
      toast(`${user} leaves`, { icon: '😓' })
    }

    if (roomContext.room && socket.connected) {
      socket.on('player-joined', onPlayerJoin)
      socket.on('op-selection', onOpponentSelection)
      socket.on('play-again', onPlayAgain)
      socket.on('player-leave', onPlayerLeave)
    }

    return () => {
      if (roomContext.room && socket.connected) {
        socket.off('player-joined', onPlayerJoin)
        socket.off('op-selection', onOpponentSelection)
        socket.off('play-again', onPlayAgain)
        socket.off('player-leave', onPlayerLeave)
      }
    }
  }, [])

  const playAgain = () => {
    setMatch(!match)
    socket.emit('play-again')
    roomContext.cleanElections()
  }

  const handleLeaveRoom = () => {
    navigate('/room', {
      replace: true
    })
    roomContext.cleanRoom()
    socket.emit('leave-room')
  }

  const handleElection = (value) => {
    roomContext.setElection(value)
    socket.emit('election', { value })
    setMatch(true)
  }

  return {
    hasGuest,
    room: roomContext.room,
    match,
    resetViewsAndScore,
    playAgain,
    handleLeaveRoom,
    handleElection,
    election: roomContext.election,
    opponent: roomContext.opponent
  }
}