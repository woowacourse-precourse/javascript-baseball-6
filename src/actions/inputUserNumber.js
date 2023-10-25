import { Console } from "@woowacourse/mission-utils";
import { ERROR_MESSAGE, GAME_MESSAGE } from "../constants/message";

export const inputUserNumber = async () => {
  const userInput = await Console.readLineAsync(GAME_MESSAGE.INPUT);
  const USER_INPUT_LENGTH = 3;

  // 3글자인지 확인
  if (input.length !== USER_INPUT_LENGTH) {
    throw Error(ERROR_MESSAGE.REQUIRED_INPUT_LENGTH);
  }

  const userInputArr = new Set(userInput.split("").map((el) => parseInt(el, 10)));

  // 중복된 숫자 제거
  if (userInputArr.size !== USER_INPUT_LENGTH) {
    throw Error(ERROR_MESSAGE.DUPLICATED_NUMBER);
  }

  return userInputArr;
};