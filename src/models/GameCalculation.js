const GameCalculation = (userInput, answer) => {
  let ball = 0;
  let strike = 0;

  for (let i = 0; i < userInput.length; i++) {
    if (userInput[i] !== answer[i] && userInput.includes(answer[i])) {
      ball += 1;
    } else if (userInput[i] === answer[i]) {
      strike += 1;
    }
  }

  return { ball, strike };
};

export default GameCalculation;
