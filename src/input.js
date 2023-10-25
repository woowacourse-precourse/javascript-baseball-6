import { Console } from "@woowacourse/mission-utils";
import { ERROR, GAME } from './text.js';

function checkInputValue(input) {
  const arrayValue = Array.from(new Set(input.split('').map((ele) => parseInt(ele))));
  if (arrayValue.length !== 3)
    throw new Error(ERROR.LENGTH);
  if (arrayValue.length !== input.length)
    throw new Error(ERROR.REPEATED);
  arrayValue.forEach((ele) => {
    if (isNaN(ele) || ele === 0) {
      throw new Error(ERROR.NUMBER);
    }
  })
  return arrayValue;
}

export default async function getUserInput() {
  const inputNumber = await Console.readLineAsync(GAME.INPUT);
  const vaildatedNumber = checkInputValue(inputNumber);
  if (!vaildatedNumber)
    return;
  return vaildatedNumber;
}