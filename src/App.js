import * as MissionUtils from "@woowacourse/mission-utils";
import { Console } from "@woowacourse/mission-utils";

class App {
  number() {
    const RANDOM_NUMBER = new Set();
    while (RANDOM_NUMBER.size !== 3) {
      RANDOM_NUMBER.add(MissionUtils.Random.pickNumberInRange(1, 9));
    }
    return [...new Set(RANDOM_NUMBER)];
  }

  async inputNumber() {
    const USER_NUMBER = await Console.readLineAsync("숫자를 입력해주세요: ");
    if (
      USER_NUMBER.length !== 3 ||
      new Set(USER_NUMBER).size !== 3 ||
      USER_NUMBER.includes("0")
    ) {
      throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
    }
    return USER_NUMBER;
  }

  async play() {
    Console.print("숫자 야구 게임을 시작합니다.");
    await this.inputNumber();
  }
}

export default App;

const app = new App();
app.play();
