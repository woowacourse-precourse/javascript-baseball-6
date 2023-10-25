import { Console } from "@woowacourse/mission-utils";
import { isValidNumber } from "./Validation.js";
import { generateRandomNumber, countBallStrike } from "./Baseball.js";

export async function startGame() {
  const inputNumber = Console.readLineAsync("숫자를 입력해주세요 : ");
  // 플레이어 입력값의 유효성 검사
  if (!isValidNumber(await inputNumber)) {
    throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
  }
  Console.print(countBallStrike(generateRandomNumber(), await inputNumber));
}
