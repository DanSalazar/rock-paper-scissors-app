import {
  BrowserRouter,
  Route,
  Routes
} from 'react-router-dom'
import SingleMatchProvider from './contexts/SingleMatch'
import RoomContextProvider from './contexts/RoomContext'
import SocketProvider from './contexts/SocketContext'
import Home from './Pages/Home'
import MatchPage from './Pages/Match'
import NewRoom from './Pages/NewRoom'
import RoomPage from './Pages/Room'

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
                <RoomContextProvider>
                  <NewRoom/>
                </RoomContextProvider>
              } />
              <Route path='room/:id' element={
                <RoomContextProvider>
                  <RoomPage/>
                </RoomContextProvider>
              } />
            </Route>
          </Routes>
        </SingleMatchProvider>
      </SocketProvider>
    </BrowserRouter>
  )
}

export default App
