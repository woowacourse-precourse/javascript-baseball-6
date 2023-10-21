import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async play() {
    const answer = this.getRandNum();
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
  }

  getRandNum() {
    const num = MissionUtils.Random.pickUniqueNumbersInRange(1, 9, 3);
    return num.join("");
  }
}

const app = new App();
app.play();

export default App;
