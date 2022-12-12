const rules = [
  {
    name: 'scissors',
    beats: ['paper', 'lizard']
  },
  {
    name: 'paper',
    beats: ['rock', 'spock']
  },
  {
    name: 'rock',
    beats: ['scissors', 'lizard']
  },
  {
    name: 'spock',
    beats: ['scissors', 'rock']
  },
  {
    name: 'lizard',
    beats: ['paper', 'spock']
  }
]

/**
 * @param {string} election
 * @param {string} opponent
 * @return {'Win' | 'Lose' | 'Draw'} - The result of the match
 */
export const getWinner = (election, opponent) => {
  if (!election && !opponent) return false
  const choose = rules.find(r => r.name === election)
  
  if (opponent === election) return 'Draw'
  
  if (choose.beats.indexOf(opponent) > -1) return 'Win'
  else return 'Lose'
}
