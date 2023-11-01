const checkBallCount = (inputNumber, randomNumber) => {
  const scoreCount = inputNumber.split('').reduce(
    (count, digit, index) => {
      const randomDigit = randomNumber[index];

      if (digit === randomDigit) {
        count.strike += 1;
      } else if (randomNumber.includes(digit)) {
        count.ball += 1;
      }

      return count;
    },
    { ball: 0, strike: 0 },
  );

  return scoreCount;
};

export default checkBallCount;
