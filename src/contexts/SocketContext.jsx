import { useEffect, useState, createContext } from 'react'
import io from 'socket.io-client'
import PropTypes from 'prop-types'

export const SocketContext = createContext({})

const server = import.meta.env.VITE_SERVER

export default function SocketProvider({ children }) {
  const [connection, setConnection] = useState(null)

  useEffect(() => {
    const socket = io(server, {
      reconnection: false
    })

    setConnection(socket)
    return () => connection.close()
  }, [])

  return (
    <SocketContext.Provider value={connection}>
      {children}
    </SocketContext.Provider>
  )
}

SocketProvider.propTypes = {
  children: PropTypes.node
}
