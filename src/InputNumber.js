import { Console } from "@woowacourse/mission-utils";
import {
  DuplicationErrorMessage,
  FormErrorMessage,
  LengthErrorMessage,
} from "./Message/ErrorMessage";

/**
 * 사용자의 숫자 입력을 받는 함수
 * @returns {Array} 사용자가 입력한 서로 다른 세 가지 숫자를 담은 배열
 */
async function InputNumber() {
  const userInputNumber = await Console.readLineAsync(
    "숫자를 입력해주세요 : "
  ).then((res) => res.split(""));
  // 유저에게 받은 숫자의 길이가 3이 아닌 경우
  if (userInputNumber.length !== 3) {
    LengthErrorMessage();
  }
  // 유저에게 받은 입력에 숫자가 아닌 것이 있는 경우
  if (isNaN(+userInputNumber.join(""))) {
    FormErrorMessage();
  }
  // 유저에게 받은 숫자에 중복숫자가 있는 경우
  if (new Set(userInputNumber).size !== 3) {
    DuplicationErrorMessage();
  }
  return userInputNumber;
}

export default InputNumber;
