import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  constructor() {
    this.nothing = false;
    this.strike = 0;
    this.ball = 0;
    this.computer = [];
    this.user = [];
  }

  async play() {
    // 컴퓨터 랜덤으로 숫자 3개 선택
    while (this.computer.length < 3) {
      const num = MissionUtils.Random.pickNumberInRange(1, 9);
      this.computer.push(num);
    }
  }
}

const app = new App();
app.play();

export default App;
