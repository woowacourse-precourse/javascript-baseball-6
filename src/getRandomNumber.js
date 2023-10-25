import { Console, Random } from "@woowacourse/mission-utils";

export function getAnswer(SIZE) {
  if (!Number.isInteger(SIZE)) {
    return new Error("[ERROR]: digitNumber must be a natural number");
  }
  if (SIZE <= 0 || SIZE >= 10) {
    return new Error(
      "[ERROR]: digitNumber cannot be less than 0 or greater than 10"
    );
  }

  let validNumber = "";
  let digitCount = 0;
  while (digitCount < SIZE) {
    const pickedNumber = Random.pickNumberInRange(1, 9);
    if (validNumber.indexOf(pickedNumber) === -1) {
      digitCount += 1;
      validNumber = validNumber + pickedNumber;
    }
  }
  return validNumber;
}

export async function getUserInput(SIZE) {
  const guessInputNumber = await Console.readLineAsync(
    "숫자를 입력해주세요 : "
  );
  if (isNaN(guessInputNumber)) {
    throw new Error("[ERROR]: guessInputNumber must be a Number");
  }
  if (guessInputNumber.length !== SIZE) {
    throw new Error(`[ERROR]: guessInputNumber must be ${SIZE} digit Number`);
  }
  return guessInputNumber;
}
