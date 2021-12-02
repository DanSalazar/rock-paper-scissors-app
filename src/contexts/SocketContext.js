import { useEffect, useState, createContext } from 'react'
import io from 'socket.io-client'
import PropTypes from 'prop-types'

export const SocketContext = createContext({})

export default function SocketProvider ({ children }) {
  const [connection, setConnection] = useState(null)

  useEffect(() => {
    try {
      const socket = io('http://localhost:3001')
      setConnection(socket)
    } catch (e) {
      console.log(e)
    }

    return () => {
      if (connection !== null) return connection.close()
    }
  }, [])

  return <SocketContext.Provider value={connection}>
    {children}
  </SocketContext.Provider>
}

SocketProvider.propTypes = {
  children: PropTypes.node
}
