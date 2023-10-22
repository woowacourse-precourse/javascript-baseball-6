import print from './print.js'

const feedback = async (computer, player) => {
  let strike = 0,
    ball = 0,
    feedback = ''
  for (let [idx, value] of computer.entries()) {
    const playerNum = Number(player[idx])
    if (value === playerNum) strike++
    else if (computer.includes(playerNum)) ball++
  }
  return print(strike, ball, feedback)
}

export default feedback
