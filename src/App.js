import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  constructor() {
    this.random = MissionUtils.Random;
    this.console = MissionUtils.Console;
  }

  async play() {
    this.console.print("숫자 야구 게임을 시작합니다.");
    const answer = this.makeRandomNum();
    // this.console.print(answer);
  }

  makeRandomNum() {
    const nums = [];
    while (nums.length < 3) {
      const num = this.random.pickNumberInRange(1, 9);
      if (!nums.includes(num)) nums.push(num);
    }
    return nums;
  }
}

export default App;

const app = new App();
app.play();