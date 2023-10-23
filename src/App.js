import { Console } from "@woowacourse/mission-utils";

class App {
  constructor() {
    this.secretNumber = [null, null, null];
  }

  static printGreeting() {
    Console.print("숫자 야구 게임을 시작합니다.");
  }

  static playBaseBall() {}

  async play() {
    printGreeting();
    playBaseBall();
  }
}

export default App;
