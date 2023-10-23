import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  constructor() {
    this.randomNumbers = [];
  }

  async play() {
    console.log("숫자 야구 게임을 시작합니다.");
    this.generateRandomNumbers();
  }

  generateRandomNumbers() {
    while (this.randomNumbers.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!this.randomNumbers.includes(number)) {
        this.randomNumbers.push(number);
      }
    }
  }
}

export default App;

const app = new App();
app.play();
