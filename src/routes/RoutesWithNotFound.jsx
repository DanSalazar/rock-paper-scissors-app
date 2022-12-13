import { Routes, Route } from 'react-router-dom'
import PropTypes from 'prop-types'
import NotFoundPage from '../Pages/NotFound'

const RoutesWithNotFound = ({ children }) => {
	return (
		<Routes>
			{children}
			<Route path='*' element={<NotFoundPage/> } />
		</Routes>
	)
}

RoutesWithNotFound.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.element,
		PropTypes.arrayOf(PropTypes.element)
	])
}

export default RoutesWithNotFound