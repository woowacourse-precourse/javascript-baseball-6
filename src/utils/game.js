import { Console, Random } from "@woowacourse/mission-utils";

/**
 * 1에서 9까지 서로 다른 임의의 수 3개를 생성하는 함수
 * @returns {string} 서로 다른 3자리의 수
 */
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

/**
 * 컴퓨터와 사용자가 입력한 숫자를 비교하는 함수
 * @param {string} computerNumbers 컴퓨터의 숫자
 * @param {string} userInputNumber 사용자가 입력한 숫자
 * @returns {[number, number]} 스트라이크 횟수와 볼 횟수
 */
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

/**
 * 결과를 화면에 출력하는 함수
 * @param {[number, number]} result 스트라이크 횟수와 볼 횟수
 */
function printResultMessage(result) {
  const [strikeCount, ballCount] = result;
  const messages = [];

  if (strikeCount === 0 && ballCount === 0) messages.push("낫싱");
  if (ballCount !== 0) messages.push(`${ballCount}볼`);
  if (strikeCount !== 0) messages.push(`${strikeCount}스트라이크`);

  Console.print(messages.join(" "));
  return;
}

export { generateComputerNumbers, compareNumbers, printResultMessage };
