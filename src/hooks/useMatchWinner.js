import { useState, useEffect } from 'react'
import checkWinner from '../checkWinner'

export default function useMatchWinner (election, opponent) {
  const [win, setWin] = useState(false)
  const [draw, setDraw] = useState(false)
  const [lose, setLose] = useState(false)

  useEffect(() => {
    const winnerGame = checkWinner.filter(item => item.name === election)[0]

    if (winnerGame.beats.includes(opponent)) {
      setWin(true)
    } else if (opponent === election) {
      setDraw(true)
    } else if (winnerGame.defeat.includes(opponent)) {
      setLose(true)
    }
  }, [opponent])

  return { win, draw, lose }
}
