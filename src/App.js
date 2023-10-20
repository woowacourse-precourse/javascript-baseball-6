import { MissionUtils } from "@woowacourse/mission-utils";
import { Console } from "@woowacourse/mission-utils";

function setComputerNumber() {
  let computerNumber = [];
  while (computerNumber.length < 3) {
    let number = MissionUtils.Random.pickNumberInRange(1, 9);
    if (!computerNumber.includes(number)) {
      computerNumber.push(number);
    }
    return computerNumber;
  }
}

function compare(player, computer) {
  let ball = 0;
  let strike = 0;
  for (let i = 0; i < 3; i++) {
    if (player[i] == computer[i]) {
      strike += 1;
    } else if (computer.includes(player[i])) {
      ball += 1;
    }
  }
  return [ball, strike];
}

function run() {
  Console.print("숫자 야구 게임을 시작합니다.");
  let computer = setComputerNumber();
  while (true) {
    let ball = 0;
    let strike = 0;
  }
}

class App {
  async play() {
    run();
  }
}

const app = new App();
app.play();

export default App;
