import { useContext, useState, useEffect } from 'react'
import { RoomMatch } from '../../contexts/RoomMatch'
import { useNavigate } from 'react-router-dom'
import { RoomSection, InputController, Label, ButtonsWrapper, Error } from './styles'
import { Button } from '../styles'
import useField from '../../hooks/useField'
import useSocket from '../../hooks/useSocket'

const RoomMenu = () => {
  const roomContext = useContext(RoomMatch)
  const navigate = useNavigate()
  const socket = useSocket()
  const username = useField('text')
  const room = useField('text')
  const roomPass = useField('text')
  const [errors, setErrors] = useState({ error: false, message: '' })
  const [status, setStatus] = useState('')

  useEffect(() => {
    socket.on('new-room-created', room => {
      roomContext.setRooms(room)
      navigate(`${room.room}`)
    })

    socket.on('joined', room => {
      roomContext.setRoomTo(room)
      navigate(`${room.room}`)
    })
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()

    if (status === 'Create') {
      socket.emit('new-room', { room: room.value, host: username.value, password: roomPass.value })
    } else {
      socket.emit('join-room', { room: room.value, guest: username.value, password: roomPass.value })
      setErrors('true')
    }
  }

  return (
    <RoomSection onSubmit={handleSubmit}>
      <Label>Name</Label>
      <InputController {...username}/>
      <Label>Room Name</Label>
      <InputController {...room}/>
      <Label>Password</Label>
      <InputController {...roomPass} />
      <Error>{errors.error && errors.message}</Error>
      <ButtonsWrapper>
        <Button onClick={({ target }) => setStatus(target.innerHTML)}>Create</Button>
        <Button onClick={({ target }) => setStatus(target.innerHTML)}>Join</Button>
      </ButtonsWrapper>
    </RoomSection>
  )
}

export default RoomMenu
