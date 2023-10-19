import { Console, Random } from "@woowacourse/mission-utils";

function generateComputerNumbers() {
  const computer = [];

  while (computer.length < 3) {
    const number = Random.pickNumberInRange(1, 9);
    if (!computer.includes(number)) {
      computer.push(number);
    }
  }

  return computer.join("");
}

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

function printResultMessage(result) {
  const [strikeCount, ballCount] = result;
  let resultMessage = "";

  if (strikeCount === 0 && ballCount === 0) resultMessage = "낫싱";
  else if (strikeCount === 0) resultMessage = `${ballCount}볼`;
  else if (ballCount === 0) resultMessage = `${strikeCount}스트라이크`;
  else resultMessage = `${ballCount}볼 ${strikeCount}스트라이크`;

  Console.print(resultMessage);
}

export { generateComputerNumbers, compareNumbers, printResultMessage };
