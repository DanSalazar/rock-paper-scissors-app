import { useEffect, useContext } from 'react'
import useSocket from './useSocket'
import { RoomContext } from '../contexts/RoomContext'

function useChat() {
  const socket = useSocket()
  const { room, pushMessage, messages } = useContext(RoomContext)

  const createNewMessage = (value) => {
    if (!value) {
      return
    }
    
    const author = room.players[0]

    const message = {
      content: value,
      author
    }

    pushMessage(message)
    socket.emit('new-message', message)
  }

  useEffect(() => {
    const newMessage = pushMessage

    socket.on('new-message', newMessage)

    return () => socket.off('new-message', newMessage)
  }, [socket])

  return {
    createNewMessage,
    messages,
    currentName: room.players[0]
  }
}

export default useChat
