function checkInputWithAnswer(answer, userInput) {
  const result = {
    strike: 0,
    ball: 0, 
    nothing: 0,
  };
  const userInputArr = userInput.split('');
  let i = 0;
  while (i < 3) {
    if (answer.includes(Number(userInputArr[i]))){
      if (Number(userInputArr[i]) === answer[i]) {
        result.strike += 1
      } else {
        result.ball += 1
      }
    } else {
      result.nothing += 1
    }
    i += 1;
  }
  return result
}

export default checkInputWithAnswer;