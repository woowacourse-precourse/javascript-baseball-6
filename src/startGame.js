import { Console } from "@woowacourse/mission-utils";
import getRandomNumBer from "./getRandomNumber.js";

export default async function startGame() {
  Console.print("숫자 야구 게임을 시작합니다.");
  const targetNumber = getRandomNumBer(3);
  Console.print(targetNumber);
  while (true) {
    const validInputNumber = await userInputNumber(3);
    if (validInputNumber === targetNumber) {
      break;
    }
  }
}

// 유효한 값이 입력됐는지 확인
const userInputNumber = async (digitNumber) => {
  const guessInputNumber = await Console.readLineAsync(
    "숫자를 입력해주세요 : "
  );
  if (isNaN(guessInputNumber)) {
    throw new Error("guessInputNumber must be a Number");
  }
  if (guessInputNumber.length !== digitNumber) {
    throw new Error(`guessInputNumber must be ${digitNumber} digit Number`);
  }
  return guessInputNumber;
};
