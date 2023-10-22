import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async play() {}
}

function generateComputerNumber() {
  const computer = [];
  while (computer.length < 3) {
    const number = MissionUtils.Random.pickNumberInRange(1, 9);
    if (!computer.includes(number)) {
      computer.push(number);
    }
  }
}

export default App;
