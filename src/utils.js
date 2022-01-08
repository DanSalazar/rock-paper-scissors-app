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
  if (!election) return false
  const winnerGame = gameOptions.find(option => option.name === election)
  if (winnerGame.beats.indexOf(opponent) > -1) return true
  if (opponent === election) return 'draw'
  if (winnerGame.defeat.indexOf(election) > -1) return false
}
