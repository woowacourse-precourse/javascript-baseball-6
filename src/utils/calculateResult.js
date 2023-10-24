const countBallAndStrike = (computerNumberArray, userNumberArray) => {
  let ballCount = 0;
  let strikeCount = 0;

  computerNumberArray.forEach((computerNumber, index) => {
    if (computerNumber === userNumberArray[index]) {
      strikeCount += 1;
    } else if (userNumberArray.includes(computerNumber)) {
      ballCount += 1;
    }
  });

  return { ballCount, strikeCount };
};

export const calculateResult = (computerNumber, userNumber) => {
  return countBallAndStrike([...computerNumber], [...userNumber]);
};
