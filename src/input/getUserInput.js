import { Console } from "@woowacourse/mission-utils";
import isValidNumber from "./isValidInput.js";

async function getUserInput() {
  try {
    const USER_INPUT = await Console.readLineAsync('숫자를 입력해주세요 : ');
    if(isValidNumber(USER_INPUT)) return USER_INPUT;
  } catch (error) {
    throw new Error(error);
  }
}

export default getUserInput;