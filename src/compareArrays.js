const OUT_COUNT = 3;
const NUMBER_OF_DIGITS = 3;

class Computer {
  static isGameOver = false;
  static setIsGameOver(boolean) {
    this.isGameOver = boolean;
  }
}

function compareArrays(randomArray, inputArray) {
  const copiedRandomArray = [...randomArray];
  const copiedInputValue = [...inputArray];

  let nothing = false;

  // 스트라이크 체크
  const strikeCount = checkStrike(copiedRandomArray, copiedInputValue);

  // 볼 체크
  const ballCount = ballCheck(copiedRandomArray, copiedInputValue);

  if (!strikeCount && !ballCount) nothing = true;

  return [strikeCount, ballCount, nothing];
}

function checkStrike(copiedRandomArray, copiedInputValue) {
  let strikeCount = 0;

  for (let i = 0; i < NUMBER_OF_DIGITS; i++) {
    if (copiedRandomArray[i] == copiedInputValue[i]) {
      strikeCount++;
      copiedRandomArray.splice(i, 1, 'strike');
    }
  }
  if (strikeCount === OUT_COUNT) {
    Computer.setIsGameOver(true);
  }

  return strikeCount;
}

function ballCheck(copiedRandomArray, copiedInputValue) {
  let ballCount = 0;
  let arrayWithoutDuplicates = new Set([...copiedRandomArray]);
  arrayWithoutDuplicates.delete('strike');
  const arrayWithoutStrike = arrayWithoutDuplicates;

  for (let i = 0; i < NUMBER_OF_DIGITS; i++) {
    if (arrayWithoutStrike.has(parseInt(copiedInputValue[i]))) ballCount++;
  }

  return ballCount;
}
export { compareArrays, Computer };
