import { lazy } from 'react'
import { Route, Routes } from 'react-router-dom'
import RoutesWithNotFound from './RoutesWithNotFound'

const RoomPage = lazy(() => import('../Pages/Room'))
const NewRoom = lazy(() => import('../Pages/NewRoom'))

const RoomRoutes = () => {
	return (
		<RoutesWithNotFound>
			<Route index element={<NewRoom />} />
			<Route path=':id' element={<RoomPage />} />
		</RoutesWithNotFound>
	)
}

export default RoomRoutes