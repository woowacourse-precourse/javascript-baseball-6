import { MissionUtils, Console } from "@woowacourse/mission-utils";

class App {
  constructor() {
    this.computerNumbers = [];
  }

  async play() {
    Console.print("숫자 야구 게임을 시작합니다");
    while (true) {
      this.getComputerNum();
      
      
    }
  }

  getComputerNum() {
    this.computerNumbers = [];
    while (this.computerNumbers.length < 3) {
      let number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!this.computerNumbers.includes(number)) {
        this.computerNumbers.push(number);
      }
    }
  }
}

const app = new App();
app.play();

export default App;