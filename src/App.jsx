import { lazy, Suspense } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import RoutesWithNotFound from './routes/RoutesWithNotFound'
import SingleMatchProvider from './contexts/SingleMatch'
import RoomContextProvider from './contexts/RoomContext'
import SocketProvider from './contexts/SocketContext'
import Home from './Pages/Home'
import MatchPage from './Pages/Match'

const RoomRoutes = lazy(() => import('./routes/RoomRoutes'))

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={'Loading'}>
        <SocketProvider>
          <SingleMatchProvider>
            <RoomContextProvider>
              <RoutesWithNotFound>
                <Route path='/'>
                  <Route index element={<Home />} />
                  <Route path='match' element={<MatchPage />} />
                  <Route path='room/*' element={<RoomRoutes />} />
                </Route>
              </RoutesWithNotFound>
            </RoomContextProvider>
          </SingleMatchProvider>
        </SocketProvider>
      </Suspense>
    </BrowserRouter>
  )
}

export default App
