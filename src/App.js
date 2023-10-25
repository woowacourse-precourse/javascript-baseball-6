import { MissionUtils } from "@woowacourse/mission-utils";
class App {
  constructor() {
    this.random = [];
  }
  async play() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
    this.randomNumber();
  }

  randomNumber() {
    const random = [];
    while (random.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!random.includes(number)) random.push(number);
    }
    this.random = random;
  }
}

export default App;
