import { RoomSection, InputController, Label, ButtonsWrapper } from './styles'
import { Button } from '../styles'
import useField from '../../hooks/useField'

const RoomMenu = () => {
  const username = useField('text')
  const room = useField('text')
  const roomPass = useField('text')

  return (
    <RoomSection>
      <Label>Name</Label>
      <InputController {...username}/>
      <Label>Room Name</Label>
      <InputController {...room}/>
      <Label>Password</Label>
      <InputController {...roomPass} />
      <ButtonsWrapper>
        <Button>Create</Button>
        <Button>Join</Button>
      </ButtonsWrapper>
    </RoomSection>
  )
}

export default RoomMenu
