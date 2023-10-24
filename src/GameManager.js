import { Console, MissionUtils } from "@woowacourse/mission-utils";
import Inspect from "./Inspect";

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

  insertNum() {
    const myNum = Console.readLineAsync("숫자를 입력해주세요 : ");
    const inspect = new Inspect();

    if (inspect.checkAll(myNum) != "success") {
      throw new Error("게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n");
    }
    return myNum;
  }
}

export default GameManager;
