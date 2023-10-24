const checkBallCount = (inputNumber, randomNumber) => {
  const inputNumberArr = inputNumber.split("");
  const randomNumberArr = randomNumber.split("");

  let scoreCount = { ball: 0, strike: 0 };

  for (let i = 0; i < inputNumberArr.length; i++) {
    if (inputNumberArr[i] === randomNumberArr[i]) {
      scoreCount.strike++;
      continue;
    }
    if (randomNumberArr.includes(inputNumberArr[i])) {
      scoreCount.ball++;
    }
  }

  return scoreCount;
};

export default checkBallCount;
