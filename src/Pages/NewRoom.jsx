import { useNavigate } from 'react-router-dom'
import { Button } from '../Components/styles'
import Layout from './Layout'
import RoomMenu from '../Components/RoomMenu/RoomMenu'
import Header from '../Components/Header/Header'

const NewRoom = () => {
  const navigate = useNavigate()

  return (
    <Layout buttons={<Button onClick={() => navigate('/')}>Single</Button>}>
      <Header />
      <RoomMenu></RoomMenu>
    </Layout>
  )
}

export default NewRoom
