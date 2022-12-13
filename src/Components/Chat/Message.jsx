import { Message } from './styles.js'
import PropTypes from 'prop-types'

const MessageContainer = ({ currentName, author, content }) => {
	const isGuest = currentName === author ? 'author-m' : 'guest-m'

	return (
		<Message className={isGuest}>
			<p className={isGuest} >
				{author}
			</p>
			<div className="content">
				{content}
			</div>
		</Message> 
	)
}

MessageContainer.propTypes = {
  currentName: PropTypes.string,
  author: PropTypes.string,
  content: PropTypes.string
}

export default MessageContainer