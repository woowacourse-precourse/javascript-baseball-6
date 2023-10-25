import { Console } from "@woowacourse/mission-utils";
import { ERROR } from "../constants/constants.js";

const getUserNumbers = async () => {
  const numbers = await Console.readLineAsync("숫자를 입력해주세요 : ");
  const pattern = /^[1-9]{3}$/;

  if (!pattern.test(numbers)) {
    throw new Error(ERROR.FORMAT_ERROR);
  } else if (new Set(numbers).size !== 3) {
    throw new Error(ERROR.COUNT_ERROR);
  }
  return Array.from(numbers, Number);
};

export default getUserNumbers;
