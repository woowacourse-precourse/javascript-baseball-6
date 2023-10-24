export function calculateResult(computerAnswer, userGuess) {
  let strike = 0;
  let ball = 0;

  computerAnswer.forEach((answer, index) => {
    if (answer === userGuess[index]) {
      strike += 1;
    } else if (userGuess.includes(answer)) {
      ball += 1;
    }
  });

  let message = '';
  if (strike === 0 && ball === 0) {
    message = '낫싱';
  } else {
    if (ball > 0) {
      message += `${ball}볼`;
    }
    if (strike > 0) {
      if (ball > 0) {
        message += ' ';
      }
      message += `${strike}스트라이크`;
    }
  }

  return { strike, ball, message };
}
