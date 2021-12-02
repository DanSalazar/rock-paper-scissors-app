import { createContext, useState } from 'react'
import PropTypes from 'prop-types'

export const SingleMatch = createContext({})

export default function SingleMatchProvider ({ children }) {
  const [score, setScore] = useState(0)
  const [currentElection, setElection] = useState('')

  const upScore = (mode) => {
    if (mode === 'win') setScore(score + 1)
    else if (mode === 'lose') setScore(score - 1)
  }

  return (
    <SingleMatch.Provider value={{ score, upScore, currentElection, setElection }}>
      {children}
    </SingleMatch.Provider>
  )
}

SingleMatchProvider.propTypes = {
  children: PropTypes.node
}
