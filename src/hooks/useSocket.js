import { useContext } from 'react'
import { SocketContext } from '../contexts/SocketContext'

export default function useSocket () {
  const socket = useContext(SocketContext)

  if (socket === undefined) throw new Error('useSocket as only available in SocketContext')

  return socket
}
