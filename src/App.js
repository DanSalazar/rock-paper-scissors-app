import {
  BrowserRouter,
  Route,
  Routes
} from 'react-router-dom'
import SingleMatchProvider from './contexts/SingleMatch'
import Home from './Pages/Home'
import NewRoom from './Pages/NewRoom'
import MatchPage from './Pages/Match'

function App () {
  return (
    <BrowserRouter>
      <SingleMatchProvider>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/match' element={<MatchPage/>}/>
        </Routes>
      </SingleMatchProvider>
      <Routes>
        <Route path='/room' element={<NewRoom/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
