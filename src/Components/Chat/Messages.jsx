import { useEffect, useRef } from 'react'
import { Messages } from './styles.js'
import MessageContainer from './Message'
import PropTypes from 'prop-types'

const MessagesContainer = ({ messages, currentName }) => {
  const messagesContainer = useRef(null)

  useEffect(() => {
    messagesContainer.current.scrollTop = messagesContainer.current.scrollHeight
  }, [messages])

  return (
    <Messages ref={messagesContainer}>
      {messages.map((message, i) => (
        <MessageContainer
          key={i}
          content={message.content}
          author={message.author}
          currentName={currentName}
        />
      ))}
    </Messages>
  )
}

MessagesContainer.propTypes = {
  messages: PropTypes.array,
  currentName: PropTypes.string
}

export default MessagesContainer
