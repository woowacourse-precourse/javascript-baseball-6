import { MissionUtils } from "@woowacourse/mission-utils";
import { Console } from "@woowacourse/mission-utils";

function setComputerNumber() {
  let COMPUTER = [];
  while (COMPUTER.length < 3) {
    let number = MissionUtils.Random.pickNumberInRange(1, 9);
    if (!COMPUTER.includes(number)) {
      COMPUTER.push(number);
    }
    return COMPUTER;
  }
}

function run() {
  Console.print("숫자 야구 게임을 시작합니다.");
  let COMPUTER = setComputerNumber();
}

class App {
  async play() {
    run();
  }
}

const app = new App();
app.play();

export default App;
