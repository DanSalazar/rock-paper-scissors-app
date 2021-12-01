import {
  BrowserRouter,
  Route,
  Routes
} from 'react-router-dom'
import SingleMatchProvider from './contexts/SingleMatch'
import RoomMatchProvider from './contexts/RoomMatch'
import SocketProvider from './contexts/SocketContext'
import Home from './Pages/Home'
import NewRoom from './Pages/NewRoom'
import RoomMatch from './Pages/RoomMatch'
import MatchPage from './Pages/Match'

function App () {
  return (
    <BrowserRouter>
      <SingleMatchProvider>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='match' element={<MatchPage/>}/>
        </Routes>
      </SingleMatchProvider>
      <SocketProvider>
        <RoomMatchProvider>
          <Routes>
            <Route path='room' element={<NewRoom/>}/>
            <Route path='room/:id' element={<RoomMatch/>}/>
          </Routes>
        </RoomMatchProvider>
      </SocketProvider>
    </BrowserRouter>
  )
}

export default App
