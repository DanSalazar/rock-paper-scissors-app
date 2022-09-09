import { useState, useRef } from 'react'
import { ChatContainer, ChatHeader, Messages, FormChat, ChatInput, Message } from './styles.js'
import { Button } from '../styles'
import PropTypes from 'prop-types'

function Chat ({ onCloseChat }) {
	const [message, setMessage] = useState('')
	const [messages, setMessages] = useState([{ author: 'Foo', content: 'Bar' }, { author: 'Cobra', content: 'Kai' }])
	const messagesContainer = useRef(null)

	const onChange = ({ target: { value } }) => setMessage(value)

	const onSubmit = (e) => {
		e.preventDefault()
		setMessages([...messages, message])
		setMessage('')
	}

	return (
		<ChatContainer>
			<ChatHeader>
				<span>Chat</span>
				<button>
					&times;
				</button>
			</ChatHeader>
			<Messages ref={messagesContainer} >
				{messages.map((m, i) => (
					<Message className='message' key={i} >
						<p className="author">
							{m.author}
						</p>
						<div className="content">
							{m.content}
						</div>
					</Message>
				))}
			</Messages>
			<FormChat onSubmit={onSubmit} action=''>
				<ChatInput value={message} onChange={onChange} placeholder='Message' />
				<Button>
					Submit
				</Button>
			</FormChat>
		</ChatContainer>
	)
}

Chat.propTypes = {
	onCloseChat: PropTypes.func.isRequired
}

export default Chat