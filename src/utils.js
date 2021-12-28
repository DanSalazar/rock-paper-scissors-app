const gameOptions = [
  {
    name: 'scissors',
    beats: ['paper', 'lizard'],
    defeat: ['rock', 'spock']
  },
  {
    name: 'paper',
    beats: ['rock', 'spock'],
    defeat: ['scissors', 'lizard']
  },
  {
    name: 'rock',
    beats: ['scissors', 'lizard'],
    defeat: ['spock', 'paper']
  },
  {
    name: 'spock',
    beats: ['scissors', 'rock'],
    defeat: ['paper', 'lizard']
  },
  {
    name: 'lizard',
    beats: ['paper', 'spock'],
    defeat: ['rock', 'scissors']
  }
]

export const getWinner = (election, opponent) => {
  const winnerGame = gameOptions.filter(option => option.name === election)[0]
  if (winnerGame.beats.indexOf(opponent) > -1) return true
  if (opponent === election) return 'draw'
  if (winnerGame.defeat.indexOf(election) > -1) return false
}
