import {
  BrowserRouter,
  Route,
  Routes
} from 'react-router-dom'
import SingleMatchProvider from './contexts/SingleMatch'
import RoomMatchProvider from './contexts/RoomMatch'
import SocketProvider from './contexts/SocketContext'
import Home from './Pages/Home'
import MatchPage from './Pages/Match'
import NewRoom from './Pages/NewRoom'
import RoomMatchPage from './Pages/RoomMatch'

function App () {
  return (
    <BrowserRouter>
      <SocketProvider>
        <SingleMatchProvider>
          <Routes>
            <Route path='/'>
              <Route index element={<Home/>} />
              <Route path='match' element={<MatchPage/>} />
              <Route path='room' element={
                <RoomMatchProvider>
                  <NewRoom/>
                </RoomMatchProvider>
              } />
              <Route path='room/:id' element={
                <RoomMatchProvider>
                  <RoomMatchPage/>
                </RoomMatchProvider>
              } />
            </Route>
          </Routes>
        </SingleMatchProvider>
      </SocketProvider>
    </BrowserRouter>
  )
}

export default App
