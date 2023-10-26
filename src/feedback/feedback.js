import print from './print.js';

const feedback = async (computer, player) => {
  let strike = 0;
  let ball = 0;
  computer.forEach((value, idx) => {
    const playerNum = Number(player[idx]);
    if (value === playerNum) strike += 1;
    else if (computer.includes(playerNum)) ball += 1;
  });
  return print(strike, ball);
};

export default feedback;
