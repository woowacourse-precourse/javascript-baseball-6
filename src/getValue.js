import { Console, Random } from "@woowacourse/mission-utils";

export function getAnswer(SIZE) {
  let answer = "";
  let digitCount = 0;

  while (digitCount < SIZE) {
    const pickedNumber = Random.pickNumberInRange(1, 9);

    if (answer.indexOf(pickedNumber) === -1) {
      digitCount += 1;
      answer = answer + pickedNumber;
    }
  }
  return answer;
}

export async function getUserInput(SIZE) {
  const userInput = await Console.readLineAsync("숫자를 입력해주세요 : ");
  const userInputSet = new Set(userInput);

  if (isNaN(userInput)) {
    throw new Error("[ERROR]: Input value must be a number");
  }
  if (userInput.length !== SIZE) {
    throw new Error(`[ERROR]: Input value must be ${SIZE} digit number`);
  }
  if (userInputSet.size !== SIZE) {
    throw new Error(
      `[ERROR]: Input value must be ${SIZE} digit number with unique.`
    );
  }
  if (userInput.indexOf("0") !== -1) {
    throw new Error(`[ERROR]: Input value can not include zero.`);
  }
  return userInput;
}
