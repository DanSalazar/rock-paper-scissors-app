import { lazy, Suspense } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import RoutesWithNotFound from './routes/RoutesWithNotFound'
import RoomContextProvider from './contexts/RoomContext'
import SocketProvider from './contexts/SocketContext'
import FallbackContainer from './Components/Fallback'

const Home = lazy(() => import('./Pages/Home'))
const RoomRoutes = lazy(() => import('./routes/RoomRoutes'))

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<FallbackContainer/ >}>
        <SocketProvider>
          <RoomContextProvider>
            <RoutesWithNotFound>
              <Route path='/'>
                <Route index element={<Home />} />
                <Route path='room/*' element={<RoomRoutes />} />
              </Route>
            </RoutesWithNotFound>
          </RoomContextProvider>
        </SocketProvider>
      </Suspense>
    </BrowserRouter>
  )
}

export default App
