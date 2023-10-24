function judgeGuess(guess, answer) {
  let ball = 0;
  let strike = 0;

  for (let i = 0; i < 3; i++) {
    if (guess[i] === answer[i]) {
      strike += 1;
    } else if (answer.includes(guess[i])) {
      ball += 1;
    }
  }

  return { ball, strike };
}

export default judgeGuess;
