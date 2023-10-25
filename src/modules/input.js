import { Console } from "@woowacourse/mission-utils";
import { ERROR, GAME } from "../common/text";

function checkInputValue(input) {
  const arrayValue = Array.from(
    new Set(input.split("").map((ele) => parseInt(ele, 10))),
  );
  if (arrayValue.length !== input.length)
    throw new Error(ERROR.REPEATED);
  if (arrayValue.length !== 3)
    throw new Error(ERROR.LENGTH);
  arrayValue.forEach((num) => {
    if (Number.isNaN(num) || num === 0) {
      throw new Error(ERROR.NUMBER);
    }
  });
  return arrayValue;
}

export default async function getUserInput() {
  const inputNumber = await Console.readLineAsync(GAME.INPUT);
  const vaildatedNumber = checkInputValue(inputNumber);
  if (!vaildatedNumber) return;
  return vaildatedNumber;
}
