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
};

export default BaseballGame;
