import { MissionUtils } from "@woowacourse/mission-utils";

const GREETING = "숫자 야구 게임을 시작합니다.";

class App {
  async play() {
    MissionUtils.Console.print(GREETING);

    const computerNum = this.makeComputerNumber();

    MissionUtils.Console.print(computerNum);
  }

  makeComputerNumber() {
    let computer = [];
    while (computer.length < 3) {
      let num = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!computer.includes(num)) {
        computer.push(num);
      }
    }
    return computer;
  }
}
const app = new App();
app.play();
export default App;
