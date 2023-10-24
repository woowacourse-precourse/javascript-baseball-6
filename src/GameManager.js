import { Console, MissionUtils } from "@woowacourse/mission-utils";

class GameManager {
  gamestart() {
    Console.print("숫자 야구 게임을 시작합니다.");
  }

  generateRandomNum() {
    randomNum = [];

    while (randomNum.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!randomNum.includes(number)) {
        randomNum.push(number);
      }
    }

    return randomNum;
  }
}

export default GameManager;
