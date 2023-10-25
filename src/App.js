import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async play() {
    try {
      // 서로 다른 random값 추출
      const computer = [];
      while (computer.length < 3) {
        const number = MissionUtils.Random.pickNumberInRange(1, 9);
        if (!computer.includes(number)) {
          computer.push(number);
        }
      }

    } catch (error) {
      // reject 되는 경우
    }
  }
}

const app = new App();
app.play();

export default App;
