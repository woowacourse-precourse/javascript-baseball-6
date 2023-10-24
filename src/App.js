import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async play() {}
  // 3개 숫자 선택
  pickRandNumber() {
    const computer = [];
    while (computer.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!computer.includes(number)) {
        computer.push(number);
      }
    }
    return computer;
  }
}

const app = new App();
app.play();
export default App;
