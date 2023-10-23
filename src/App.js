import { Random, Console } from "@woowacourse/mission-utils";

class App {
  constructor() {
    this.secretNumber = [null, null, null];
  }

  static printGreeting() {
    Console.print("숫자 야구 게임을 시작합니다.");
  }

  generateSecretNumber() {
    while (this.secretNumber.length < 3) {
      const number = Random.pickNumberInRange(1, 9);
      if (!this.secretNumber.includes(number)) {
        this.secretNumber.push(number);
      }
    }
  }

  playBaseBall() {
    this.generateSecretNumber();
  }

  async play() {
    printGreeting();
    playBaseBall();
  }
}

export default App;
