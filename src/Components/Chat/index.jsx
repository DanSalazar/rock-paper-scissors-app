import { useState, useRef } from 'react'
import { ChatContainer, ChatHeader, FormChat, ChatInput } from './styles.js'
import { ButtonColored } from '../styles'
import MessagesContainer from './Messages'
import useField from '../../hooks/useField'
import useChat from '../../hooks/useChat'
import PropTypes from 'prop-types'

function Chat ({ open, onCloseChat }) {
	const message = useField('text')
	const { createNewMessage, messages, currentName } = useChat()

	const onNewMessage = (e) => {
		e.preventDefault()
		createNewMessage(message.value)
		message.clearValue()
	}

	return (
		<ChatContainer style={{ bottom: open ? '0' : '-32rem' }} >
			<ChatHeader>
				<span>Chat</span>
				<button onClick={onCloseChat} >
					&times;
				</button>
			</ChatHeader>
			<MessagesContainer messages={messages} currentName={currentName} />
			<FormChat onSubmit={onNewMessage} >
				<ChatInput {...message} placeholder={'Write a message'} />
				<ButtonColored onClick={onNewMessage} >
					Submit
				</ButtonColored>
			</FormChat>
		</ChatContainer>
	)
}

Chat.propTypes = {
	open: PropTypes.bool.isRequired,
	onCloseChat: PropTypes.func.isRequired
}

export default Chat