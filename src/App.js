import { MissionUtils, Console } from "@woowacourse/mission-utils";

class App {
  async play() {
    startGame();
  }
}

function startGame () {
  return Console.print("숫자 야구 게임을 시작합니다.");
}

function createComputerNumber () {
  const computer = [];
  while (computer.length < 3) {
    const number = MissionUtils.Random.pickNumberInRange(1, 9);
    if (!computer.includes(number)) {
      computer.push(number);
  }
}
}

const app = new App();
app.play();
export default App;
