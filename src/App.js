import * as MissionUtils from "@woowacourse/mission-utils";
import { Console } from "@woowacourse/mission-utils";

class App {
  constructor() {
    this.number = this.number();
  }

  number() {
    const RANDOM_NUMBER = new Set();
    while (RANDOM_NUMBER.size !== 3) {
      RANDOM_NUMBER.add(MissionUtils.Random.pickNumberInRange(1, 9));
    }

    return RANDOM_NUMBER;
  }

  async play() {
    Console.print("숫자 야구 게임을 시작합니다.");
    // Console.print(this.number);
  }
}

export default App;

const app = new App();
app.play();
