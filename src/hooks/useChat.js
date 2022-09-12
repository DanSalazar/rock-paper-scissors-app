import { useEffect, useContext } from 'react'
import useSocket from './useSocket'
import { RoomMatch } from '../contexts/RoomMatch'

function useChat () {
	const socket = useSocket()
	const roomState = useContext(RoomMatch)

	const onNewMessage = (value) => {
	  const author = roomState.room.players[0]
	  const message = {
	    message: value,
	    author
	  }
	  roomState.pushMessage(message)
	  socket.emit('new-message', message)
	}

	useEffect(() => {
		const newMessage = (m) => {
			roomState.pushMessage(m)
		}

		socket.on('new-message', newMessage)

    return () => socket.off('new-message', newMessage)
	}, [socket, roomState])

	return { onNewMessage, messages: roomState.messages }
}

export default useChat