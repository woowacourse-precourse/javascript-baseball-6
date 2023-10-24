const compareNumbers = (computerNumbers, playerNumbers) => {
  let strike = 0;
  let ball = 0;

  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (computerNumbers[i] === playerNumbers[j]) {
        if (i === j) {
          strike++;
        } else {
          ball++;
        }
      }
    }
  }

  const compareResult = printResult(strike, ball);
  return compareResult;
};

const printResult = (strike, ball) => {
  if (ball === 0 && strike === 0) {
    return "낫싱";
  }
  if (ball === 0) {
    return `${strike}스트라이크`;
  }
  if (strike === 0) {
    return `${ball}볼`;
  }
  return `${ball}볼 ${strike}스트라이크`;
};

export default compareNumbers;
