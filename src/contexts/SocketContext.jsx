import { useEffect, useState, createContext } from 'react'
import io from 'socket.io-client'
import PropTypes from 'prop-types'

export const SocketContext = createContext({})

export default function SocketProvider ({ children }) {
  const [connection, setConnection] = useState(null)

  useEffect(() => {
    try {
      const socket = io('https://serv-io-rock-paper-scissors.herokuapp.com')
      setConnection(socket)
    } catch (e) {
      console.log(e)
    }

    return () => connection.close()
  }, [])

  return <SocketContext.Provider value={connection}>
    {children}
  </SocketContext.Provider>
}

SocketProvider.propTypes = {
  children: PropTypes.node
}
