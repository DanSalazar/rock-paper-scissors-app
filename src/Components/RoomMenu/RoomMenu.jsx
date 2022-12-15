import { useContext, useState, useEffect } from 'react'
import { RoomContext } from '../../contexts/RoomContext'
import { useNavigate } from 'react-router-dom'
import {
  RoomSection,
  InputController,
  Label,
  ButtonsWrapper,
  Error
} from './styles'
import { Button } from '../styles'
import useField from '../../hooks/useField'
import useSocket from '../../hooks/useSocket'

const RoomMenu = () => {
  const roomContext = useContext(RoomContext)
  const navigate = useNavigate()
  const socket = useSocket()
  // Indicates if the server is not running or socket can not make a connection
  const status_message = socket.disconnected ? 'You are currently offline' : ''
  const username = useField('text')
  const roomName = useField('text')
  const roomPass = useField('text')
  const [errors, setErrors] = useState({ error: socket.disconnected, message: status_message })
  const [status, setStatus] = useState('')

  useEffect(() => {
    const onCreateRoom = (room) => {
      roomContext.setRoom(room)
      navigate(room.name)
    }

    const onGuestJoin = (room) => {
      roomContext.setJoinedRoom(room)
      navigate(room.name)
    }
    
    socket.on('error-room', setErrors)
    socket.on('new-room-created', onCreateRoom)
    socket.on('joined', onGuestJoin)

    return () => {
      socket.off('error-room', setErrors)
      socket.off('new-room-created')
      socket.off('joined')
    }
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()

    if (status === 'Create') {
      socket.emit('new-room', {
        room: roomName.value,
        host: username.value,
        password: roomPass.value
      })
    }

    if (status === 'Join') {
      socket.emit('join-room', {
        room: roomName.value,
        guest: username.value,
        password: roomPass.value
      })
    }
  }

  return (
    <RoomSection onSubmit={handleSubmit}>
      <Label>Name</Label>
      <InputController {...username} disabled={socket.disconnected} />
      <Label>Room Name</Label>
      <InputController {...roomName} disabled={socket.disconnected} />
      <Label>Password</Label>
      <InputController {...roomPass} disabled={socket.disconnected} />
      <Error>{errors.error && errors.message}</Error>
      <ButtonsWrapper>
        <Button onClick={({ target }) => setStatus(target.textContent)} disabled={socket.disconnected}>
          Create
        </Button>
        <Button onClick={({ target }) => setStatus(target.textContent)} disabled={socket.disconnected}>
          Join
        </Button>
      </ButtonsWrapper>
    </RoomSection>
  )
}

export default RoomMenu
