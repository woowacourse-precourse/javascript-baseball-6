function compareNumbers(computerNumbers, userInputNumber) {
  let strikeCount = 0;
  let ballCount = 0;

  for (let i = 0; i < computerNumbers.length; i++) {
    if (computerNumbers[i] === userInputNumber[i]) {
      strikeCount += 1;
      continue;
    }

    if (computerNumbers.includes(userInputNumber[i])) {
      ballCount += 1;
    }
  }

  return [strikeCount, ballCount];
}

export { compareNumbers };
