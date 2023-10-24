import Message from "../View/Message.js";
import { MissionUtils } from "@woowacourse/mission-utils";

class BaseballGame {
  constructor() {}

  // 사용자가 맞출 상대방(컴퓨터)의 수를 생성하는 메서드입니다.
  static createRandomNumber() {
    let numbers = new Set();

    // 중복되지 않는 1~9로 이루어진 3자리 수를 생성합니다.
    while (numbers.size < 3) {
      const randomNumber = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!numbers.has(randomNumber)) {
        numbers = add(randomNumber);
      }
    }
    return [...numbers];
  }

  // 사용자가 입력한 수가 정상적인 수인지 확인하는 메서드입니다.
  static checkRightNumber(userNumber) {
    let number = String(userNumber)
      .split("")
      .map(n => parseInt(n, 10));

    // 에러 확인
    if (!number.every(() => isNaN)) { // 숫자를 입력했는가?
      throw new Error(Message.ERROR_NAN);
    } else if (!number.every(n => /[1-9]/.test(n))) { // 0을 제외한 1~9사이 숫자를 입력했는가?
      throw new Error(Message.ERROR_RANGE);
    } else if (number.length !== 3) { // 3자리 숫자를 입력했는가?
      throw new Error(Message.ERROR_LENGTH);
    } else if (new Set(number).size !== 3) {
      throw new Error(Message.ERROR_DUPLICATE);
    }

    return true;
  }
};

export default BaseballGame;